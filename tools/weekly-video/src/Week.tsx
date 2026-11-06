import React, { useMemo } from "react";
import { AbsoluteFill, Audio, Easing, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import QRCode from "qrcode";
import { loadFont as loadOutfit } from "@remotion/google-fonts/Outfit";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

// Wochenrueckblick (16:9 fuer YouTube, 4:5 fuer LinkedIn): Intro, fuenf Beitragsszenen, Schlussbild mit QR.
// Alle Zeiten kommen aus den ElevenLabs-Zeichenzeitstempeln (run.mjs), nichts ist geschaetzt.
// Untertitel laufen Wort fuer Wort unten; der Hinweis "KI-Stimme" steht oben rechts in jeder Szene.

const outfit = loadOutfit("normal", { weights: ["600", "700", "800"], subsets: ["latin", "latin-ext"] });
const inter = loadInter("normal", { weights: ["500", "600", "700"], subsets: ["latin", "latin-ext"] });
const DISPLAY = outfit.fontFamily;
const BODY = inter.fontFamily;
const C = { bg: "#F4F7F9", card: "#FFFFFF", line: "#D9E1E8", navy: "#243B4E", muted: "#52667A" };

export type WWord = { t: string; s: number; e: number };
export type WItem = { nr: number; start: number; end: number; title: string; source: string; tags: string[]; day: string };
export type WeekProps = {
  audio: string;
  durationSec: number;
  accent: string;
  siteName: string;
  domain: string;
  qrUrl: string;
  labels: { kicker: string; week: string; range: string; aiNotice: string; outroLine: string; source: string; footer: string };
  introEnd: number;
  outroStart: number;
  items: WItem[];
  words: WWord[];
};

const clamp = (x: number) => Math.max(0, Math.min(1, x));
const ease = (t: number, a: number, d: number) => Easing.out(Easing.cubic)(clamp((t - a) / d));

type QrMatrix = { modules: { size: number; get: (r: number, c: number) => number | boolean } };
const qrCreate = QRCode as unknown as { create: (t: string, o: { errorCorrectionLevel: "M" }) => QrMatrix };
const Qr: React.FC<{ url: string; size: number }> = ({ url, size }) => {
  const { n, d } = useMemo(() => {
    const q = qrCreate.create(url, { errorCorrectionLevel: "M" });
    const m = q.modules.size; let p = "";
    for (let r = 0; r < m; r++) for (let c = 0; c < m; c++) if (q.modules.get(r, c)) p += `M${c + 4} ${r + 4}h1v1h-1z`;
    return { n: m + 8, d: p };
  }, [url]);
  return <svg width={size} height={size} viewBox={`0 0 ${n} ${n}`} shapeRendering="crispEdges" style={{ background: "#fff", borderRadius: 10 }}><path d={d} fill={C.navy} /></svg>;
};

// Untertitel: Phrasen aus 4 bis 7 Woertern, gesprochene Woerter dunkel, kommende Woerter grau
function makePhrases(words: WWord[]) {
  const out: WWord[][] = []; let g: WWord[] = [];
  for (const w of words) {
    g.push(w);
    const len = g.reduce((a, x) => a + x.t.length + 1, 0);
    if (g.length >= 7 || len > 46 || /[.!?]$/.test(w.t) || (g.length >= 4 && /[,;:]$/.test(w.t))) { out.push(g); g = []; }
  }
  if (g.length) out.push(g);
  return out;
}

const Captions: React.FC<{ phrases: WWord[][]; t: number; portrait: boolean; accent: string; tall: boolean }> = ({ phrases, t, portrait, accent, tall }) => {
  let idx = -1;
  for (let i = 0; i < phrases.length; i++) if (t >= phrases[i][0].s - 0.05) idx = i;
  if (idx < 0) return null;
  const ph = phrases[idx];
  const next = phrases[idx + 1];
  const holdUntil = Math.min(ph[ph.length - 1].e + 0.6, next ? next[0].s : 1e9);
  if (t > holdUntil) return null;
  return (
    <div style={{ position: "absolute", left: portrait ? 56 : 120, right: portrait ? 56 : 120, bottom: tall ? 430 : portrait ? 90 : 70, minHeight: portrait ? 190 : 130, display: "flex", alignItems: "center", justifyContent: "center",
      background: C.card, border: `2px solid ${C.line}`, borderRadius: 24, padding: portrait ? "26px 34px" : "22px 44px", boxSizing: "border-box", textAlign: "center",
      fontFamily: BODY, fontWeight: 600, fontSize: portrait ? 50 : 50, lineHeight: 1.25 }}>
      <div>
        {ph.map((w, i) => (
          <span key={i} style={{ color: t >= w.s ? C.navy : "#9AA9B8", borderBottom: t >= w.s && t <= w.e + 0.05 ? `5px solid ${accent}` : "5px solid transparent", marginRight: 14, display: "inline-block" }}>{w.t}</span>
        ))}
      </div>
    </div>
  );
};

const Chip: React.FC<{ text: string; accent: string; portrait: boolean }> = ({ text, accent, portrait }) => (
  <span style={{ display: "inline-block", marginRight: 14, marginBottom: 10, padding: portrait ? "8px 20px" : "9px 22px", borderRadius: 999, border: `2px solid ${accent}`, color: accent, fontFamily: BODY, fontWeight: 700, fontSize: portrait ? 28 : 28 }}>{text}</span>
);

export const Week: React.FC<WeekProps> = (p) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const t = frame / fps;
  const portrait = height > width;
  const tall = height > 1600; // 9:16 (Short): Inhalt nach unten, weg vom oberen Rand und von der YouTube-Oberflaeche
  const dy = tall ? 190 : 0;
  const phrases = useMemo(() => makePhrases(p.words), [p.words]);
  const fadeOut = interpolate(t, [p.durationSec - 0.5, p.durationSec], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cur = p.items.find((it) => t >= it.start && t < it.end);
  const inIntro = t < p.introEnd;
  const inOutro = t >= p.outroStart;
  const pad = portrait ? 56 : 120;

  return (
    <AbsoluteFill style={{ background: C.bg, opacity: fadeOut }}>
      {p.audio ? <Audio src={staticFile(p.audio)} /> : null}

      {/* Kopfzeile */}
      <div style={{ position: "absolute", left: pad, right: pad, top: (portrait ? 50 : 48) + (tall ? 130 : 0), display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: BODY, fontWeight: 700 }}>
        <div style={{ fontSize: portrait ? 28 : 30, color: C.navy, letterSpacing: "0.02em" }}>{p.siteName}</div>
        <div style={{ fontSize: portrait ? 24 : 26, color: C.muted, border: `2px solid ${C.line}`, borderRadius: 999, padding: "6px 20px", background: C.card }}>{p.labels.aiNotice}</div>
      </div>
      <div style={{ position: "absolute", left: 0, top: 0, height: 8, width: `${(t / p.durationSec) * 100}%`, background: p.accent }} />

      {inIntro ? (
        <div style={{ position: "absolute", left: pad, right: pad, top: (portrait ? 330 : 250) + dy + (tall ? 60 : 0), opacity: ease(t, 0.1, 0.5), transform: `translateY(${(1 - ease(t, 0.1, 0.5)) * 24}px)` }}>
          <div style={{ fontFamily: BODY, fontWeight: 700, fontSize: portrait ? 34 : 36, color: p.accent, letterSpacing: "0.14em", textTransform: "uppercase" }}>{p.labels.kicker}</div>
          <div style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: portrait ? 150 : 170, lineHeight: 1.02, color: C.navy, marginTop: 20 }}>{p.labels.week}</div>
          <div style={{ fontFamily: BODY, fontWeight: 600, fontSize: portrait ? 38 : 40, color: C.muted, marginTop: 28 }}>{p.labels.range}</div>
        </div>
      ) : null}

      {cur ? <ItemScene key={cur.nr} it={cur} t={t} p={p} portrait={portrait} pad={pad} total={p.items.length} dy={dy} /> : null}

      {inOutro ? (
        <div style={{ position: "absolute", left: pad, right: pad, top: (portrait ? 300 : 220) + dy, display: "flex", flexDirection: portrait ? "column" : "row", alignItems: portrait ? "flex-start" : "center", gap: portrait ? 40 : 80,
          opacity: ease(t, p.outroStart, 0.5) }}>
          <Qr url={p.qrUrl} size={portrait ? 360 : 420} />
          <div>
            <div style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: portrait ? 70 : 84, color: C.navy, lineHeight: 1.05 }}>{p.domain}</div>
            <div style={{ fontFamily: BODY, fontWeight: 600, fontSize: portrait ? 36 : 40, color: C.muted, marginTop: 22 }}>{p.labels.outroLine}</div>
            <div style={{ fontFamily: BODY, fontWeight: 500, fontSize: portrait ? 28 : 30, color: C.muted, marginTop: 22, maxWidth: 860 }}>{p.labels.footer}</div>
          </div>
        </div>
      ) : null}

      <Captions phrases={phrases} t={t} portrait={portrait} accent={p.accent} tall={tall} />
    </AbsoluteFill>
  );
};

