(() => {
  const form = document.querySelector('[data-submission-form]');
  const status = document.querySelector('[data-submission-status]');
  if (!form || !status) return;

  const button = form.querySelector('button[type="submit"]');
  const endpoint = form.getAttribute('action').trim();
  let configured = false;
  let sending = false;
  // Spam protection before sending: hidden website field must stay empty and the form needs
  // at least 3 seconds between loading and sending. The intake flow checks again (website maxLength 0).
  const loadedAt = Date.now();
  const minFillMs = 3000;
  try {
    const url = new URL(endpoint);
    const flowHost = /(?:^|\.)(?:logic\.azure\.com|api\.powerplatform\.com|flow\.microsoft\.com)$/i.test(url.hostname);
    const directAllowed = form.getAttribute('data-direct-webhook') === 'true' && flowHost &&
      /\/workflows\/[a-f0-9]{32}\/triggers\/manual\/paths\/invoke$/i.test(url.pathname) &&
      ['api-version', 'sp', 'sv', 'sig'].every(key => url.searchParams.getAll(key).length === 1) &&
      [...url.searchParams.keys()].length === 4 && url.searchParams.get('sig').length >= 20;
    configured = url.protocol === 'https:' && !url.username && !url.password && !url.hash &&
      (!url.port || url.port === '443') && (directAllowed || (!flowHost && !url.search));
  } catch {}
  button.disabled = !configured;

  form.addEventListener('invalid', event => {
    const details = event.target.closest('details');
    if (details) details.open = true;
  }, true);

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending) return;
    if (!configured) {
      status.textContent = 'Submissions are not open yet. Nothing has been sent.';
      return;
    }
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    if (String(values.get('website') || '').trim() !== '') {
      form.reset();
      status.textContent = 'Your suggestion has been submitted for review. Nothing has been published.';
      return;
    }
    if (Date.now() - loadedAt < minFillMs) {
      status.textContent = 'That was very fast. Please send the form again in a few seconds. Your entries are unchanged.';
      return;
    }
    const payload = { content_url: values.get('content_url').trim(), website: values.get('website') || '', form_started: loadedAt };
    if (values.get('publish_credit') === 'yes') {
      payload.publish_credit = 'yes';
      payload.submitter_name = (values.get('submitter_name') || '').trim();
      payload.submitter_linkedin = (values.get('submitter_linkedin') || '').trim();
    }
    sending = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    status.textContent = 'Sending for review...';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
        mode: 'cors', credentials: 'omit', referrerPolicy: 'no-referrer', cache: 'no-store', signal: controller.signal,
      });
      if (response.status === 429) {
        status.textContent = 'Too many submissions. Please try again later. Your entries are unchanged.';
        return;
      }
      if (response.status === 400) {
        status.textContent = 'Please check the HTTPS article URL and optional LinkedIn profile. Your entries are unchanged.';
        return;
      }
      const result = await response.json();
      if (!response.ok || result.accepted !== true || result.status !== 'awaiting_review') throw new Error('Unconfirmed submission');
      form.reset();
      status.textContent = 'Your suggestion has been submitted for review. Nothing has been published.';
    } catch {
      status.textContent = 'We could not confirm your submission. Your entries are unchanged. Please try again.';
    } finally {
      clearTimeout(timeout);
      sending = false;
      button.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });
})();