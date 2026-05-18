// Home page — full-bleed fig tree, EARTH-style centered title
const HomePage = ({ onNavigate }) => {
  return (
    <>
      <section className="hero grain">
        <div className="tree-bg">
          <FigTreeSilhouette color="#f3eee2" opacity={0.55} />
        </div>
        <div className="vignette"></div>

        <div className="title-row">
          <div className="left-meta">est.<br/>2024</div>
          <h1 className="site-title">
            <span className="the">under the</span>
            <span className="fig-tree">Fig Tree</span>
          </h1>
          <div className="right-meta">a sanctuary<br/>for the soul</div>
        </div>

        <div className="center-block">
          <div className="ornament">
            <SunOrnament size={56} color="#f3eee2" />
          </div>
          <div className="album-tag">— Yoga & Sound Studio —</div>
          <p>
            Where breath becomes prayer and stillness becomes song.<br/>
            A gathering place for the body, the breath, and the listening heart.
          </p>
        </div>

        <div className="bottom-row">
          <div className="stamp">N. 01 / WELCOME</div>
          <div className="scroll-cue">
            <div>scroll</div>
            <div className="line"></div>
          </div>
          <div className="stamp" style={{ textAlign: "right" }}>SPRING — MMXXVI</div>
        </div>
      </section>

      {/* Intro / about teaser */}
      <section className="section cream">
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div className="eyebrow">— A gentle hello —</div>
            <h2 className="section-title" style={{ fontSize: "clamp(40px, 5vw, 76px)", marginBottom: 28 }}>
              Come sit<br/>beneath the<br/><em style={{ fontFamily: "'Italianno', cursive", textTransform: "none", letterSpacing: 0, fontSize: "1.2em", fontStyle: "normal" }}>fig tree.</em>
            </h2>
            <p className="lede" style={{ marginBottom: 28 }}>
              I'm Erin — yoga teacher, sound practitioner, and tender of this little corner of the internet.
              This is a slow space, made for breathing deeply and remembering what is true.
            </p>
            <button className="btn solid" onClick={() => onNavigate("about")}>
              Read my story
              <span style={{ display: "inline-block", transform: "translateY(-1px)" }}>→</span>
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, alignItems: "start" }}>
            <div className="img-ph" style={{ aspectRatio: "3/4", marginTop: 40 }}>
              <div className="ph-tag">portrait<br/>3:4</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div className="img-ph" style={{ aspectRatio: "1/1" }}>
                <div className="ph-tag">studio<br/>1:1</div>
              </div>
              <div className="img-ph" style={{ aspectRatio: "3/4" }}>
                <div className="ph-tag">hands /<br/>candle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee">
        <div className="track">
          {Array.from({ length: 2 }).map((_, k) => (
            <React.Fragment key={k}>
              <span>Breathe Deeply</span>
              <span className="star">✦</span>
              <span>Move Slowly</span>
              <span className="star">✦</span>
              <span>Listen Inward</span>
              <span className="star">✦</span>
              <span>Rest Often</span>
              <span className="star">✦</span>
              <span>Trust the Body</span>
              <span className="star">✦</span>
              <span>Return Home</span>
              <span className="star">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Offerings grid */}
      <section className="section paper">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 60, gap: 40, flexWrap: "wrap" }}>
            <div>
              <div className="eyebrow">— What is offered —</div>
              <h2 className="section-title" style={{ fontSize: "clamp(44px, 6vw, 96px)" }}>Offerings</h2>
            </div>
            <p className="lede" style={{ maxWidth: 460 }}>
              Each practice is an invitation — never a demand. Come as you are, leave a little softer than you arrived.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <OfferingCard
              tag="01"
              title="Yoga"
              subtitle="Slow flow & restorative"
              desc="Group classes, private sessions, and seasonal series rooted in breath, alignment, and the wisdom of slowness."
              cta="See classes"
              onClick={() => onNavigate("yoga")}
              dark
            />
            <OfferingCard
              tag="02"
              title="Sound"
              subtitle="Sound baths & ceremonies"
              desc="Crystal bowls, chimes, and gong journeys — vibrational medicine to soften the nervous system and call you home."
              cta="Explore sound"
              onClick={() => onNavigate("sound")}
            />
            <OfferingCard
              tag="03"
              title="The Blog"
              subtitle="Field notes & reflections"
              desc="Slow writing on the body, the seasons, and the practice of being human in tender times."
              cta="Read journal"
              onClick={() => onNavigate("blog")}
            />
            <OfferingCard
              tag="04"
              title="The Shop"
              subtitle="Recordings & rituals"
              desc="Sound bath recordings, guided meditations, breathwork journeys, and small handmade offerings."
              cta="Visit shop"
              onClick={() => onNavigate("shop")}
              mauve
            />
          </div>
        </div>
      </section>

      {/* Quote / pause */}
      <section className="section forest grain" style={{ textAlign: "center", padding: "140px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Divider color="#f3eee2" width={300} />
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(24px, 3.4vw, 40px)", lineHeight: 1.4, marginTop: 40, color: "var(--cream)" }}>
            "I once sat beneath a fig tree and the whole world<br/>
            grew quiet enough to hear my own heart."
          </p>
          <div className="script" style={{ fontSize: 36, marginTop: 28, opacity: 0.85, color: "var(--mauve)" }}>— a small remembering</div>
          <div style={{ marginTop: 50 }}>
            <Divider color="#f3eee2" width={300} />
          </div>
        </div>
      </section>

      {/* Schedule preview */}
      <SchedulePreview onNavigate={onNavigate} />

      {/* Instagram strip */}
      <InstagramStrip />
    </>
  );
};

