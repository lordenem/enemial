import type { JSX } from "react";
import type { Service } from "@/data/services";

/**
 * Service illustrations, drawn as inline SVG rather than shipped as images so
 * they use the site's own theme tokens (brand teal, accent copper, warm ink)
 * through Tailwind fill/stroke utilities — change a token in globals.css and
 * every illustration follows.
 *
 * Each is a stylised picture of the work itself (code, a game level, a chart,
 * a dashboard, a pipeline, a model, an assistant), not stock imagery.
 */
export function ServiceIllustration({
  service,
  className,
}: {
  service: Pick<Service, "slug" | "title" | "tone">;
  className?: string;
}) {
  const Drawing = drawings[service.slug];
  if (!Drawing) return null;
  return (
    <svg
      viewBox="0 0 480 320"
      role="img"
      aria-label={`Illustration: ${service.title}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Backdrop tone={service.tone} />
      <Drawing />
    </svg>
  );
}

/* ---------- shared pieces ---------- */

function Backdrop({ tone }: { tone: "brand" | "accent" }) {
  const brand = tone === "brand";
  return (
    <>
      <rect width="480" height="320" className={brand ? "fill-brand-50" : "fill-accent-50"} />
      <g className={brand ? "stroke-brand-200" : "stroke-accent-200"} strokeWidth="1" opacity="0.6">
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="320" />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 60 + 10} x2="480" y2={i * 60 + 10} />
        ))}
      </g>
      <circle cx="410" cy="50" r="90" className={brand ? "fill-brand-200" : "fill-accent-200"} opacity="0.5" />
      <circle cx="60" cy="290" r="80" className={brand ? "fill-accent-100" : "fill-brand-100"} opacity="0.7" />
    </>
  );
}

/** A white card with a soft border — the building block of every scene. */
function Card({ x, y, w, h, dark = false }: { x: number; y: number; w: number; h: number; dark?: boolean }) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx="14"
      className={dark ? "fill-ink-900" : "fill-white stroke-ink-200"}
      strokeWidth={dark ? 0 : 1.5}
    />
  );
}

function Bar({ x, y, w, className = "fill-ink-200", h = 5 }: { x: number; y: number; w: number; className?: string; h?: number }) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} className={className} />;
}

function Check({ x, y, className = "fill-brand-500" }: { x: number; y: number; className?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="9" className={className} />
      <path d="M-4 0.5 L-1.2 3.3 L4.2 -2.6" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-white" />
    </g>
  );
}

/** Window chrome: three dots across the top of a card. */
function Dots({ x, y }: { x: number; y: number }) {
  return (
    <>
      <circle cx={x} cy={y} r="4" className="fill-accent-400" />
      <circle cx={x + 13} cy={y} r="4" className="fill-brand-300" />
      <circle cx={x + 26} cy={y} r="4" className="fill-ink-300" />
    </>
  );
}

/* ---------- one scene per service ---------- */

function SoftwareDevelopment() {
  return (
    <>
      {/* Code editor */}
      <Card x={40} y={40} w={250} h={220} dark />
      <Dots x={60} y={60} />
      {[
        [[60, 30, "fill-brand-400"], [96, 54, "fill-ink-500"]],
        [[76, 40, "fill-accent-400"], [122, 64, "fill-ink-500"]],
        [[76, 22, "fill-brand-300"], [104, 46, "fill-ink-600"], [156, 30, "fill-accent-300"]],
        [[92, 70, "fill-ink-500"]],
        [[92, 34, "fill-brand-400"], [132, 52, "fill-ink-600"]],
        [[76, 28, "fill-ink-500"]],
        [[60, 18, "fill-brand-300"]],
        [[60, 44, "fill-accent-400"], [110, 80, "fill-ink-600"]],
        [[76, 60, "fill-ink-500"], [142, 36, "fill-brand-400"]],
      ].map((tokens, row) =>
        tokens.map(([x, w, c], k) => (
          <Bar key={`${row}-${k}`} x={x as number} y={84 + row * 18} w={w as number} className={c as string} h={6} />
        )),
      )}
      <rect x="214" y="227" width="2" height="12" className="fill-brand-300" />

      {/* App preview */}
      <Card x={250} y={92} w={190} h={150} />
      <rect x="250" y="92" width="190" height="34" rx="14" className="fill-brand-600" />
      <rect x="250" y="112" width="190" height="14" className="fill-brand-600" />
      <Bar x={266} y={106} w={60} className="fill-white" h={6} />
      <rect x="266" y="140" width="72" height="46" rx="8" className="fill-brand-50" />
      <rect x="348" y="140" width="76" height="46" rx="8" className="fill-accent-50" />
      <Bar x={276} y={152} w={36} className="fill-brand-400" />
      <Bar x={276} y={164} w={50} />
      <Bar x={358} y={152} w={30} className="fill-accent-400" />
      <Bar x={358} y={164} w={52} />
      <rect x="266" y="200" width="88" height="26" rx="13" className="fill-brand-600" />
      <Bar x={286} y={210} w={48} className="fill-white" h={6} />

      {/* Shipped */}
      <g>
        <rect x="318" y="254" width="122" height="34" rx="17" className="fill-white stroke-brand-200" strokeWidth="1.5" />
        <Check x={338} y={271} />
        <Bar x={354} y={268} w={70} className="fill-ink-300" h={6} />
      </g>
    </>
  );
}

function GameDevelopment() {
  return (
    <>
      {/* Phone in landscape */}
      <rect x="44" y="52" width="392" height="216" rx="30" className="fill-ink-900" />
      <rect x="64" y="68" width="352" height="184" rx="16" className="fill-brand-100" />
      {/* Sky details */}
      <circle cx="372" cy="100" r="16" className="fill-accent-300" />
      <ellipse cx="150" cy="98" rx="26" ry="9" className="fill-white" opacity="0.9" />
      <ellipse cx="270" cy="88" rx="20" ry="7" className="fill-white" opacity="0.9" />
      {/* Hills */}
      <path d="M64 214 Q120 170 180 206 T300 196 T416 200 V252 H64 Z" className="fill-brand-300" opacity="0.7" />
      {/* Ground tiles */}
      {Array.from({ length: 11 }, (_, i) => (
        <rect key={i} x={64 + i * 32} y="222" width="32" height="30" className={i % 2 ? "fill-brand-700" : "fill-brand-600"} />
      ))}
      <rect x="64" y="222" width="352" height="6" className="fill-brand-400" />
      {/* Floating platforms */}
      <rect x="152" y="168" width="72" height="14" rx="4" className="fill-accent-500" />
      <rect x="268" y="138" width="64" height="14" rx="4" className="fill-accent-500" />
      {/* Coins */}
      {[176, 200, 288, 312].map((x, i) => (
        <circle key={x} cx={x} cy={i < 2 ? 154 : 124} r="6" className="fill-accent-300 stroke-accent-600" strokeWidth="1.5" />
      ))}
      {/* Hero, mid-jump */}
      <g transform="translate(104 176)">
        <rect x="-12" y="-14" width="24" height="28" rx="7" className="fill-accent-600" />
        <rect x="-6" y="-7" width="5" height="6" rx="1.5" className="fill-white" />
        <rect x="3" y="-7" width="5" height="6" rx="1.5" className="fill-white" />
        <path d="M-18 22 q8 -6 14 0" fill="none" strokeWidth="2" strokeLinecap="round" className="stroke-ink-900" opacity="0.3" />
      </g>
      {/* Goal flag */}
      <rect x="378" y="166" width="3" height="56" className="fill-ink-800" />
      <path d="M381 168 L404 176 L381 184 Z" className="fill-accent-500" />
      {/* HUD */}
      <rect x="78" y="80" width="78" height="22" rx="11" className="fill-white" opacity="0.92" />
      <circle cx="91" cy="91" r="5" className="fill-accent-400" />
      <Bar x={102} y={88} w={42} className="fill-ink-700" h={6} />
      <g transform="translate(330 80)">
        {[0, 1, 2].map((i) => (
          <path key={i} transform={`translate(${i * 20} 0)`} d="M8 18 L1 11 A4.5 4.5 0 0 1 8 5 A4.5 4.5 0 0 1 15 11 Z" className={i < 2 ? "fill-accent-500" : "fill-white"} />
        ))}
      </g>
      {/* Side buttons */}
      <circle cx="58" cy="160" r="4" className="fill-ink-700" />
    </>
  );
}

function DataAnalytics() {
  return (
    <>
      {/* Main chart */}
      <Card x={40} y={46} w={290} h={228} />
      <Bar x={60} y={66} w={90} className="fill-ink-300" h={7} />
      <Bar x={60} y={80} w={56} />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="60" y1={120 + i * 36} x2="310" y2={120 + i * 36} strokeWidth="1" className="stroke-ink-100" />
      ))}
      {[52, 70, 60, 88, 96, 74, 118, 132].map((h, i) => (
        <rect key={i} x={72 + i * 29} y={248 - h} width="18" height={h} rx="4" className={i === 6 ? "fill-accent-400" : "fill-brand-200"} />
      ))}
      <path d="M81 196 L110 182 L139 188 L168 162 L197 150 L226 166 L255 124 L284 108" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="stroke-brand-600" />
      {[[81, 196], [168, 162], [255, 124], [284, 108]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4.5" className="fill-white stroke-brand-600" strokeWidth="2.5" />
      ))}

      {/* Magnifier over the outlier */}
      <g>
        <circle cx="264" cy="152" r="34" className="fill-white stroke-ink-800" strokeWidth="5" fillOpacity="0.35" />
        <line x1="288" y1="176" x2="314" y2="202" strokeWidth="9" strokeLinecap="round" className="stroke-ink-800" />
      </g>

      {/* Insight card */}
      <Card x={318} y={88} w={128} h={118} dark />
      <Bar x={334} y={106} w={52} className="fill-brand-300" h={6} />
      <text x="334" y="146" className="fill-white font-display" fontSize="28" fontWeight="600">+18%</text>
      <Bar x={334} y={162} w={84} className="fill-ink-600" />
      <Bar x={334} y={174} w={64} className="fill-ink-700" />
      <path d="M402 104 l8 -8 l8 8" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-brand-400" />
    </>
  );
}

function BusinessIntelligence() {
  return (
    <>
      {/* Dashboard frame */}
      <Card x={36} y={34} w={408} h={252} />
      <rect x="36" y="34" width="86" height="252" rx="14" className="fill-ink-900" />
      <rect x="108" y="34" width="14" height="252" className="fill-ink-900" />
      <rect x="52" y="54" width="22" height="22" rx="6" className="fill-accent-500" />
      {[0, 1, 2, 3].map((i) => (
        <Bar key={i} x={52} y={98 + i * 22} w={i === 0 ? 54 : 44} className={i === 0 ? "fill-accent-300" : "fill-ink-600"} h={6} />
      ))}

      {/* KPI tiles */}
      {[
        ["fill-accent-50", "fill-accent-500", 46],
        ["fill-brand-50", "fill-brand-600", 38],
        ["fill-ink-50", "fill-ink-700", 52],
      ].map(([bg, fg, w], i) => (
        <g key={i} transform={`translate(${138 + i * 100} 54)`}>
          <rect width="88" height="58" rx="10" className={bg as string} />
          <Bar x={12} y={12} w={40} className="fill-ink-300" />
          <rect x="12" y="26" width={w as number} height="14" rx="4" className={fg as string} />
          <path d="M60 44 l6 -6 l6 6" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={i === 2 ? "stroke-accent-500" : "stroke-brand-500"} transform={i === 2 ? "rotate(180 66 41)" : undefined} />
        </g>
      ))}

      {/* Area chart */}
      <rect x="138" y="126" width="188" height="140" rx="10" className="fill-ink-50" />
      <Bar x={150} y={138} w={60} className="fill-ink-300" />
      <path d="M150 240 L176 214 L202 222 L228 192 L254 198 L280 168 L314 156 V254 H150 Z" className="fill-accent-200" opacity="0.7" />
      <path d="M150 240 L176 214 L202 222 L228 192 L254 198 L280 168 L314 156" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-accent-600" />
      <path d="M150 248 L176 238 L202 240 L228 226 L254 230 L280 214 L314 208" fill="none" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" className="stroke-brand-500" />

      {/* Donut */}
      <rect x="338" y="126" width="94" height="140" rx="10" className="fill-ink-50" />
      <g transform="translate(385 186)">
        <circle r="30" fill="none" strokeWidth="13" className="stroke-ink-200" />
        <circle r="30" fill="none" strokeWidth="13" strokeDasharray="100 189" transform="rotate(-90)" className="stroke-brand-600" />
        <circle r="30" fill="none" strokeWidth="13" strokeDasharray="52 189" strokeDashoffset="-100" transform="rotate(-90)" className="stroke-accent-500" />
      </g>
      <Bar x={352} y={234} w={30} className="fill-brand-600" />
      <Bar x={388} y={234} w={30} className="fill-accent-500" />
      <Bar x={352} y={246} w={56} />
    </>
  );
}

/** A database cylinder. */
function Db({ x, y, tone }: { x: number; y: number; tone: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 8 V40 A26 8 0 0 0 52 40 V8" className={tone} />
      <ellipse cx="26" cy="8" rx="26" ry="8" className="fill-white stroke-ink-200" strokeWidth="1.5" />
      <path d="M0 24 A26 8 0 0 0 52 24" fill="none" strokeWidth="1.5" className="stroke-white" opacity="0.7" />
    </g>
  );
}

function DataEngineering() {
  return (
    <>
      {/* Sources */}
      <Db x={40} y={48} tone="fill-brand-400" />
      <Db x={40} y={134} tone="fill-accent-400" />
      <Card x={36} y={222} w={60} h={56} />
      {[0, 1, 2].map((r) => [0, 1].map((c) => (
        <rect key={`${r}${c}`} x={46 + c * 22} y={232 + r * 13} width="18" height="9" rx="2" className={r === 0 ? "fill-brand-200" : "fill-ink-100"} />
      )))}

      {/* Flows into the pipeline */}
      {[[92, 70], [92, 156], [96, 250]].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y} C 140 ${y}, 140 160, 176 160`} fill="none" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 8" className="stroke-brand-500" />
      ))}

      {/* Pipeline stages */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${176 + i * 70} 132)`}>
          <rect width="54" height="56" rx="12" className={i === 1 ? "fill-ink-900" : "fill-white stroke-ink-200"} strokeWidth="1.5" />
          <Bar x={12} y={16} w={30} className={i === 1 ? "fill-brand-300" : "fill-brand-500"} h={6} />
          <Bar x={12} y={28} w={22} className={i === 1 ? "fill-ink-600" : "fill-ink-200"} />
          <Bar x={12} y={38} w={26} className={i === 1 ? "fill-ink-600" : "fill-ink-200"} />
          {i < 2 ? <path d={`M56 28 h12`} strokeWidth="3" strokeLinecap="round" className="stroke-brand-500" /> : null}
        </g>
      ))}
      <Check x={203} y={124} />
      <Check x={273} y={124} />
      <Check x={343} y={124} />

      {/* Warehouse */}
      <path d="M318 160 C 360 160, 360 160, 376 160" fill="none" strokeWidth="3" strokeLinecap="round" className="stroke-brand-500" />
      <g transform="translate(382 104)">
        <path d="M0 14 V96 A32 10 0 0 0 64 96 V14" className="fill-brand-600" />
        <ellipse cx="32" cy="14" rx="32" ry="10" className="fill-brand-300" />
        <path d="M0 42 A32 10 0 0 0 64 42" fill="none" strokeWidth="1.5" className="stroke-brand-300" />
        <path d="M0 70 A32 10 0 0 0 64 70" fill="none" strokeWidth="1.5" className="stroke-brand-300" />
      </g>

      {/* Monitor */}
      <g>
        <rect x="190" y="226" width="196" height="50" rx="12" className="fill-white stroke-ink-200" strokeWidth="1.5" />
        <circle cx="210" cy="251" r="6" className="fill-brand-500" />
        <Bar x={224} y={242} w={64} className="fill-ink-300" h={6} />
        <Bar x={224} y={254} w={44} />
        <path d="M300 258 L314 246 L326 252 L340 238 L354 244 L368 236" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-brand-500" />
      </g>
    </>
  );
}

function DataScience() {
  const points = [
    [92, 214], [110, 204], [118, 222], [134, 190], [148, 200], [160, 176], [172, 188],
    [186, 160], [198, 172], [212, 150], [224, 160], [238, 132], [250, 142], [262, 118],
    [276, 128], [286, 104], [300, 112], [128, 172], [244, 176], [190, 206],
  ];
  return (
    <>
      {/* Scatter with fitted curve */}
      <Card x={44} y={40} w={292} h={240} />
      <Bar x={64} y={60} w={84} className="fill-ink-300" h={7} />
      <line x1="76" y1="96" x2="76" y2="250" strokeWidth="1.5" className="stroke-ink-200" />
      <line x1="76" y1="250" x2="318" y2="250" strokeWidth="1.5" className="stroke-ink-200" />
      <path d="M84 236 C 150 214, 196 196, 236 148 S 296 100, 312 92 L 312 116 C 290 126, 260 150, 236 178 S 150 232, 84 252 Z" className="fill-accent-200" opacity="0.6" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" className={i > 16 ? "fill-ink-300" : "fill-brand-500"} opacity={i > 16 ? 1 : 0.85} />
      ))}
      <path d="M84 244 C 150 222, 196 206, 236 162 S 296 110, 312 104" fill="none" strokeWidth="3" strokeLinecap="round" className="stroke-accent-600" />

      {/* Model card */}
      <Card x={300} y={60} w={140} h={108} dark />
      <Bar x={316} y={78} w={48} className="fill-accent-300" h={6} />
      {[
        [96, "fill-brand-400"],
        [78, "fill-brand-300"],
        [52, "fill-accent-400"],
      ].map(([w, c], i) => (
        <g key={i}>
          <Bar x={316} y={98 + i * 20} w={108} className="fill-ink-700" h={8} />
          <Bar x={316} y={98 + i * 20} w={w as number} className={c as string} h={8} />
        </g>
      ))}

      {/* Distribution */}
      <Card x={318} y={186} w={122} h={94} />
      <path d="M332 262 C 352 262, 360 206, 379 206 S 406 262, 426 262 Z" className="fill-brand-100" />
      <path d="M332 262 C 352 262, 360 206, 379 206 S 406 262, 426 262" fill="none" strokeWidth="2.5" className="stroke-brand-600" />
      <line x1="379" y1="200" x2="379" y2="266" strokeWidth="2" strokeDasharray="3 3" className="stroke-accent-500" />
    </>
  );
}

function ArtificialIntelligence() {
  return (
    <>
      {/* Source document with extracted fields */}
      <Card x={40} y={52} w={150} h={210} />
      <Bar x={58} y={72} w={70} className="fill-ink-300" h={7} />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <Bar key={i} x={58} y={94 + i * 16} w={[112, 96, 104, 80, 110, 90, 70][i]} className={i === 1 || i === 4 ? "fill-brand-200" : "fill-ink-100"} h={7} />
      ))}
      <rect x="54" y="106" width="104" height="15" rx="4" fill="none" strokeWidth="2" className="stroke-brand-500" />
      <rect x="54" y="154" width="118" height="15" rx="4" fill="none" strokeWidth="2" className="stroke-accent-500" />
      <Bar x={58} y={222} w={60} className="fill-ink-200" />
      <Bar x={58} y={236} w={44} className="fill-ink-200" />

      {/* Extraction lines */}
      <path d="M158 113 C 200 113, 196 92, 226 92" fill="none" strokeWidth="2.5" strokeDasharray="1 7" strokeLinecap="round" className="stroke-brand-500" />
      <path d="M172 161 C 206 161, 200 128, 226 128" fill="none" strokeWidth="2.5" strokeDasharray="1 7" strokeLinecap="round" className="stroke-accent-500" />

      {/* Assistant window */}
      <Card x={218} y={40} w={226} h={240} />
      <rect x="218" y="40" width="226" height="40" rx="14" className="fill-ink-900" />
      <rect x="218" y="66" width="226" height="14" className="fill-ink-900" />
      {/* Sparkle avatar */}
      <g transform="translate(240 60)">
        <circle r="11" className="fill-brand-500" />
        <path d="M0 -6 C1 -1.5 1.5 -1 6 0 C1.5 1 1 1.5 0 6 C-1 1.5 -1.5 1 -6 0 C-1.5 -1 -1 -1.5 0 -6 Z" className="fill-white" />
      </g>
      <Bar x={258} y={57} w={64} className="fill-ink-500" h={6} />

      {/* Extracted fields */}
      <rect x="234" y="88" width="98" height="16" rx="8" className="fill-brand-50 stroke-brand-200" strokeWidth="1" />
      <Bar x={244} y={94} w={70} className="fill-brand-500" />
      <rect x="234" y="120" width="112" height="16" rx="8" className="fill-accent-50 stroke-accent-200" strokeWidth="1" />
      <Bar x={244} y={126} w={86} className="fill-accent-500" />

      {/* Chat */}
      <rect x="322" y="150" width="106" height="30" rx="12" className="fill-brand-600" />
      <Bar x={334} y={159} w={74} className="fill-white" />
      <Bar x={334} y={169} w={50} className="fill-brand-200" />
      <rect x="234" y="190" width="150" height="44" rx="12" className="fill-ink-100" />
      <Bar x={246} y={200} w={120} className="fill-ink-400" />
      <Bar x={246} y={211} w={104} className="fill-ink-300" />
      <rect x="246" y="221" width="48" height="8" rx="4" className="fill-white stroke-brand-300" strokeWidth="1" />
      <Bar x={252} y={223.5} w={36} className="fill-brand-500" h={3} />

      {/* Human review */}
      <rect x="234" y="246" width="194" height="22" rx="11" className="fill-white stroke-ink-200" strokeWidth="1.5" />
      <Check x={248} y={257} />
      <Bar x={264} y={254} w={88} className="fill-ink-300" h={6} />
    </>
  );
}

const drawings: Record<string, () => JSX.Element> = {
  "software-development": SoftwareDevelopment,
  "game-development": GameDevelopment,
  "data-analytics": DataAnalytics,
  "business-intelligence": BusinessIntelligence,
  "data-engineering": DataEngineering,
  "data-science": DataScience,
  "artificial-intelligence": ArtificialIntelligence,
};
