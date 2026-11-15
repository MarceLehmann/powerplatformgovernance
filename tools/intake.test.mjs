import test from 'node:test';
import assert from 'node:assert/strict';
import { approval, processing } from './automation.mjs';
import { autoDisabledPrefix, intakeDefinition, intakeSchema } from './intake.mjs';

test('intake accepts only form fields and explicit opt-in', () => {
  assert.equal(intakeSchema.additionalProperties, false);
  assert.deepEqual(intakeSchema.required, ['content_url']);
  assert.deepEqual(intakeSchema.properties.publish_credit.enum, ['', 'yes']);
  assert.equal(intakeSchema.properties.website.maxLength, 0);
  const url = new RegExp(intakeSchema.properties.content_url.pattern);
  for (const value of ['https://powerplatformtip.com/feed.xml', 'https://learn.microsoft.com/en-us/power-platform/admin/']) assert.ok(url.test(value));
  for (const value of ['http://example.com/', 'https://127.0.0.1/', 'https://localhost/', 'https://user:secret@example.com/', 'https://example.com:123/', 'https://example.com/\nfoo']) assert.equal(url.test(value), false, value);
  for (const value of ['https://www.youtube.com/@m365-show', 'https://medium.com/@author/post']) assert.ok(url.test(value), value);
  const hostCheck = intakeDefinition().actions.Validate.actions.Validate_host.inputs.content.content_url_valid;
  assert.match(hostCheck, /substring\(outputs\('Content_URL'\), 8\), '\/'\)\), '\?'\)\), '@'/, 'userinfo check limited to authority');
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
  assert.deepEqual([...actions.values()].filter(action => action.type === 'OpenApiConnection').map(action => action.inputs.host.operationId), ['ListRecords', 'CreateRecord', 'UpdateRecord']);
  assert.deepEqual(actions.get('Accepted').runAfter, { Store: ['Succeeded'] });
  assert.equal(actions.get('Invalid_request').inputs.statusCode, 400);
  assert.equal(actions.get('Storage_failed').inputs.statusCode, 503);
  assert.match(actions.get('Find_existing').inputs.parameters.$filter, /replace.*%27%27/);
  // Reaktivierung nur fuer automatisch abgeschaltete, freigegebene Quellen: kein Wiedereinschalten von Hand gestoppter
  // Quellen, kein Ueberschreiben des Quarantaene-Kennzeichens.
  assert.match(actions.get('Find_existing').inputs.parameters.$select, /new_lastmessage/);
  const reactivate = actions.get('Reactivate_if_disabled').expression;
  assert.ok(reactivate.includes(`equals(first(body('Find_existing')?['value'])?['new_approval'], ${approval.approved})`), 'only approved sources');
  assert.ok(reactivate.includes(`startsWith(coalesce(first(body('Find_existing')?['value'])?['new_lastmessage'], ''), '${autoDisabledPrefix}')`), 'only auto-disabled sources');
  assert.equal(autoDisabledPrefix, 'Auto-disabled:');
  assert.equal('Quarantine: the domain is not yet an approved source.'.startsWith(autoDisabledPrefix), false);
});
test('secret header: intake checks the key before anything else and stores nothing without it', () => {
  const flow = intakeDefinition();
  const validate = flow.actions.Validate.actions;
  assert.deepEqual(validate.Check_key.runAfter, {});
  assert.deepEqual(validate.Validate_payload.runAfter, { Check_key: ['Succeeded'] });
  assert.match(validate.Check_key.inputs.content.key_ok, /x-kmupower-key/);
  assert.match(validate.Check_key.inputs.content.key_ok, /not\(empty\(parameters\(/);
  assert.deepEqual(validate.Check_key.inputs.schema.properties.key_ok.enum, [true]);
  assert.equal(JSON.stringify(flow).includes('sig='), false, 'no trigger signature or key value in the definition');
  assert.equal(flow.parameters['KMUpower Submit Key (new_kmusubmitkey)'].defaultValue, '');
  assert.deepEqual(flow.actions.Invalid_request.runAfter, { Validate: ['Failed', 'TimedOut'] });
  assert.equal(intakeDefinition({ requireKey: false }).actions.Validate.actions.Check_key, undefined);
});
