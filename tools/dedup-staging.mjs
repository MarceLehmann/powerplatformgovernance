// T-0074: cross-repo dedup between powerplatformgovernance and powerplatformdaily.com.
// Shared Dataverse table (same environment as both sites' own source tables) that each site's
// live flow stages a candidate into right before it would otherwise dispatch to GitHub. A
// separate scheduled resolver flow (dedupResolverDefinition below) waits out a window, then
// either clears the stage for dispatch or, on a same-URL collision, lets Foundry decide which
// site keeps it. Neither site's existing automation.mjs flow has its connections touched by any
// of this - only a new staging-write step is added to each, using the connection reference each
// flow already has bound.
//
// Race-safety: "only once per normalized URL" is enforced by a Dataverse Alternate Key on
// new_normalizedurl, not application logic. The staging write is a plain CreateRecord (POST);
// if a row with that key already exists, Dataverse rejects the second POST with a duplicate-key
// error - whichever site's flow reaches the table first wins the slot, deterministically, even
// if both land in the same instant. See create-dedup-staging-table.mjs for the one-time schema
// setup (table + alternate key).

export const stagingConfig = {
  environment: '7bf06bc7-6b19-e10e-ade3-9337f010d45e',
  organization: 'https://kmupower.crm17.dynamics.com',
  table: 'new_contentstaging',
  entitySet: 'new_contentstagings',
  alternateKeyName: 'new_normalizedurlkey',
};

export const site = { governance: 100000000, ppnews: 100000001 };
export const stagingStatus = { staged: 100000000, published: 100000001, superseded: 100000002 };

// Window the resolver waits before concluding "nothing competing showed up" - matches Marcel's
// 15-30 minute ask; 20 minutes splits the difference and leaves margin against the resolver's
// own 10-minute poll cadence (so a staged-at-minute-19 entry is never resolved before minute 29
// even in the worst case of just having missed a poll).
export const WAIT_MINUTES = 20;

const label = (text) => ({ LocalizedLabels: [{ Label: text, LanguageCode: 1033 }] });
const base = (name, title, required = false) => ({
  SchemaName: `new_${name}`, DisplayName: label(title),
  RequiredLevel: { Value: required ? 'ApplicationRequired' : 'None' },
});
const text = (name, title, length = 200, format = 'Text') => ({
  ...base(name, title), '@odata.type': 'Microsoft.Dynamics.CRM.StringAttributeMetadata',
  MaxLength: length, FormatName: { Value: format },
});
const choice = (name, title, options, defaultValue) => ({
  ...base(name, title), '@odata.type': 'Microsoft.Dynamics.CRM.PicklistAttributeMetadata',
  DefaultFormValue: defaultValue,
  OptionSet: { '@odata.type': 'Microsoft.Dynamics.CRM.OptionSetMetadata', IsGlobal: false,
    OptionSetType: 'Picklist', Options: Object.entries(options).map(([title, value]) => ({ Value: value, Label: label(title) })) },
});
const dateTime = (name, title) => ({
  ...base(name, title), '@odata.type': 'Microsoft.Dynamics.CRM.DateTimeAttributeMetadata',
  Format: 'DateAndTime', DateTimeBehavior: { Value: 'UserLocal' },
});
const memo = (name, title, length) => ({
  ...base(name, title), '@odata.type': 'Microsoft.Dynamics.CRM.MemoAttributeMetadata', MaxLength: length, Format: 'Text',
});

export const stagingTableDefinition = {
  '@odata.type': 'Microsoft.Dynamics.CRM.EntityMetadata', SchemaName: stagingConfig.table,
  DisplayName: label('Content staging'), DisplayCollectionName: label('Content staging entries'),
  Description: label('Cross-repo dedup staging for powerplatformgovernance and powerplatformdaily.com - T-0074.'),
  OwnershipType: 'OrganizationOwned', HasActivities: false, HasNotes: false,
  PrimaryNameAttribute: 'new_name', IsAuditEnabled: { Value: true },
  Attributes: [
    { ...text('name', 'Title (EN)'), IsPrimaryName: true, RequiredLevel: { Value: 'ApplicationRequired' } },
    { ...text('normalizedurl', 'Normalized source URL', 2048, 'Text'), RequiredLevel: { Value: 'ApplicationRequired' } },
    // Alternate keys have a ~1700-byte index limit (2 bytes/char), too small for the 2048-char
    // new_normalizedurl column. Power Automate's expression language has no native hash
    // function, so instead of hashing: key on a capped copy (take(normalizedUrl, 800), 1600
    // bytes, safely under the limit). Real article URLs are never remotely close to 800 chars,
    // so this is collision-free in practice without needing a real hash.
    { ...text('urlhash', 'Normalized URL (capped, key)', 800), RequiredLevel: { Value: 'ApplicationRequired' } },
    choice('site', 'Site', { Governance: site.governance, 'PPNews/Daily': site.ppnews }, site.governance),
    { ...text('sourcerecordid', 'Origin record ID', 100), RequiredLevel: { Value: 'ApplicationRequired' } },
    choice('status', 'Status', { Staged: stagingStatus.staged, Published: stagingStatus.published, Superseded: stagingStatus.superseded }, stagingStatus.staged),
    dateTime('stagedat', 'Staged at'),
    text('tags', 'Tags', 500),
    memo('payload', 'Full publication payload (JSON)', 50000),
    memo('decisionnote', 'Dedup decision note', 2000),
  ],
};

// Dataverse alternate keys are created as a separate call after the entity/attributes exist,
// and need to reach State=Active (indexed) before upsert/duplicate-key behavior is reliable -
// see create-dedup-staging-table.mjs, which polls for that.
export const alternateKeyDefinition = {
  SchemaName: stagingConfig.alternateKeyName,
  DisplayName: label('Normalized URL hash key'),
  EntityKeyIndexStatus: 'Pending',
  KeyAttributes: ['new_urlhash'],
};
