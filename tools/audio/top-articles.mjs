// Top-Artikel nach GoatCounter-Aufrufen (Deutsch). Methode: API v0 /stats/hits, Pfade /de/posts/*,
// Summe ueber den gewaehlten Zeitraum. Token: Umgebungsvariable GOATCOUNTER_API_TOKEN (nie in Dateien).
// Aufruf: node top-articles.mjs <goatcounter-code> [start=2026-09-01] [n=20]
const [code, start = '2026-09-01', n = '20'] = process.argv.slice(2);
const token = process.env.GOATCOUNTER_API_TOKEN;
if (!code || !token) { console.error('Aufruf: GOATCOUNTER_API_TOKEN setzen, node top-articles.mjs <code> [start] [n]'); process.exit(1); }
const base = `https://${code}.goatcounter.com/api/v0/stats/hits`;
const end = new Date().toISOString().slice(0, 10);
const rows = []; const seen = [];
for (let i = 0; i < 20; i++) {
  const q = new URLSearchParams({ start, end, limit: '100' });
  if (seen.length) q.set('exclude_paths', seen.join(','));
  const r = await fetch(`${base}?${q}`, { headers: { Authorization: `Bearer ${token}` } });
  if (!r.ok) { console.error('HTTP', r.status); process.exit(1); }
  const j = await r.json();
  for (const h of j.hits) { rows.push({ path: h.path, count: h.count }); seen.push(h.path_id); }
  if (!j.more) break;
  await new Promise(res => setTimeout(res, 1200)); // Rate-Limit schonen
}
const de = rows.filter(r => /^\/de\/posts\//.test(r.path)).sort((a, b) => b.count - a.count);
console.log(JSON.stringify({ quelle: `GoatCounter ${code}`, start, end, seitenGesamt: rows.length, deArtikel: de.length, top: de.slice(0, +n) }, null, 1));
