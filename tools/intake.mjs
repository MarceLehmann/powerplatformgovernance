import { approval, config, kind, processing } from './automation.mjs';

export const intakeName = 'Power Platform Governance - Website submissions - Webhook';
export const intakeSchema = {
  type: 'object', additionalProperties: false, required: ['content_url'],
  properties: {
    content_url: { type: 'string', minLength: 10, maxLength: 2048, pattern: '^https://(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}(?::443)?(?:[/?#][^\\s\\u0000-\\u001f]*)?$' },
    submitter_name: { type: 'string', maxLength: 100, pattern: '^[^\\u0000-\\u001f]*$' },
    submitter_linkedin: { type: 'string', maxLength: 2048, pattern: '^(?:https://(?:www\\.)?linkedin\\.com/in/[a-zA-Z0-9_%\\-]+/?)?$' },
    publish_credit: { type: 'string', enum: ['', 'yes'] },
    website: { type: 'string', maxLength: 0 },
  },
};

const after = (...names) => Object.fromEntries(names.map(name => [name, ['Succeeded']]));
const secure = { secureData: { properties: ['inputs', 'outputs'] } };
const secureInput = { secureData: { properties: ['inputs'] } };
const response = (statusCode, body, runAfter = {}) => ({
  type: 'Response', kind: 'Http', runAfter,
  inputs: { statusCode, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }, body },
});
const dataverse = (operationId, parameters, runAfter = {}) => ({
  type: 'OpenApiConnection', runAfter, runtimeConfiguration: secure,
  inputs: {
    host: { apiId: '/providers/Microsoft.PowerApps/apis/shared_commondataserviceforapps', connectionName: 'dataverse', operationId },
    parameters, authentication: "@parameters('$authentication')",
  },
});

export function intakeDefinition() {
  const payloadSchema = { ...intakeSchema, properties: Object.fromEntries(Object.entries(intakeSchema.properties).map(([name, { pattern, ...schema }]) => [name, schema])) };
  return {
    $schema: 'https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#',
    contentVersion: '1.0.0.0',
    parameters: { $authentication: { type: 'SecureObject', defaultValue: {} }, $connections: { type: 'Object', defaultValue: {} } },
    triggers: {
      manual: { type: 'Request', kind: 'Http', inputs: { method: 'POST', schema: {} }, runtimeConfiguration: { secureData: { properties: ['outputs'] } } },
    },
    actions: {
      Validate: {
        type: 'Scope', runAfter: {}, actions: {
          Validate_payload: { type: 'ParseJson', runAfter: {}, inputs: { content: '@triggerBody()', schema: payloadSchema }, runtimeConfiguration: secureInput },
          Content_URL: { type: 'Compose', inputs: "@first(split(body('Validate_payload')?['content_url'], '#'))", runAfter: after('Validate_payload'), runtimeConfiguration: secureInput },
          Validate_host: {
            type: 'ParseJson', runAfter: after('Content_URL'), runtimeConfiguration: secureInput,
            inputs: {
              content: {
                content_url_valid: "@and(equals(uriScheme(outputs('Content_URL')), 'https'), equals(uriPort(outputs('Content_URL')), 443), contains(uriHost(outputs('Content_URL')), '.'), not(isInt(last(split(uriHost(outputs('Content_URL')), '.')))), not(contains(uriHost(outputs('Content_URL')), ':')), not(contains(outputs('Content_URL'), '@')), not(contains(outputs('Content_URL'), decodeUriComponent('%5C'))), not(contains(outputs('Content_URL'), ' ')), not(contains(outputs('Content_URL'), decodeUriComponent('%0A'))), not(contains(outputs('Content_URL'), decodeUriComponent('%0D'))), not(contains(createArray('local', 'localhost', 'internal', 'test', 'invalid', 'example', 'onion'), last(split(toLower(uriHost(outputs('Content_URL'))), '.')))))",
                linkedin_valid: "@if(empty(body('Validate_payload')?['submitter_linkedin']), true, and(equals(uriScheme(body('Validate_payload')?['submitter_linkedin']), 'https'), equals(uriPort(body('Validate_payload')?['submitter_linkedin']), 443), contains(createArray('linkedin.com', 'www.linkedin.com'), toLower(uriHost(body('Validate_payload')?['submitter_linkedin']))), startsWith(uriPath(body('Validate_payload')?['submitter_linkedin']), '/in/'), greater(length(uriPath(body('Validate_payload')?['submitter_linkedin'])), 4), not(contains(body('Validate_payload')?['submitter_linkedin'], '@')), not(contains(body('Validate_payload')?['submitter_linkedin'], '?')), not(contains(body('Validate_payload')?['submitter_linkedin'], '#')), not(contains(body('Validate_payload')?['submitter_linkedin'], decodeUriComponent('%5C')))))",
              },
              schema: { type: 'object', required: ['content_url_valid', 'linkedin_valid'], properties: { content_url_valid: { type: 'boolean', enum: [true] }, linkedin_valid: { type: 'boolean', enum: [true] } } },
            },
          },
        },
      },
      Invalid_request: response(400, { accepted: false, error: 'invalid_submission' }, { Validate: ['Failed', 'TimedOut'] }),
      Store: {
        type: 'Scope', runAfter: after('Validate'), actions: {
          Find_existing: dataverse('ListRecords', {
            entityName: config.entitySet, $select: 'new_governancesourceid', $top: 1,
            $filter: "@concat('new_contenturl eq ', decodeUriComponent('%27'), replace(outputs('Content_URL'), decodeUriComponent('%27'), decodeUriComponent('%27%27')), decodeUriComponent('%27'))",
          }),
          Create_if_new: {
            type: 'If', expression: "@empty(body('Find_existing')?['value'])", runAfter: after('Find_existing'), else: { actions: {} },
            actions: {
              Create_submission: dataverse('CreateRecord', {
                entityName: config.entitySet,
                'item/new_name': "@take(outputs('Content_URL'), 200)",
                'item/new_contenturl': "@outputs('Content_URL')",
                'item/new_kind': kind.article,
                'item/new_approval': approval.pending,
                'item/new_enabled': false,
                'item/new_processing': processing.review,
                'item/new_failures': 0,
                'item/new_publishcredit': "@equals(body('Validate_payload')?['publish_credit'], 'yes')",
                'item/new_submittername': "@if(equals(body('Validate_payload')?['publish_credit'], 'yes'), trim(coalesce(body('Validate_payload')?['submitter_name'], '')), '')",
                'item/new_submitterlinkedin': "@if(equals(body('Validate_payload')?['publish_credit'], 'yes'), coalesce(body('Validate_payload')?['submitter_linkedin'], ''), '')",
                'item/new_lastmessage': 'Website submission received. The AI Foundry quality gate will fetch and assess it within a few minutes and autonomously approve or reject it; no content was fetched by this webhook.',
              }),
            },
          },
        },
      },
      Accepted: response(202, { accepted: true, status: 'awaiting_review' }, after('Store')),
      Storage_failed: response(503, { accepted: false, error: 'temporarily_unavailable' }, { Store: ['Failed', 'TimedOut'] }),
    },
    outputs: {},
  };
}
