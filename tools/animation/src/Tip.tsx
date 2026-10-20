import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont as loadOutfit } from "@remotion/google-fonts/Outfit";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const outfit = loadOutfit("normal", { weights: ["600", "700"], subsets: ["latin", "latin-ext"] });
const inter = loadInter("normal", { weights: ["400", "500", "600", "700"], subsets: ["latin", "latin-ext"] });
const DISPLAY = outfit.fontFamily;
const BODY = inter.fontFamily;

// Navy + Teal aus dem Logo, flache helle Flaeche (kein Verlauf, kein Glow)
const C = {
  bg: "#F4F7F9", card: "#FFFFFF", line: "#D9E1E8", navy: "#243B4E", muted: "#52667A",
  teal: "#20BDBD", tealDark: "#0B7F85", green: "#0F7B3F", greenBg: "#E3F3EA", red: "#C4314B",
  outlook: "#0F6CBD", sharepoint: "#038387", planner: "#31752F",
};
// Bekannte Produkte mit fester Farbe. Alles andere faellt auf "generic" (Slate) zurueck, das Label kommt aus step.productLabel.
const PRODUCT: Record<string, { color: string; label: string }> = {
  outlook: { color: C.outlook, label: "OUTLOOK" },
  sharepoint: { color: C.sharepoint, label: "SHAREPOINT" },
  planner: { color: C.planner, label: "PLANNER" },
  teams: { color: "#4F5BB5", label: "TEAMS" },
  copilotstudio: { color: "#0B7F85", label: "COPILOT STUDIO" },
  powerapps: { color: "#4A5FA8", label: "POWER APPS" },
  powerautomate: { color: "#0F6CBD", label: "POWER AUTOMATE" },
  dataverse: { color: "#0F7B3F", label: "DATAVERSE" },
  powerbi: { color: "#A8730A", label: "POWER BI" },
  fabric: { color: "#117865", label: "FABRIC" },
  admin: { color: "#243B4E", label: "ADMIN" },
  generic: { color: "#52667A", label: "" },
};
const prod = (name: string, label?: string) => {
  const known = PRODUCT[name] ?? PRODUCT.generic;
  return { color: known.color, label: (label ?? (PRODUCT[name] ? known.label : name)).toUpperCase() };
};

export type Step = { product: string; productLabel?: string; icon: string; title: string; actions: string[]; loop?: boolean; badge?: string };
export type TipProps = {
  endCardSeconds?: number; kicker?: string; title: string; subtitle: string; blocked?: [string, string];
  note?: string; loop?: { label: string; hint: string }; standardLabel?: string; steps: Step[];
  punchline?: string[]; punchSub?: string; connectors?: string[]; endUrl: string; endLine: string;
  timing?: Timing; scale?: number; // scale > 1 vergroessert Schrift und Karten im 16:9-Layout (Blog-GIFs, die klein dargestellt werden)
};
export type Timing = { introOut: number; steps: number; stepGap: number; badges: number; punch: number; end: number };

// Ohne "timing" im JSON wird der Ablauf aus der Schrittzahl berechnet (kompakt, fuer Blog-GIFs).
export const resolveTiming = (p: TipProps): Timing => {
  if (p.timing) return p.timing;
  const introOut = p.blocked ? 3.0 : 2.4;
  const steps = introOut + 1.1;
  const stepGap = 1.0;
  const lastStep = steps + (p.steps.length - 1) * stepGap;
  const badges = lastStep + 0.9;
  const hasPunch = !!(p.punchline && p.punchline.length);
  const punch = hasPunch ? lastStep + 1.2 : badges;
  const end = hasPunch ? punch + 2.2 : lastStep + 2.4;
  return { introOut, steps, stepGap, badges, punch, end };
};

const ease = Easing.bezier(0.22, 1, 0.36, 1);

