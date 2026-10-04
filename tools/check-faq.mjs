#!/usr/bin/env node
// Checks the built site for FAQ consistency (Node built-ins only).
// For every HTML page: each JSON-LD block must parse, there must be at most one FAQPage,
// and the FAQPage questions and answers must equal the visible FAQ block (class "post-faq")
// after entity decoding and whitespace normalisation. A FAQPage without a visible block, or a
// visible block without FAQPage markup, is an error. Pages without any FAQ are ignored.
//
// Usage: node tools/check-faq.mjs [site-dir]    (default: _site)
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const siteDir = process.argv[2] || '_site';
const expectedCount = 3;
const maxAnswerWords = 35;

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (name.endsWith('.html')) yield path;
  }
}

const named = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
function decode(text) {
  return text.replace(/&(#x[0-9a-f]+|#[0-9]+|[a-z]+);/gi, (match, entity) => {
    if (entity[0] === '#') {
      const code = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : match;
    }
    return Object.hasOwn(named, entity.toLowerCase()) ? named[entity.toLowerCase()] : match;
  });
}
const clean = (html) => decode(html.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
const normalise = (text) => String(text ?? '').replace(/\s+/g, ' ').trim();

function faqPagesIn(data) {
  const nodes = Array.isArray(data) ? data : data && Array.isArray(data['@graph']) ? data['@graph'] : [data];
  return nodes.filter((node) => node && typeof node === 'object' && (node['@type'] === 'FAQPage' || (Array.isArray(node['@type']) && node['@type'].includes('FAQPage'))));
}

const errors = [];
let pagesWithFaq = 0;
let questionCount = 0;

for (const file of walk(siteDir)) {
  const html = readFileSync(file, 'utf8');
  const label = file.replaceAll('\\', '/');
  // The hand-maintained site FAQ page (_tabs/faq.md) is not an article FAQ and has no post-faq block.
  if (label.endsWith('/faq/index.html')) continue;

  const faqMarkup = [];
  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    let data;
    try {
      data = JSON.parse(match[1]);
    } catch (error) {
      errors.push(`${label}: JSON-LD is not valid JSON (${error.message})`);
      continue;
    }
    faqMarkup.push(...faqPagesIn(data));
  }

  const blocks = [...html.matchAll(/<section\b[^>]*class=["'][^"']*\bpost-faq\b[^"']*["'][^>]*>([\s\S]*?)<\/section>/gi)];

  if (faqMarkup.length === 0 && blocks.length === 0) continue;
  if (faqMarkup.length > 1) errors.push(`${label}: ${faqMarkup.length} FAQPage blocks, expected 1`);
  if (blocks.length > 1) errors.push(`${label}: ${blocks.length} visible FAQ blocks, expected 1`);
  if (faqMarkup.length >= 1 && blocks.length === 0) errors.push(`${label}: FAQPage markup without a visible FAQ block`);
  if (faqMarkup.length === 0 && blocks.length >= 1) errors.push(`${label}: visible FAQ block without FAQPage markup`);
  if (faqMarkup.length !== 1 || blocks.length !== 1) continue;

  const visibleQuestions = [...blocks[0][1].matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)].map((m) => clean(m[1]));
  const visibleAnswers = [...blocks[0][1].matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => clean(m[1]));
  const entities = Array.isArray(faqMarkup[0].mainEntity) ? faqMarkup[0].mainEntity : [];
  const markupQuestions = entities.map((entity) => normalise(entity?.name));
  const markupAnswers = entities.map((entity) => normalise(entity?.acceptedAnswer?.text));

  if (entities.length !== expectedCount) errors.push(`${label}: FAQPage has ${entities.length} questions, expected ${expectedCount}`);
  if (visibleQuestions.length !== expectedCount || visibleAnswers.length !== expectedCount) {
    errors.push(`${label}: visible FAQ has ${visibleQuestions.length} questions and ${visibleAnswers.length} answers, expected ${expectedCount} each`);
  }
  if (JSON.stringify(markupQuestions) !== JSON.stringify(visibleQuestions)) errors.push(`${label}: FAQPage questions differ from the visible questions`);
  if (JSON.stringify(markupAnswers) !== JSON.stringify(visibleAnswers)) errors.push(`${label}: FAQPage answers differ from the visible answers`);
  for (const entity of entities) {
    if (entity?.['@type'] !== 'Question' || entity?.acceptedAnswer?.['@type'] !== 'Answer') {
      errors.push(`${label}: FAQPage entry is not a Question with an Answer`);
      break;
    }
    const wordCount = normalise(entity?.acceptedAnswer?.text).split(/\s+/).filter(Boolean).length;
    if (wordCount > maxAnswerWords) errors.push(`${label}: FAQ answer has ${wordCount} words, expected at most ${maxAnswerWords}`);
  }

  pagesWithFaq += 1;
  questionCount += entities.length;
}

if (errors.length > 0) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  console.error(`FEHLER: ${errors.length} Problem(e) in ${siteDir}`);
  process.exit(1);
}
console.log(`OK: ${pagesWithFaq} Seiten mit FAQ, ${questionCount} Fragen`);
