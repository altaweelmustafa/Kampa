const C = {
  navy: "#0B1E3D",
  navyLight: "#102347",
  navyMid: "#0F2850",
  white: "#F5F7FA",
  whiteDim: "#A8B4C8",
  red: "#C0392B",
  teal: "#1A7A8A",
  tealLight: "#22909F",
  amber: "#D4880A",
};

const svgMap = {
  armbar: (scale = 1) => (
    <svg viewBox="0 0 120 80" width={100 * scale} height={67 * scale}>
      <style>{`
        @keyframes ab-pivot { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(40deg)} }
        @keyframes ab-arm   { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(-30deg)} }
        .ab-body { animation: ab-pivot 2.4s ease-in-out infinite; transform-origin: 60px 45px; }
        .ab-arm  { animation: ab-arm   2.4s ease-in-out infinite; transform-origin: 55px 30px; }
      `}</style>
      <ellipse cx="60" cy="50" rx="18" ry="10" fill={C.teal} opacity="0.3" />
      <line x1="40" y1="50" x2="80" y2="50" stroke={C.teal} strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="40" r="5" fill={C.teal} opacity="0.6" />
      <g className="ab-body">
        <line x1="60" y1="30" x2="60" y2="55" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        <circle cx="60" cy="25" r="5" fill={C.white} opacity="0.85" />
        <g className="ab-arm">
          <line x1="55" y1="38" x2="35" y2="48" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        </g>
        <line x1="55" y1="38" x2="75" y2="48" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      </g>
    </svg>
  ),

  triangle: (scale = 1) => (
    <svg viewBox="0 0 120 80" width={100 * scale} height={67 * scale}>
      <style>{`
        @keyframes tri-squeeze { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(0.88)} }
        .tri-legs { animation: tri-squeeze 2s ease-in-out infinite; transform-origin: 60px 50px; }
      `}</style>
      <circle cx="60" cy="30" r="6" fill={C.white} opacity="0.85" />
      <line x1="60" y1="36" x2="60" y2="58" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      <g className="tri-legs">
        <line x1="60" y1="48" x2="38" y2="62" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        <line x1="60" y1="48" x2="82" y2="62" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        <path d="M38,62 Q60,72 82,62" stroke={C.teal} strokeWidth="2" fill="none" opacity="0.7" />
      </g>
      <line x1="55" y1="50" x2="42" y2="44" stroke={C.red} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <circle cx="38" cy="42" r="4" fill={C.teal} opacity="0.4" />
    </svg>
  ),

  shrimp: (scale = 1) => (
    <svg viewBox="0 0 120 80" width={100 * scale} height={67 * scale}>
      <style>{`
        @keyframes shrimp-move { 0%{transform:translateX(0)} 50%{transform:translateX(-10px)} 100%{transform:translateX(0)} }
        .shrimp-body { animation: shrimp-move 2s ease-in-out infinite; }
      `}</style>
      <g className="shrimp-body">
        <circle cx="70" cy="35" r="6" fill={C.white} opacity="0.85" />
        <path d="M70,41 Q55,55 45,65" stroke={C.white} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />
        <line x1="62" y1="50" x2="50" y2="62" stroke={C.white} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="58" y1="54" x2="70" y2="65" stroke={C.white} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </g>
      <ellipse cx="60" cy="42" rx="22" ry="8" fill={C.teal} opacity="0.15" />
    </svg>
  ),

  rnc: (scale = 1) => (
    <svg viewBox="0 0 120 80" width={100 * scale} height={67 * scale}>
      <style>{`
        @keyframes rnc-arm { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(8deg)} }
        .rnc-arm { animation: rnc-arm 1.8s ease-in-out infinite; transform-origin: 60px 42px; }
      `}</style>
      <circle cx="60" cy="35" r="6" fill={C.teal} opacity="0.55" />
      <line x1="60" y1="41" x2="60" y2="62" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
      <circle cx="60" cy="28" r="5" fill={C.white} opacity="0.85" />
      <g className="rnc-arm">
        <path d="M50,38 Q60,30 70,38" stroke={C.white} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />
        <line x1="50" y1="38" x2="42" y2="45" stroke={C.white} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="70" y1="38" x2="78" y2="45" stroke={C.white} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </g>
    </svg>
  ),

  scissor: (scale = 1) => (
    <svg viewBox="0 0 120 80" width={100 * scale} height={67 * scale}>
      <style>{`
        @keyframes sc-open  { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(-25deg)} }
        @keyframes sc-close { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(25deg)} }
        .sc-top { animation: sc-open  2.2s ease-in-out infinite; transform-origin: 60px 45px; }
        .sc-bot { animation: sc-close 2.2s ease-in-out infinite; transform-origin: 60px 45px; }
      `}</style>
      <circle cx="60" cy="28" r="6" fill={C.white} opacity="0.85" />
      <line x1="60" y1="34" x2="60" y2="50" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      <g className="sc-top">
        <line x1="60" y1="50" x2="85" y2="42" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      </g>
      <g className="sc-bot">
        <line x1="60" y1="50" x2="35" y2="58" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      </g>
      <circle cx="60" cy="62" r="4" fill={C.teal} opacity="0.4" />
    </svg>
  ),

  americana: (scale = 1) => (
    <svg viewBox="0 0 120 80" width={100 * scale} height={67 * scale}>
      <style>{`
        @keyframes am-rot { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(-40deg)} }
        .am-arm { animation: am-rot 2.4s ease-in-out infinite; transform-origin: 65px 48px; }
      `}</style>
      <circle cx="60" cy="30" r="6" fill={C.white} opacity="0.85" />
      <line x1="60" y1="36" x2="60" y2="58" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      <line x1="60" y1="44" x2="78" y2="38" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      <g className="am-arm">
        <line x1="65" y1="48" x2="85" y2="55" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        <line x1="85" y1="55" x2="85" y2="40" stroke={C.teal} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  ),

  slx: (scale = 1) => (
    <svg viewBox="0 0 120 80" width={100 * scale} height={67 * scale}>
      <style>{`
        @keyframes slx-tip { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(15deg)} }
        .slx-g { animation: slx-tip 2s ease-in-out infinite; transform-origin: 55px 50px; }
      `}</style>
      <circle cx="55" cy="30" r="6" fill={C.white} opacity="0.85" />
      <line x1="55" y1="36" x2="55" y2="55" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      <g className="slx-g">
        <line x1="55" y1="50" x2="35" y2="65" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        <line x1="55" y1="50" x2="75" y2="60" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        <circle cx="75" cy="60" r="4" fill={C.teal} opacity="0.5" />
      </g>
    </svg>
  ),

  scescape: (scale = 1) => (
    <svg viewBox="0 0 120 80" width={100 * scale} height={67 * scale}>
      <style>{`
        @keyframes sc-esc { 0%{transform:translateX(0)} 50%{transform:translateX(-12px)} 100%{transform:translateX(0)} }
        .sce-body { animation: sc-esc 2.2s ease-in-out infinite; }
      `}</style>
      <ellipse cx="65" cy="45" rx="20" ry="9" fill={C.teal} opacity="0.2" />
      <g className="sce-body">
        <circle cx="55" cy="38" r="6" fill={C.white} opacity="0.85" />
        <line x1="55" y1="44" x2="55" y2="62" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        <line x1="55" y1="50" x2="38" y2="56" stroke={C.white} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="55" y1="50" x2="70" y2="56" stroke={C.white} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </g>
    </svg>
  ),

  guillotine: (scale = 1) => (
    <svg viewBox="0 0 120 80" width={100 * scale} height={67 * scale}>
      <style>{`
        @keyframes guil-arch { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(1.08)} }
        .guil-g { animation: guil-arch 2s ease-in-out infinite; transform-origin: 60px 45px; }
      `}</style>
      <circle cx="60" cy="28" r="6" fill={C.white} opacity="0.85" />
      <g className="guil-g">
        <line x1="60" y1="34" x2="60" y2="55" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        <path d="M45,42 Q38,30 55,28" stroke={C.white} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />
        <circle cx="42" cy="45" r="5" fill={C.teal} opacity="0.5" />
        <line x1="42" y1="45" x2="42" y2="62" stroke={C.teal} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  ),

  double: (scale = 1) => (
    <svg viewBox="0 0 120 80" width={100 * scale} height={67 * scale}>
      <style>{`
        @keyframes dl-drive { 0%,100%{transform:translateX(0)} 50%{transform:translateX(8px)} }
        .dl-g { animation: dl-drive 1.8s ease-in-out infinite; }
      `}</style>
      <g className="dl-g">
        <circle cx="50" cy="30" r="6" fill={C.white} opacity="0.85" />
        <line x1="50" y1="36" x2="50" y2="55" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        <line x1="50" y1="42" x2="34" y2="50" stroke={C.white} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="50" y1="55" x2="38" y2="68" stroke={C.white} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="50" y1="55" x2="60" y2="68" stroke={C.white} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </g>
      <circle cx="80" cy="35" r="5" fill={C.teal} opacity="0.5" />
      <line x1="80" y1="40" x2="80" y2="58" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
      <line x1="80" y1="58" x2="70" y2="68" stroke={C.teal} strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      <line x1="80" y1="58" x2="90" y2="68" stroke={C.teal} strokeWidth="2" strokeLinecap="round" opacity="0.55" />
    </svg>
  ),

  kimura: (scale = 1) => (
    <svg viewBox="0 0 120 80" width={100 * scale} height={67 * scale}>
      <style>{`
        @keyframes kim-rot { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(35deg)} }
        .kim-arm { animation: kim-rot 2.4s ease-in-out infinite; transform-origin: 70px 44px; }
      `}</style>
      <circle cx="55" cy="32" r="6" fill={C.white} opacity="0.85" />
      <line x1="55" y1="38" x2="55" y2="58" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      <g className="kim-arm">
        <line x1="70" y1="44" x2="88" y2="38" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        <line x1="88" y1="38" x2="88" y2="56" stroke={C.teal} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <circle cx="88" cy="58" r="3.5" fill={C.red} opacity="0.6" />
      </g>
      <line x1="55" y1="44" x2="72" y2="44" stroke={C.white} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  ),

  berimbolo: (scale = 1) => (
    <svg viewBox="0 0 120 80" width={100 * scale} height={67 * scale}>
      <style>{`
        @keyframes beri-spin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        .beri-g { animation: beri-spin 3s linear infinite; transform-origin: 60px 46px; }
      `}</style>
      <g className="beri-g">
        <circle cx="60" cy="32" r="5" fill={C.white} opacity="0.85" />
        <line x1="60" y1="37" x2="60" y2="52" stroke={C.white} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        <line x1="60" y1="43" x2="44" y2="50" stroke={C.teal} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="60" y1="43" x2="76" y2="50" stroke={C.teal} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="60" y1="52" x2="48" y2="62" stroke={C.white} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="60" y1="52" x2="72" y2="62" stroke={C.white} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </g>
    </svg>
  ),
};

export default function TechniqueSVG({ type, scale = 1 }) {
  const render = svgMap[type];
  if (!render) {
    return <i className="fa-solid fa-person-falling" style={{ fontSize: 36 * scale, color: "#1A7A8A", opacity: 0.5 }} />;
  }
  return render(scale);
}
