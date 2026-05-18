// Fig tree silhouette — clearly placeholder, organic shape
// Tagged so it's obviously a stand-in for friend's illustration

const FigTreeSilhouette = ({ color = "#f3eee2", opacity = 0.78 }) => (
  <svg viewBox="0 0 800 900" preserveAspectRatio="xMidYMid meet" aria-label="fig tree placeholder">
    <defs>
      <filter id="rough">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
        <feDisplacementMap in="SourceGraphic" scale="2" />
      </filter>
    </defs>
    <g fill="none" stroke={color} strokeWidth="1.4" opacity={opacity} strokeLinecap="round">
      {/* trunk */}
      <path d="M400 880 C 396 760, 410 700, 402 600 C 394 540, 416 480, 400 420 C 388 380, 412 340, 400 280" />
      <path d="M400 880 C 404 800, 392 720, 408 640" opacity="0.6"/>
      <path d="M400 880 C 410 820, 398 760, 414 700" opacity="0.4"/>
      {/* main branches */}
      <path d="M400 420 C 340 400, 280 380, 220 350" />
      <path d="M400 420 C 460 400, 530 380, 600 350" />
      <path d="M400 320 C 350 300, 290 270, 230 230" />
      <path d="M400 320 C 450 300, 520 270, 580 230" />
      <path d="M400 280 C 380 240, 360 200, 340 160" />
      <path d="M400 280 C 420 240, 440 200, 460 160" />
      {/* sub branches */}
      <path d="M280 360 C 240 340, 200 320, 170 280" opacity="0.7"/>
      <path d="M520 360 C 560 340, 610 320, 640 280" opacity="0.7"/>
      <path d="M260 280 C 220 250, 180 220, 150 180" opacity="0.7"/>
      <path d="M540 280 C 580 250, 630 220, 660 180" opacity="0.7"/>
      <path d="M340 200 C 320 170, 290 140, 260 110" opacity="0.6"/>
      <path d="M460 200 C 480 170, 510 140, 540 110" opacity="0.6"/>
      <path d="M380 180 C 360 140, 340 110, 320 80" opacity="0.5"/>
      <path d="M420 180 C 440 140, 460 110, 480 80" opacity="0.5"/>

      {/* fig leaves — stylized 3-lobe shapes */}
      {[
        [180, 240, 1.0, 8],
        [240, 200, 0.85, -12],
        [310, 130, 0.9, 5],
        [380, 90, 0.95, 0],
        [420, 90, 0.9, 0],
        [490, 130, 1.0, -5],
        [560, 200, 0.85, 12],
        [620, 240, 1.0, -8],
        [200, 320, 0.9, 15],
        [600, 320, 0.9, -15],
        [330, 250, 0.7, 10],
        [470, 250, 0.7, -10],
        [350, 380, 0.8, 8],
        [450, 380, 0.8, -8],
        [260, 410, 0.95, 18],
        [540, 410, 0.95, -18],
        [400, 440, 0.85, 0],
        [320, 480, 0.7, 12],
        [480, 480, 0.7, -12],
      ].map(([cx, cy, s, rot], i) => (
        <g key={i} transform={`translate(${cx} ${cy}) scale(${s}) rotate(${rot})`}>
          <FigLeaf color={color} />
        </g>
      ))}

      {/* hanging figs (small teardrops) */}
      {[
        [205, 270, 0.8],
        [255, 230, 0.7],
        [355, 175, 0.9],
        [445, 175, 0.9],
        [545, 230, 0.7],
        [595, 270, 0.8],
        [380, 410, 0.85],
        [420, 415, 0.85],
        [285, 365, 0.75],
        [515, 365, 0.75],
        [350, 470, 0.7],
        [450, 470, 0.7],
      ].map(([cx, cy, s], i) => (
        <g key={`f${i}`} transform={`translate(${cx} ${cy}) scale(${s})`}>
          <Fig color={color} />
        </g>
      ))}
    </g>
  </svg>
);

const FigLeaf = ({ color = "#f3eee2" }) => (
  <g fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round">
    {/* simplified 3-lobe fig leaf */}
    <path d="M0 0 C -8 -8, -18 -6, -22 -18 C -16 -28, -8 -28, 0 -22 C 8 -28, 16 -28, 22 -18 C 18 -6, 8 -8, 0 0 Z" />
    <path d="M0 -22 C -2 -16, 0 -8, 0 0" opacity="0.5"/>
  </g>
);

const Fig = ({ color = "#f3eee2" }) => (
  <g fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round">
    <path d="M0 0 C -6 -2, -8 -8, -6 -14 C -4 -18, 0 -20, 0 -22" />
    <path d="M0 0 C 6 -2, 8 -8, 6 -14 C 4 -18, 0 -20, 0 -22" />
    <path d="M-3 -22 L 0 -26 L 3 -22" />
    <path d="M-1 -25 L -2 -28" />
    <path d="M1 -25 L 2 -28" />
  </g>
);

// Small inline fig glyph for inline use
const FigGlyph = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size * 1.2} viewBox="-12 -30 24 32" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round">
    <path d="M0 0 C -6 -2, -8 -8, -6 -14 C -4 -18, 0 -20, 0 -22" />
    <path d="M0 0 C 6 -2, 8 -8, 6 -14 C 4 -18, 0 -20, 0 -22" />
    <path d="M-3 -22 L 0 -26 L 3 -22" />
    <path d="M-1 -25 L -2 -28" />
    <path d="M1 -25 L 2 -28" />
  </svg>
);

const LeafGlyph = ({ size = 28, color = "currentColor" }) => (
  <svg width={size} height={size * 0.8} viewBox="-26 -32 52 36" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round">
    <path d="M0 0 C -8 -8, -18 -6, -22 -18 C -16 -28, -8 -28, 0 -22 C 8 -28, 16 -28, 22 -18 C 18 -6, 8 -8, 0 0 Z" />
    <path d="M0 -22 C -2 -16, 0 -8, 0 0" opacity="0.5"/>
  </svg>
);

// Sun / star ornament (used in hero center, like EARTH album)
const SunOrnament = ({ size = 60, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="-32 -32 64 64" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round">
    <circle cx="0" cy="0" r="10" />
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i / 12) * Math.PI * 2;
      const x1 = Math.cos(a) * 14;
      const y1 = Math.sin(a) * 14;
      const x2 = Math.cos(a) * 24;
      const y2 = Math.sin(a) * 24;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
    })}
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i / 12) * Math.PI * 2 + Math.PI / 12;
      const x1 = Math.cos(a) * 16;
      const y1 = Math.sin(a) * 16;
      const x2 = Math.cos(a) * 20;
      const y2 = Math.sin(a) * 20;
      return <line key={`s${i}`} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.5" />;
    })}
  </svg>
);

// Ornamental divider — thin line with leaf in center
const Divider = ({ color = "currentColor", width = 240 }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, width: width, color }}>
    <div style={{ flex: 1, height: 1, background: "currentColor", opacity: 0.3 }}></div>
    <LeafGlyph size={22} color={color} />
    <div style={{ flex: 1, height: 1, background: "currentColor", opacity: 0.3 }}></div>
  </div>
);

Object.assign(window, { FigTreeSilhouette, FigGlyph, LeafGlyph, SunOrnament, Divider });
