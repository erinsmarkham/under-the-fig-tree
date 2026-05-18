// Main app shell — nav, routing, footer, tweaks
const { useState, useEffect } = React;

const NAV = [
  { id: "home", label: "Home" },
  { id: "yoga", label: "Yoga" },
  { id: "sound", label: "Sound" },
  { id: "blog", label: "Journal" },
  { id: "about", label: "About" },
  { id: "shop", label: "Shop" },
];

const App = () => {
  const [page, setPage] = useState("home");
  const [tweaks, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);
  const [scrolled, setScrolled] = useState(false);

  // Apply palette tweaks to CSS vars
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--forest-deep", tweaks.forestDeep);
    r.style.setProperty("--forest", tweaks.forest);
    r.style.setProperty("--cream", tweaks.cream);
    r.style.setProperty("--cream-warm", tweaks.cream);
    r.style.setProperty("--paper", tweaks.paper);
    r.style.setProperty("--mauve", tweaks.mauve);
    r.style.setProperty("--mauve-deep", tweaks.mauveDeep);
  }, [tweaks]);

  // Scroll listener — for nav background swap
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset scroll on page change
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [page]);

  const navigate = (p) => setPage(p);
  // Hero is dark; everything else starts light
  const navOnDark = page === "home" && !scrolled;

  return (
    <div className="shell">
      <nav className={`topnav ${navOnDark ? "on-dark" : "on-light"}`}>
        <div className="brand" onClick={() => navigate("home")} style={{ cursor: "pointer" }}>
          UNDER <span className="amp">the</span> FIG TREE
        </div>
        <div className="links">
          {NAV.filter(n => n.id !== "home").map(n => (
            <button key={n.id}
              className={page === n.id ? "active" : ""}
              onClick={() => navigate(n.id)}>
              {n.label}
            </button>
          ))}
        </div>
        <button className="menu-corner" aria-label="menu">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
            <line x1="0" y1="3" x2="14" y2="3" />
            <line x1="0" y1="7" x2="14" y2="7" />
            <line x1="0" y1="11" x2="14" y2="11" />
          </svg>
        </button>
      </nav>

      {page === "home" && <HomePage onNavigate={navigate} />}
      {page === "yoga" && <YogaPage onNavigate={navigate} />}
      {page === "sound" && <SoundPage onNavigate={navigate} />}
      {page === "blog" && <BlogPage onNavigate={navigate} />}
      {page === "about" && <AboutPage onNavigate={navigate} />}
      {page === "shop" && <ShopPage onNavigate={navigate} />}

      <Footer onNavigate={navigate} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Palette">
          <PaletteSwatches tweaks={tweaks} setTweak={setTweak} />
        </TweakSection>
        <TweakSection title="Custom colors">
          <TweakColor label="Deep forest" value={tweaks.forestDeep} onChange={(v) => setTweak("forestDeep", v)} />
          <TweakColor label="Forest" value={tweaks.forest} onChange={(v) => setTweak("forest", v)} />
          <TweakColor label="Cream" value={tweaks.cream} onChange={(v) => setTweak("cream", v)} />
          <TweakColor label="Paper" value={tweaks.paper} onChange={(v) => setTweak("paper", v)} />
          <TweakColor label="Mauve" value={tweaks.mauve} onChange={(v) => setTweak("mauve", v)} />
          <TweakColor label="Mauve deep" value={tweaks.mauveDeep} onChange={(v) => setTweak("mauveDeep", v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
};

const PaletteSwatches = ({ tweaks, setTweak }) => {
  const palettes = [
    { name: "Fig Grove", forestDeep: "#3d4a35", forest: "#4a5a40", cream: "#f3eee2", paper: "#f7f3e8", mauve: "#c9a0a8", mauveDeep: "#a87a8a" },
    { name: "Mossy Plum", forestDeep: "#2f3a2a", forest: "#3d4a35", cream: "#ede5d3", paper: "#f0e9d8", mauve: "#b48aa0", mauveDeep: "#7a4a5e" },
    { name: "Olive Rose", forestDeep: "#5a6648", forest: "#6b7a55", cream: "#f5efe2", paper: "#f8f3e6", mauve: "#d6acb0", mauveDeep: "#a87a8a" },
    { name: "Deep Forest", forestDeep: "#26301f", forest: "#3a4530", cream: "#ece4d2", paper: "#efe8d6", mauve: "#a07a85", mauveDeep: "#6e4a55" },
    { name: "Sage Bloom", forestDeep: "#4a5d3a", forest: "#6b7a55", cream: "#f7f1e3", paper: "#faf4e8", mauve: "#e0b5b8", mauveDeep: "#b08590" },
  ];
  const isActive = (p) => p.forestDeep === tweaks.forestDeep && p.mauve === tweaks.mauve;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {palettes.map(p => (
        <div key={p.name}
          onClick={() => setTweak({ forestDeep: p.forestDeep, forest: p.forest, cream: p.cream, paper: p.paper, mauve: p.mauve, mauveDeep: p.mauveDeep })}
          style={{
            display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center",
            padding: "10px 12px", border: `1px solid ${isActive(p) ? "#1f241c" : "rgba(31,36,28,0.15)"}`, borderRadius: 6, cursor: "pointer",
            background: isActive(p) ? "rgba(31,36,28,0.04)" : "transparent",
          }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>{p.name}</div>
          <div style={{ display: "flex", gap: 4 }}>
            {[p.forestDeep, p.forest, p.cream, p.mauve, p.mauveDeep].map((c, i) => (
              <div key={i} style={{ width: 18, height: 18, borderRadius: "50%", background: c, border: "1px solid rgba(31,36,28,0.15)" }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Footer = ({ onNavigate }) => (
  <footer className="footer grain">
    <div style={{ position: "absolute", right: -100, bottom: -180, opacity: 0.18, width: 480, height: 580, zIndex: 1 }}>
      <FigTreeSilhouette color="#f3eee2" opacity={0.8} />
    </div>
    <div className="cols" style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div>
        <div className="display" style={{ fontSize: 28, fontWeight: 300, marginBottom: 16 }}>UNDER <span className="script" style={{ fontSize: 36, verticalAlign: "-6px", margin: "0 4px" }}>the</span> FIG TREE</div>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 18, lineHeight: 1.6, opacity: 0.85, maxWidth: 360 }}>
          A gathering place for breath, body, and the slow art of being.
        </p>
        <div className="script" style={{ fontSize: 50, marginTop: 18, color: "var(--mauve)" }}>— Erin</div>
      </div>
      <div>
        <h4>Visit</h4>
        <ul>
          {NAV.filter(n => n.id !== "home").map(n => (
            <li key={n.id} onClick={() => onNavigate(n.id)}>{n.label}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Find me</h4>
        <ul>
          <li>@underthefigtree</li>
          <li>hello@underthefigtree.co</li>
          <li>The Garden Studio</li>
          <li>by appointment</li>
        </ul>
      </div>
      <div>
        <h4>Letters</h4>
        <ul>
          <li style={{ fontStyle: "italic", opacity: 0.8 }}>A monthly note,<br/>sent slowly.</li>
        </ul>
        <div style={{ marginTop: 16 }}>
          <button className="btn" style={{ borderColor: "var(--cream)", color: "var(--cream)" }}>Subscribe →</button>
        </div>
      </div>
    </div>
    <div className="credit" style={{ maxWidth: 1280, margin: "60px auto 0" }}>
      <span>© MMXXVI · UNDER THE FIG TREE</span>
      <span>MADE WITH SLOWNESS</span>
    </div>
  </footer>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
