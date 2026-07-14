import { mkdir, writeFile } from 'node:fs/promises';

const KG_RAW = 'https://raw.githubusercontent.com/thomaspeterkueper/kueper-knowledge-graph/main';
const OUTPUT = new URL('../src/generated/legal.json', import.meta.url);

const DOCUMENT_IDS = {
  imprint: 'DOC:KUE:LEGAL-IMPRINT-DE',
  privacy: 'DOC:KUE:LEGAL-PRIVACY-DE',
  terms: 'DOC:KUE:LEGAL-TERMS-DE',
};

async function fetchText(path) {
  const response = await fetch(`${KG_RAW}/${path}`);
  if (!response.ok) {
    throw new Error(`KG legal source unavailable: ${path} (${response.status})`);
  }
  return response.text();
}

async function fetchJson(path) {
  return JSON.parse(await fetchText(path));
}

function replacePlaceholders(text, imprint) {
  const replacements = {
    '{{ impressum.responsible.name }}': imprint.responsible.name,
    '{{ impressum.responsible.address }}': imprint.responsible.address,
    '{{ impressum.responsible.email }}': imprint.responsible.email,
    '{{ impressum.updated }}': imprint.updated,
  };

  return Object.entries(replacements).reduce(
    (result, [placeholder, value]) => result.replaceAll(placeholder, value),
    text,
  );
}

function getRecord(registry, id) {
  const record = registry.records.find((entry) => entry.id === id);
  if (!record) throw new Error(`Missing legal document reference: ${id}`);
  return record;
}

function extractDeclaredStatus(markdown) {
  const match = markdown.match(/\*\*Status:\*\*\s*`([^`]+)`/i);
  return match?.[1] ?? 'unknown';
}

const registry = await fetchJson('exports/document-references-0.1.json');
const imprint = await fetchJson('registry/legal/impressum-master.json');

const privacyRecord = getRecord(registry, DOCUMENT_IDS.privacy);
const termsRecord = getRecord(registry, DOCUMENT_IDS.terms);
const imprintRecord = getRecord(registry, DOCUMENT_IDS.imprint);

const privacyMarkdown = replacePlaceholders(await fetchText(privacyRecord.sourcePath), imprint);
const termsMarkdown = replacePlaceholders(await fetchText(termsRecord.sourcePath), imprint);

const payload = {
  generatedAt: new Date().toISOString(),
  sourceRepository: 'thomaspeterkueper/kueper-knowledge-graph',
  registryStatus: registry.status,
  imprint: {
    ...imprint,
    documentId: imprintRecord.id,
    registryStatus: imprintRecord.status,
  },
  privacy: {
    documentId: privacyRecord.id,
    registryStatus: privacyRecord.status,
    declaredStatus: extractDeclaredStatus(privacyMarkdown),
    markdown: privacyMarkdown,
  },
  terms: {
    documentId: termsRecord.id,
    registryStatus: termsRecord.status,
    declaredStatus: extractDeclaredStatus(termsMarkdown),
    markdown: termsMarkdown,
  },
};

await mkdir(new URL('../src/generated/', import.meta.url), { recursive: true });
await writeFile(OUTPUT, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
console.log(`Synced legal documents from ${payload.sourceRepository}`);
