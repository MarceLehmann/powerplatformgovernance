import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { approval, config, flowDefinition, isEligible, kind, processing, tableDefinition } from './automation.mjs';

const ready = { statecode: 0, new_enabled: true, new_approval: approval.approved, new_kind: kind.article, new_processing: processing.ready };

test('only explicitly approved and enabled records can run', () => {
  assert.equal(isEligible(ready), true);
  for (const patch of [
    { new_enabled: false }, { new_enabled: 'true' }, { statecode: 1 },
    { new_approval: approval.pending }, { new_approval: approval.rejected },
    { new_kind: null }, { new_processing: processing.review },
    { new_processing: processing.published },
  ]) assert.equal(isEligible({ ...ready, ...patch }), false, JSON.stringify(patch));
});

test('RSS repeats, articles stop after publication, errors can retry', () => {
  assert.equal(isEligible({ ...ready, new_kind: kind.rss }), true);
  assert.equal(isEligible({ ...ready, new_processing: processing.published }), false);
  assert.equal(isEligible({ ...ready, new_processing: processing.error }), true);
  assert.equal(config.intervalMinutes, 5);
});

test('table matches submission fields and defaults to no approval or consent', () => {
  const attributes = Object.fromEntries(tableDefinition.Attributes.map(attribute => [attribute.SchemaName, attribute]));
  assert.equal(attributes.new_approval.DefaultFormValue, approval.pending);
  assert.equal(attributes.new_enabled.DefaultValue, false);
  assert.equal(attributes.new_publishcredit.DefaultValue, false);
  for (const field of ['new_contenturl', 'new_submittername', 'new_submitterlinkedin', 'new_publishcredit']) assert.ok(attributes[field]);
  assert.equal(tableDefinition.SchemaName, config.table);
});

test('flow is sequential, approval-filtered, uses Foundry and confirms GitHub results', () => {
  const flow = flowDefinition();
  assert.equal(JSON.stringify(flow).includes('"pattern"'), false);
  assert.equal(flow.triggers.Every_5_minutes.recurrence.interval, 5);
  assert.equal(flow.triggers.Every_5_minutes.runtimeConfiguration.concurrency.runs, 1);
  assert.match(flow.actions.List_sources.inputs.parameters.$filter, /new_enabled eq true and new_approval eq 100000001/);
  const actions = new Map();
  function visit(block) {
    for (const [name, action] of Object.entries(block)) {
      assert.equal(actions.has(name), false, `Duplicate action ${name}`);
      actions.set(name, action);
      for (const [dependency, states] of Object.entries(action.runAfter ?? {})) {
        assert.ok(block[dependency], `${name}: missing dependency ${dependency}`);
        assert.ok(Array.isArray(states));
      }
      if (action.type === 'Foreach') assert.equal(action.runtimeConfiguration.concurrency.repetitions, 1);
      if (action.actions) visit(action.actions);
      if (action.else) visit(action.else.actions);
    }
  }
  visit(flow.actions);
  assert.equal(actions.get('Foundry_extract').inputs.host.operationId, 'ChatCompletion');
  assert.equal(actions.get('Read_RSS').inputs.host.operationId, 'ListFeedItems');
  assert.equal(actions.get('Read_RSS').inputs.parameters.since, undefined);
  assert.match(actions.get('Unseen_RSS_items').inputs.where, /new_seenids/);
  assert.equal(actions.get('Confirm_publication').inputs.parameters['item/new_seenids'], "@items('For_each_source')?['new_pendingseenids']");
  assert.equal(actions.get('Read_publication_receipt').inputs.host.operationId, 'GetReference');
  assert.deepEqual(actions.get('Confirm_publication').runAfter, { Read_publication_receipt: ['Succeeded'] });
  assert.equal(actions.get('Processing_not_queued').expression, `@not(equals(items('For_each_source')?['new_processing'], ${processing.queued}))`);
  assert.ok(actions.get('Processing_not_queued').actions.Record_failure);
  assert.deepEqual(Object.keys(actions.get('Processing_not_queued').else.actions), ['Preserve_receipt_state']);
  assert.equal(actions.get('Missing_receipt_review').inputs.parameters['item/new_seenids'], undefined);
  assert.equal(actions.has('GitHub_results'), false);
  assert.deepEqual(actions.get('Validate_source_URL').inputs.schema.properties.scheme.enum, ['https']);
  assert.deepEqual(actions.get('Validate_source_URL').inputs.schema.properties.public_host.enum, [true]);
  assert.equal(actions.get('Dispatch_to_GitHub').inputs.parameters.body.event_type, 'curated-publication');
  assert.deepEqual(actions.get('Dispatch_to_GitHub').runAfter, { Mark_queued: ['Succeeded'] });
  assert.match(actions.get('Still_approved').expression, /modifiedon/);
  assert.equal(actions.get('Confirm_publication').inputs.parameters['item/new_failures'], 0);
  assert.equal(actions.get('Missing_receipt_review').inputs.parameters['item/new_watermark'], undefined);
  assert.equal(isEligible({ ...ready, new_processing: processing.queued }), false);
  assert.match(actions.get('Article_URL').inputs, /startsWith\(toLower\(trim\(items\('For_each_article'\)\?\['primaryLink'\]\)\), 'http'\)/);
  assert.match(actions.get('Article_URL').inputs, /uriScheme\(outputs\('Source_URL'\)\)/);
  assert.deepEqual(actions.get('Catch_article').runAfter, { Try_article: ['Failed', 'TimedOut'] });
  assert.deepEqual(actions.get('Try_article').runAfter, { Article_URL: ['Succeeded'] });
  assert.ok(actions.get('Try_article').actions.Same_approved_host, 'one bad article must not block the rest of the batch');
  assert.deepEqual(actions.get('Recheck_source').runAfter, { For_each_article: ['Succeeded'] });
});

test('publisher confirms success using a private-repository readable receipt', () => {
  const workflow = readFileSync(new URL('../.github/workflows/publish-curation.yml', import.meta.url), 'utf8');
  assert.match(workflow, /test "\$GITHUB_ACTOR" = 'MarceLehmann'/);
  assert.ok(workflow.indexOf('Record successful publication') > workflow.indexOf('Commit both languages and deploy'));
  assert.match(workflow, /refs\/tags\/curation-results\/\$REQUEST_ID/);
  assert.doesNotMatch(workflow, /if: always\(\)/);
});