const Glyph: React.FC<{ name: string; size: number }> = ({ name, size }) => {
  const p = { fill: "none", stroke: "#fff", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      {name === "mail" && (<><rect x="3" y="5" width="18" height="14" rx="2.5" {...p} /><polyline points="3.5,7.5 12,13.5 20.5,7.5" {...p} /></>)}
      {name === "clip" && <path d="M21 11.5l-8.5 8.5a5 5 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7l-8.6 8.5a1.7 1.7 0 0 1-2.4-2.4l7.9-7.9" {...p} />}
      {name === "file" && (<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" {...p} /><path d="M14 3v5h5" {...p} /></>)}
      {name === "planner" && (<><rect x="4" y="4" width="16" height="16" rx="3" {...p} /><polyline points="8,10 9.5,11.5 12,9" {...p} /><line x1="14.5" y1="10.5" x2="17" y2="10.5" {...p} /><polyline points="8,15 9.5,16.5 12,14" {...p} /><line x1="14.5" y1="15.5" x2="17" y2="15.5" {...p} /></>)}
      {name === "gear" && (<><circle cx="12" cy="12" r="3" {...p} /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" {...p} /></>)}
      {name === "bolt" && <polygon points="13,3 5,13.5 11,13.5 10,21 19,9.5 13,9.5" {...p} />}
      {name === "db" && (<><ellipse cx="12" cy="6" rx="7" ry="3" {...p} /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" {...p} /></>)}
      {name === "chat" && <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" {...p} />}
      {name === "shield" && <path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z" {...p} />}
      {name === "user" && (<><circle cx="12" cy="8" r="3.5" {...p} /><path d="M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6" {...p} /></>)}
      {name === "play" && <polygon points="8,5 19,12 8,19" {...p} />}
      {name === "doc" && (<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" {...p} /><path d="M14 3v5h5M8.5 13h7M8.5 16.5h7" {...p} /></>)}
      {name === "link" && <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" {...p} />}
      {name === "phone" && (<><rect x="7" y="2.5" width="10" height="19" rx="2.5" {...p} /><line x1="11" y1="18.5" x2="13" y2="18.5" {...p} /></>)}
      {name === "bell" && <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0" {...p} />}
      {name === "calendar" && (<><rect x="4" y="5" width="16" height="15" rx="2.5" {...p} /><path d="M4 10h16M8 3v4M16 3v4" {...p} /></>)}
      {name === "code" && <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" {...p} />}
      {name === "table" && (<><rect x="3.5" y="5" width="17" height="14" rx="2" {...p} /><path d="M3.5 10h17M9.5 5v14" {...p} /></>)}
      {name === "search" && (<><circle cx="11" cy="11" r="6" {...p} /><line x1="15.5" y1="15.5" x2="20" y2="20" {...p} /></>)}
      {name === "cloud" && <path d="M7 18a4.5 4.5 0 0 1-.5-9 5.5 5.5 0 0 1 10.6 1.3A3.9 3.9 0 0 1 17 18z" {...p} />}
      {name === "key" && (<><circle cx="8" cy="12" r="3.5" {...p} /><path d="M11.5 12H21M17 12v3M20 12v2" {...p} /></>)}
      {name === "check" && <polyline points="4,12.5 10,18 20,6.5" {...p} />}
      {name === "arrow" && <path d="M4 12h15M13 6l6 6-6 6" {...p} />}
      {name === "filter" && <path d="M4 5h16l-6 8v6l-4-2v-4z" {...p} />}
      {name === "mic" && (<><rect x="9" y="3" width="6" height="11" rx="3" {...p} /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" {...p} /></>)}
    </svg>
  );
};

export const ICONS = ["mail", "clip", "file", "planner", "gear", "bolt", "db", "chat", "shield", "user", "play", "doc", "link", "phone", "bell", "calendar", "code", "table", "search", "cloud", "key", "check", "arrow", "filter", "mic"];
export const PRODUCTS = Object.keys(PRODUCT);

const IconTile: React.FC<{ product: string; icon: string; size: number }> = ({ product, icon, size }) => (
  <div style={{ width: size, height: size, borderRadius: size * 0.24, background: prod(product).color,
    display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
    <Glyph name={icon} size={size * 0.56} />
  </div>
);

const Check: React.FC<{ size: number; color: string; w?: number }> = ({ size, color, w = 3.2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24"><polyline points="4,12.5 10,18 20,6.5" fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const Badge: React.FC<{ label: string; k: number; o: number }> = ({ label, k, o }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 * k, background: C.greenBg, color: C.green,
    fontFamily: BODY, fontWeight: 700, fontSize: 16 * k, letterSpacing: "0.04em", padding: `${3 * k}px ${10 * k}px`,
    borderRadius: 6 * k, opacity: o, transform: `translateY(${(1 - o) * 6}px)` }}>
    <Check size={15 * k} color={C.green} w={3.4} />
    {label}
  </span>
);

export const Tip: React.FC<TipProps> = (props) => {
  const f = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const portrait = height > width;
  const T = resolveTiming(props);
  const p = (start: number, dur: number) =>
    interpolate(f, [start * fps, (start + dur) * fps], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: ease });
  const feed = portrait && height / width < 1.5; // 4:5
  const sc = props.scale ?? 1;
  const k = feed ? 0.84 : portrait ? 1.1 : 1.08 * sc;

  const introIn = p(0.2, 0.6);
  const introOut = p(T.introOut, 0.6);
  const mainTitle = p(T.introOut + 0.5, 0.8);
  const stepP = (i: number) => p(T.steps + i * T.stepGap, 0.7);
  const badgeP = (i: number) => p(T.badges + i * 0.3, 0.45);
  const lineP = p(T.steps, T.stepGap * (props.steps.length - 1) + 0.7);
  const punchP = p(T.punch, 0.8);
  const chipsP = p(T.punch + 0.6, 0.7);
  const endP = p(T.end, 0.6);
  const endLogo = p(T.end + 0.1, 0.9);

  const header = (
    <div style={{ opacity: mainTitle, transform: portrait ? `translateY(${(1 - mainTitle) * 60}px)` : `translateX(${(1 - mainTitle) * -380}px)` }}>
      {props.kicker ? <div style={{ fontFamily: BODY, fontWeight: 600, fontSize: 22 * k, letterSpacing: "0.1em", color: C.tealDark }}>{props.kicker}</div> : null}
      <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: (portrait ? 96 : sc > 1 ? 66 : 80) * k, lineHeight: 1.08, color: C.navy, marginTop: 18 * k }}>{props.title}</div>
      <div style={{ fontFamily: BODY, fontWeight: 400, fontSize: 32 * k, lineHeight: 1.4, color: C.muted, marginTop: 22 * k, maxWidth: portrait ? 860 : 620 }}>{props.subtitle}</div>
      {props.note ? (
        <div style={{ fontFamily: BODY, fontWeight: 600, fontSize: 27 * k, color: C.navy, marginTop: 30 * k, opacity: p(T.steps, 0.6) }}>
          {"→ "}{props.note}
        </div>
      ) : null}
    </div>
  );

  const hasPunch = !!(props.punchline && props.punchline.length);
  const punchLines = props.punchline ?? [];
  const connectors = props.connectors ?? [];
  const punch = !hasPunch ? null : (
    <div>
      <div style={{ opacity: punchP, transform: `translateY(${(1 - punchP) * 24}px)`, fontFamily: DISPLAY, fontWeight: 700, fontSize: (portrait ? 92 : sc > 1 ? 62 : 78) * k, lineHeight: 1.08 }}>
        <div style={{ color: C.navy }}>{punchLines[0]}</div>
        {punchLines[1] ? <div style={{ color: C.green }}>{punchLines[1]}</div> : null}
      </div>
      {connectors.length || props.punchSub ? (<div style={{ opacity: chipsP, marginTop: 34 * k }}>
        {props.punchSub ? <div style={{ fontFamily: BODY, fontWeight: 600, fontSize: 20 * k, letterSpacing: "0.1em", color: C.muted }}>{props.punchSub}</div> : null}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 * k, marginTop: 16 * k }}>
          {connectors.map((c) => (
            <span key={c} style={{ display: "inline-flex", alignItems: "center", gap: 10 * k, fontFamily: BODY, fontWeight: 600, fontSize: 24 * k,
              color: C.navy, background: C.card, border: `1.5px solid ${C.line}`, borderRadius: 10 * k, padding: `${10 * k}px ${18 * k}px` }}>
              <Check size={22 * k} color={C.green} />
              {c}
            </span>
          ))}
        </div>
      </div>) : null}
    </div>
  );

  const GUT = 76 * k;
  const card = (s: Step, i: number, inset: number) => {
    const o = stepP(i);
    return (
      <div key={i} style={{ position: "relative", opacity: o, transform: `translateY(${(1 - o) * 26}px)` }}>
        <div style={{ position: "absolute", left: -GUT + inset, top: "50%", marginTop: -21 * k, width: 42 * k, height: 42 * k, borderRadius: 42 * k,
          background: C.navy, color: "#fff", fontFamily: BODY, fontWeight: 700, fontSize: 22 * k, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</div>
        <div style={{ background: C.card, border: `1.5px solid ${C.line}`, borderRadius: 14 * k, padding: `${18 * k}px ${24 * k}px`, display: "flex", alignItems: "center", gap: 22 * k }}>
          <IconTile product={s.product} icon={s.icon} size={72 * k} />
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 * k }}>
              <span style={{ fontFamily: BODY, fontWeight: 700, fontSize: 17 * k, letterSpacing: "0.1em", color: prod(s.product, s.productLabel).color }}>{prod(s.product, s.productLabel).label}</span>
              {(s.badge ?? props.standardLabel) ? <Badge label={(s.badge ?? props.standardLabel) as string} k={k} o={badgeP(i)} /> : null}
            </div>
            <div style={{ fontFamily: BODY, fontWeight: 600, fontSize: 33 * k, color: C.navy, marginTop: 4 * k, lineHeight: 1.2 }}>{s.title}</div>
            <div style={{ fontFamily: BODY, fontWeight: 500, fontSize: 21 * k, color: C.muted, marginTop: 4 * k }}>{s.actions.join("  ·  ")}</div>
          </div>
        </div>
      </div>
    );
  };

  const segs: { loop: boolean; items: { s: Step; i: number }[] }[] = [];
  props.steps.forEach((s, i) => {
    const l = !!s.loop;
    const last = segs[segs.length - 1];
    if (last && last.loop && l) last.items.push({ s, i });
    else segs.push({ loop: l, items: [{ s, i }] });
  });
  const steps = (
    <div style={{ position: "relative", marginLeft: GUT, width: (portrait ? 920 : 930 + (sc - 1) * 450) - GUT, display: "flex", flexDirection: "column", gap: 20 * k }}>
      <div style={{ position: "absolute", left: -GUT + 21 * k - 1.5, top: 60 * k, bottom: 60 * k, width: 3, background: C.line,
        transformOrigin: "top", transform: `scaleY(${lineP})` }} />
      {segs.map((seg, si) =>
        seg.loop ? (
          <div key={si} style={{ border: `2px dashed ${C.teal}`, borderRadius: 18 * k, padding: 16 * k, display: "flex", flexDirection: "column", gap: 16 * k,
            opacity: stepP(seg.items[0].i) }}>
            <div style={{ fontFamily: BODY, fontWeight: 600, fontSize: 21 * k, color: C.tealDark }}>
              ↻ {props.loop?.label}<span style={{ fontWeight: 500, color: C.muted }}>{"  ·  "}{props.loop?.hint}</span>
            </div>
            {seg.items.map(({ s, i }) => card(s, i, -18 * k))}
          </div>
        ) : (
          seg.items.map(({ s, i }) => card(s, i, 0))
        )
      )}
    </div>
  );

  const main = portrait ? (
    <div style={{ position: "absolute", inset: 0, padding: feed ? "64px 80px 56px 80px" : "100px 80px 80px 80px", display: "flex", flexDirection: "column", gap: (feed ? 44 : 50) * k }}>
      {header}
      {steps}
      {punch ? <div style={{ marginTop: "auto" }}>{punch}</div> : null}
    </div>
  ) : (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 80, padding: "0 80px" }}>
      <div style={{ flex: "none" }}>{steps}</div>
      <div style={{ flex: "none", width: 760 - (sc - 1) * 500, display: "flex", flexDirection: "column", gap: 64 }}>{header}{punch}</div>
    </div>
  );

  const ID = props.blocked ? 0 : 1.1; // ohne Icon-Paar beginnt der Titel frueher
  const tile = portrait ? 190 : 170;
  const xP = p(1.0, 0.5);
  const dashP = p(0.8, 0.7);
  const iconLabel = (pr: string) => (
    <div style={{ fontFamily: BODY, fontWeight: 700, fontSize: 20, letterSpacing: "0.1em", color: prod(pr).color, marginTop: 14 }}>{prod(pr).label}</div>
  );
  const intro = (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", opacity: 1 - introOut, transform: `translateY(${-introOut * 30}px)` }}>
      <div style={{ opacity: introIn, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 80px" }}>
        {props.blocked ? (<div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ textAlign: "center" }}>
            <IconTile product={props.blocked[0]} icon="mail" size={tile} />
            {iconLabel(props.blocked[0])}
          </div>
          <div style={{ position: "relative", width: portrait ? 230 : 340, height: tile, marginBottom: 34 }}>
            <div style={{ position: "absolute", left: 18, right: 18, top: "50%", borderTop: `4px dashed ${C.line}`, clipPath: `inset(0 ${(1 - dashP) * 100}% 0 0)` }} />
            <div style={{ position: "absolute", left: "50%", top: "50%", width: 78, height: 78, marginLeft: -39, marginTop: -39, borderRadius: 78, background: C.red,
              opacity: xP, transform: `scale(${0.6 + 0.4 * xP})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="38" height="38" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" /></svg>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <IconTile product={props.blocked[1]} icon="planner" size={tile} />
            {iconLabel(props.blocked[1])}
          </div>
        </div>) : null}
        {props.kicker ? <div style={{ fontFamily: BODY, fontWeight: 600, fontSize: 24, letterSpacing: "0.1em", color: C.tealDark, marginTop: 56, opacity: p(1.2 - ID, 0.6) }}>{props.kicker}</div> : null}
        <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 104, lineHeight: 1.08, color: C.navy, marginTop: 20, maxWidth: portrait ? 900 : 1500, opacity: p(1.4 - ID, 0.7), transform: `translateY(${(1 - p(1.4 - ID, 0.7)) * 24}px)` }}>{props.title}</div>
        <div style={{ fontFamily: BODY, fontSize: 38, lineHeight: 1.4, color: C.muted, marginTop: 26, maxWidth: portrait ? 800 : 1100, opacity: p(2.0 - ID, 0.7) }}>{props.subtitle}</div>
      </div>
    </AbsoluteFill>
  );

  const end = (
    <AbsoluteFill style={{ background: "#FFFFFF", opacity: endP, alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", opacity: endLogo, transform: `translateY(${(1 - endLogo) * 18}px)` }}>
        <div style={{ fontFamily: BODY, fontSize: portrait ? 44 : 40, color: C.muted }}>{props.endLine}</div>
        <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: portrait ? 76 : 68, color: C.navy, marginTop: 22 }}>{props.endUrl}</div>
      </div>
    </AbsoluteFill>
  );

  return (
    <AbsoluteFill style={{ background: C.bg }}>
      {main}
      {intro}
      {end}
    </AbsoluteFill>
  );
};