const ItemScene: React.FC<{ it: WItem; t: number; p: WeekProps; portrait: boolean; pad: number; total: number; dy: number }> = ({ it, t, p, portrait, pad, total, dy }) => {
  const a = ease(t, it.start + 0.05, 0.45);
  const tagA = ease(t, it.start + 0.4, 0.4);
  const titleSize = it.title.length > 95 ? (portrait ? 54 : 62) : it.title.length > 70 ? (portrait ? 62 : 72) : (portrait ? 72 : 84);
  return (
    <div style={{ position: "absolute", left: pad, right: pad, top: (portrait ? 190 : 170) + dy, opacity: a, transform: `translateY(${(1 - a) * 28}px)` }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
        <div style={{ fontFamily: DISPLAY, fontWeight: 800, fontSize: portrait ? 190 : 210, lineHeight: 0.9, color: p.accent }}>{it.nr}</div>
        <div style={{ fontFamily: BODY, fontWeight: 700, fontSize: 30, color: C.muted }}>/ {total}</div>
      </div>
      <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: titleSize, lineHeight: 1.1, color: C.navy, marginTop: portrait ? 26 : 22, maxWidth: portrait ? 970 : 1500 }}>{it.title}</div>
      <div style={{ opacity: tagA, marginTop: portrait ? 30 : 28 }}>
        <div style={{ fontFamily: BODY, fontWeight: 600, fontSize: portrait ? 32 : 34, color: C.muted, marginBottom: 18 }}>{p.labels.source}: {it.source}</div>
        <div>{it.tags.slice(0, 3).map((tg) => <Chip key={tg} text={tg} accent={p.accent} portrait={portrait} />)}</div>
      </div>
    </div>
  );
};
