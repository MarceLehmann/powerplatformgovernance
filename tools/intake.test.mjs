import test from 'node:test';
import assert from 'node:assert/strict';
import { approval, processing } from './automation.mjs';
import { intakeDefinition, intakeSchema } from './intake.mjs';

test('intake accepts only form fields and explicit opt-in', () => {
  assert.equal(intakeSchema.additionalProperties, false);
  assert.deepEqual(intakeSchema.required, ['content_url']);
  assert.deepEqual(intakeSchema.properties.publish_credit.enum, ['', 'yes']);
  assert.equal(intakeSchema.properties.website.maxLength, 0);
  const url = new RegExp(intakeSchema.properties.content_url.pattern);
  for (const value of ['https://powerplatformtip.com/feed.xml', 'https://learn.microsoft.com/en-us/power-platform/admin/']) assert.ok(url.test(value));
  for (const value of ['http://example.com/', 'https://127.0.0.1/', 'https://localhost/', 'https://user:secret@example.com/', 'https://example.com:123/', 'https://example.com/\nfoo']) assert.equal(url.test(value), false, value);
  const linkedin = new RegExp(intakeSchema.properties.submitter_linkedin.pattern);
  assert.ok(linkedin.test('https://www.linkedin.com/in/marcelehmann/'));
  assert.equal(linkedin.test('https://linkedin.com.evil.org/in/person'), false);
});

test('webhook can only create pending disabled records and cannot fetch content', () => {
  const flow = intakeDefinition();
  assert.equal(JSON.stringify(flow).includes('"pattern"'), false);
  assert.equal(flow.triggers.manual.kind, 'Http');
  assert.equal(flow.triggers.manual.runtimeConfiguration.concurrency, undefined);
  const actions = new Map();
  function visit(block) {
    for (const [name, action] of Object.entries(block)) {
      assert.equal(actions.has(name), false);
      actions.set(name, action);
      for (const [dependency, statuses] of Object.entries(action.runAfter ?? {})) {
        assert.ok(block[dependency], `${name}: ${dependency}`);
        assert.ok(Array.isArray(statuses));
      }
      assert.notEqual(action.type, 'Http');
      if (action.actions) visit(action.actions);
      if (action.else) visit(action.else.actions);
    }
  }
  visit(flow.actions);
  const create = actions.get('Create_submission').inputs.parameters;
  assert.equal(create['item/new_approval'], approval.pending);
  assert.equal(create['item/new_enabled'], false);
  assert.equal(create['item/new_processing'], processing.review);
  assert.match(create['item/new_submittername'], /publish_credit.*'yes'/);
  assert.deepEqual([...actions.values()].filter(action => action.type === 'OpenApiConnection').map(action => action.inputs.host.operationId), ['ListRecords', 'CreateRecord']);
  assert.deepEqual(actions.get('Accepted').runAfter, { Store: ['Succeeded'] });
  assert.equal(actions.get('Invalid_request').inputs.statusCode, 400);
  assert.equal(actions.get('Storage_failed').inputs.statusCode, 503);
  assert.match(actions.get('Find_existing').inputs.parameters.$filter, /replace.*%27%27/);
});