const OfferingCard = ({ tag, title, subtitle, desc, cta, onClick, dark, mauve }) => {
  const bg = dark ? "var(--forest-deep)" : mauve ? "var(--mauve)" : "var(--cream)";
  const fg = dark ? "var(--cream)" : "var(--ink)";
  return (
    <div
      onClick={onClick}
      style={{
        background: bg, color: fg, padding: "44px 40px 36px",
        cursor: "pointer", position: "relative",
        borderRadius: 4,
        border: "1px solid rgba(31,36,28,0.12)",
        transition: "transform 280ms ease, box-shadow 280ms ease",
        minHeight: 380,
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 24px 48px -28px rgba(31,36,28,0.4)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
        <div className="mono-tag" style={{ opacity: 0.6 }}>N° {tag}</div>
        <div style={{ opacity: 0.55 }}><LeafGlyph size={28} color={fg} /></div>
      </div>
      <h3 style={{ fontFamily: "'Cinzel', serif", fontWeight: 300, fontSize: 56, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 0.95, marginBottom: 8 }}>{title}</h3>
      <div className="editorial" style={{ fontSize: 22, opacity: 0.85, marginBottom: 20 }}>{subtitle}</div>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, lineHeight: 1.55, opacity: 0.85, marginBottom: 32, flex: 1 }}>{desc}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `1px solid ${dark ? "rgba(243,238,226,0.18)" : "rgba(31,36,28,0.18)"}`, paddingTop: 18 }}>
        <span className="mono-tag">{cta}</span>
        <span style={{ fontSize: 22 }}>→</span>
      </div>
    </div>
  );
};

const SchedulePreview = ({ onNavigate }) => {
  const upcoming = [
    { date: "Tue 05.07", time: "7:00 AM", title: "Slow Flow & Sunrise", spots: "4 spots" },
    { date: "Thu 05.09", time: "6:30 PM", title: "Restorative + Sound Bath", spots: "Full" },
    { date: "Sat 05.11", time: "9:30 AM", title: "Saturday Morning Practice", spots: "8 spots" },
    { date: "Sun 05.12", time: "5:00 PM", title: "New Moon Sound Journey", spots: "12 spots" },
  ];
  return (
    <section className="section cream" style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 50, flexWrap: "wrap", gap: 30 }}>
          <div>
            <div className="eyebrow">— This week's gatherings —</div>
            <h2 className="section-title" style={{ fontSize: "clamp(40px, 5.5vw, 88px)" }}>Upcoming</h2>
          </div>
          <button className="btn" onClick={() => onNavigate("yoga")}>Full schedule →</button>
        </div>

        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {upcoming.map((c, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "120px 110px 1fr 100px 140px",
              alignItems: "center",
              padding: "26px 0",
              borderBottom: "1px solid var(--rule)",
              gap: 20,
            }}>
              <div className="mono-tag" style={{ opacity: 0.7 }}>{c.date}</div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: "0.18em" }}>{c.time}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontStyle: "italic" }}>{c.title}</div>
              <div className="mono-tag" style={{ opacity: c.spots === "Full" ? 0.5 : 0.7, color: c.spots === "Full" ? "var(--mauve-deep)" : "inherit" }}>{c.spots}</div>
              <button className="btn" style={{ padding: "10px 20px", fontSize: 10 }} disabled={c.spots === "Full"}>
                {c.spots === "Full" ? "Waitlist" : "Reserve"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstagramStrip = () => {
  const captions = ["morning practice", "from the studio", "fig blossoms", "sound bowls", "garden notes", "after class"];
  return (
    <section className="section paper" style={{ padding: "100px 0 120px" }}>
      <div style={{ textAlign: "center", marginBottom: 40, padding: "0 48px" }}>
        <div className="eyebrow">— @underthefigtree —</div>
        <h2 className="section-title" style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}>Field Notes</h2>
        <p className="lede" style={{ margin: "16px auto 0", textAlign: "center" }}>Small moments from the garden, the studio, and the long pauses in between.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 4 }}>
        {captions.map((cap, i) => (
          <div key={i} className="img-ph" style={{ aspectRatio: "1/1", cursor: "pointer", position: "relative" }}
               onMouseEnter={(e) => { const tag = e.currentTarget.querySelector(".ig-cap"); if (tag) tag.style.opacity = 1; }}
               onMouseLeave={(e) => { const tag = e.currentTarget.querySelector(".ig-cap"); if (tag) tag.style.opacity = 0; }}>
            <div className="ph-tag">ig {String(i+1).padStart(2,'0')}<br/>1:1</div>
            <div className="ig-cap" style={{ position: "absolute", inset: 0, background: "rgba(61,74,53,0.85)", color: "var(--cream)", display: "grid", placeItems: "center", opacity: 0, transition: "opacity 220ms", fontFamily: "'Italianno', cursive", fontSize: 32, padding: 16, textAlign: "center" }}>{cap}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { HomePage, OfferingCard });
