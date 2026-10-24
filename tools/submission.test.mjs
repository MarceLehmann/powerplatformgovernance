import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../assets/js/submission.js', import.meta.url), 'utf8');
function browser(fetch, endpoint = 'https://intake.example.org/submit', fields = {}, direct = false, elapsedMs = 5000) {
  let clockCalls = 0;
  const clock = { now: () => (clockCalls++ === 0 ? 0 : elapsedMs) };
  const listeners = {};
  const button = { disabled: true };
  const status = { textContent: '' };
  const attributes = {};
  let resets = 0;
  const form = {
    querySelector: () => button, getAttribute: name => name === 'action' ? endpoint : String(direct),
    addEventListener: (name, callback) => { listeners[name] = callback; }, reportValidity: () => true,
    setAttribute: (name, value) => { attributes[name] = value; }, removeAttribute: name => { delete attributes[name]; },
    reset: () => { resets++; },
  };
  const values = { content_url: 'https://powerplatformtip.com/feed.xml', submitter_name: 'Private name', ...fields };
  vm.runInNewContext(source, {
    document: { querySelector: selector => selector === '[data-submission-form]' ? form : status },
    URL, AbortController, setTimeout, clearTimeout, fetch, Date: clock,
    FormData: class { get(name) { return values[name] ?? null; } },
  });
  return { button, status, attributes, submit: () => listeners.submit({ preventDefault() {} }), resets: () => resets };
}
const accepted = () => ({ ok: true, status: 202, json: async () => ({ accepted: true, status: 'awaiting_review' }) });

test('submission sends JSON, omits private credit and confirms only accepted storage', async () => {
  let request;
  const page = browser(async (url, options) => { request = options; return accepted(); });
  assert.equal(page.button.disabled, false);
  await page.submit();
  assert.deepEqual(JSON.parse(request.body), { content_url: 'https://powerplatformtip.com/feed.xml', website: '' });
  assert.equal(request.credentials, 'omit');
  assert.equal(page.resets(), 1);
  assert.match(page.status.textContent, /submitted for review/);
  assert.equal(page.button.disabled, false);
});

test('explicit consent is sent and repeat clicks cannot create concurrent requests', async () => {
  let release;
  let calls = 0;
  let payload;
  const page = browser(async (url, options) => {
    calls++;
    payload = JSON.parse(options.body);
    await new Promise(resolve => { release = resolve; });
    return accepted();
  }, undefined, { publish_credit: 'yes' });
  const pending = page.submit();
  await page.submit();
  assert.equal(calls, 1);
  assert.equal(page.button.disabled, true);
  assert.equal(page.attributes['aria-busy'], 'true');
  assert.equal(payload.publish_credit, 'yes');
  assert.equal(payload.submitter_name, 'Private name');
  release();
  await pending;
  assert.equal(page.attributes['aria-busy'], undefined);
});

test('missing endpoints and credential-bearing callbacks stay disabled', async () => {
  for (const endpoint of ['', 'http://intake.example.org/', 'https://intake.example.org/?sig=secret', 'https://tenant.logic.azure.com/path', 'https://env.api.powerplatform.com/path']) {
    const page = browser(() => { throw new Error('Should not fetch'); }, endpoint);
    assert.equal(page.button.disabled, true, endpoint);
    await page.submit();
    assert.equal(page.resets(), 0);
    assert.match(page.status.textContent, /Nothing has been sent/);
  }
});

test('failed or unconfirmed responses retain entries and never claim acceptance', async () => {
  const outcomes = [
    async () => { throw new Error('Network failure'); },
    async () => ({ status: 429 }), async () => ({ status: 400 }),
    async () => ({ ok: false, status: 503, json: async () => ({ accepted: false }) }),
    async () => ({ ok: true, status: 200, json: async () => { throw new Error('HTML response'); } }),
    async () => ({ ok: true, status: 202, json: async () => ({ accepted: false }) }),
  ];
  for (const fetch of outcomes) {
    const page = browser(fetch);
    await page.submit();
    assert.equal(page.resets(), 0);
    assert.match(page.status.textContent, /entries are unchanged/);
    assert.doesNotMatch(page.status.textContent, /submitted for review/);
    assert.equal(page.button.disabled, false);
  }
});

test('signed intake callback requires explicit direct mode and valid callback shape', async () => {
  const endpoint = 'https://env.environment.api.powerplatform.com/powerautomate/automations/direct/cu/26/workflows/0123456789abcdef0123456789abcdef/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=nonsecret-test-value-only';
  assert.equal(browser(accepted, endpoint).button.disabled, true);
  const page = browser(accepted, endpoint, {}, true);
  assert.equal(page.button.disabled, false);
  await page.submit();
  assert.equal(page.resets(), 1);
  for (const invalid of [endpoint.replace('/triggers/manual/paths/invoke', '/other'), endpoint.replace('api.powerplatform.com', 'api.powerplatform.com.evil.org'), endpoint + '&sig=duplicate', endpoint + '&extra=true', endpoint.replace('sig=nonsecret-test-value-only', 'sig=short')]) {
    assert.equal(browser(accepted, invalid, {}, true).button.disabled, true);
  }
});
test('filled honeypot or sending within 3 seconds never reaches the intake', async () => {
  const bot = browser(() => { throw new Error('Should not fetch'); }, undefined, { website: 'https://spam.example' });
  await bot.submit();
  assert.match(bot.status.textContent, /submitted for review/);
  const fast = browser(() => { throw new Error('Should not fetch'); }, undefined, {}, false, 1000);
  await fast.submit();
  assert.equal(fast.resets(), 0);
  assert.match(fast.status.textContent, /very fast/);
});
