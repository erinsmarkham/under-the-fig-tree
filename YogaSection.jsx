// Sections — Yoga, Sound, Blog, About, Shop

const Eyebrow = ({ children }) => <div className="eyebrow">{children}</div>;

// =========================================================
// YOGA — most developed section
// =========================================================
const YogaSection = ({ accent }) => {
  const [activeClass, setActiveClass] = React.useState(0);
  const [filter, setFilter] = React.useState("all");

  const classes = [
    {
      day: "MON", date: "06", time: "07:00", duration: "75 min",
      name: "Slow Flow & Breath", level: "All Levels", style: "Hatha", spots: 4, total: 12,
      location: "Studio · Maple Room",
    },
    {
      day: "TUE", date: "07", time: "18:30", duration: "60 min",
      name: "Vinyasa Vespers", level: "Intermediate", style: "Vinyasa", spots: 2, total: 10,
      location: "Studio · Maple Room",
    },
    {
      day: "WED", date: "08", time: "09:00", duration: "90 min",
      name: "Restorative & Yin", level: "All Levels", style: "Yin", spots: 7, total: 12,
      location: "Garden Studio",
    },
    {
      day: "THU", date: "09", time: "18:00", duration: "75 min",
      name: "Strong Slow Flow", level: "Intermediate", style: "Vinyasa", spots: 0, total: 10,
      location: "Studio · Maple Room",
    },
    {
      day: "FRI", date: "10", time: "07:00", duration: "60 min",
      name: "Morning Awakening", level: "All Levels", style: "Hatha", spots: 5, total: 12,
      location: "Studio · Maple Room",
    },
    {
      day: "SAT", date: "11", time: "10:00", duration: "120 min",
      name: "Sound + Yin Journey", level: "All Levels", style: "Yin + Sound", spots: 3, total: 14,
      location: "Garden Studio",
    },
    {
      day: "SUN", date: "12", time: "16:00", duration: "75 min",
      name: "New Moon Practice", level: "All Levels", style: "Ritual", spots: 6, total: 12,
      location: "Garden Studio",
    },
  ];

  const filtered = filter === "all" ? classes : classes.filter(c => c.style.toLowerCase().includes(filter));

  return (
    <div className="content-page" style={{ background: "var(--paper)", color: "var(--ink)" }}>
      {/* Hero strip */}
      <div style={{ padding: "60px 48px 40px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 40 }}>
          <div>
            <Eyebrow>·  Practice  ·  Breath  ·  Body  ·</Eyebrow>
            <h2 className="section-title" style={{ marginTop: 14 }}>Yoga</h2>
            <div className="script" style={{ fontSize: 56, marginTop: -16, marginLeft: 12, color: accent }}>
              ~ a return to softness
            </div>
          </div>
          <div style={{ textAlign: "right", maxWidth: 380 }}>
            <p className="editorial" style={{ fontSize: 19, lineHeight: 1.55 }}>
              Slow, breath-led practices for the days you need to come home to yourself. Group classes, private sessions, and seasonal retreats — held in a small studio, with room to land.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 22, justifyContent: "flex-end" }}>
              <button className="btn solid">Book a class</button>
              <button className="btn">Private session</button>
            </div>
          </div>
        </div>
      </div>

      {/* Three pillars */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: "1px solid var(--rule)" }}>
        {[
          { num: "I", name: "Group Classes", body: "Small, weekly drop-in classes in slow flow, vinyasa, and yin. Mats provided. Tea after." },
          { num: "II", name: "Private Practice", body: "One-to-one sessions designed around what your body is asking for. In studio or in your home." },
          { num: "III", name: "Seasonal Retreats", body: "Day retreats and weekend gatherings that braid yoga, sound, and rest. Limited to twelve souls." },
        ].map((p, i) => (
          <div key={i} style={{
            padding: "60px 36px",
            borderRight: i < 2 ? "1px solid var(--rule)" : "none",
          }}>
            <div className="display" style={{ fontSize: 14, opacity: 0.5, marginBottom: 24 }}>{p.num}</div>
            <h3 className="display" style={{ fontSize: 22, fontWeight: 400, marginBottom: 16 }}>{p.name}</h3>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-soft)" }}>{p.body}</p>
            <div style={{ marginTop: 24, fontSize: 14, fontStyle: "italic", color: accent, cursor: "pointer" }}>
              learn more →
            </div>
          </div>
        ))}
      </div>

      {/* Featured photo + quote */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", padding: "120px 48px", gap: 60, alignItems: "center" }}>
        <div className="img-ph" style={{ aspectRatio: "4/5", maxHeight: 640 }}>
          <div style={{ textAlign: "center" }}>
            <div className="ph-tag">photograph</div>
            <div className="ph-tag" style={{ marginTop: 6, opacity: 0.4 }}>practice / studio · b&amp;w preferred</div>
          </div>
        </div>
        <div>
          <Eyebrow>A note from the practice</Eyebrow>
          <p className="editorial" style={{ fontSize: 32, lineHeight: 1.35, marginTop: 22 }}>
            "We don't come to the mat to fix ourselves. We come to remember we were never broken."
          </p>
          <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 36, height: 1, background: "var(--ink)", opacity: 0.4 }}></div>
            <div className="display" style={{ fontSize: 11 }}>From the welcome letter</div>
          </div>
          <div style={{ marginTop: 60 }}>
            <Divider color="var(--ink)" width={120}/>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div style={{ padding: "100px 48px", background: "var(--cream)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", marginBottom: 40, gap: 30 }}>
          <div>
            <Eyebrow>This week · May 2026</Eyebrow>
            <h3 className="display" style={{ fontSize: 56, fontWeight: 300, letterSpacing: "0.04em", marginTop: 8 }}>
              The week ahead
            </h3>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { id: "all", label: "All" },
              { id: "vinyasa", label: "Vinyasa" },
              { id: "yin", label: "Yin" },
              { id: "hatha", label: "Hatha" },
              { id: "sound", label: "Sound" },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className="display"
                style={{
                  padding: "8px 16px",
                  fontSize: 11,
                  letterSpacing: "0.32em",
                  border: "1px solid var(--ink)",
                  background: filter === f.id ? "var(--ink)" : "transparent",
                  color: filter === f.id ? "var(--cream)" : "var(--ink)",
                  borderRadius: 999,
                  cursor: "pointer",
                  fontFamily: "Cinzel, serif",
                  textTransform: "uppercase",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {filtered.map((c, i) => {
            const sold = c.spots === 0;
            const fewLeft = c.spots > 0 && c.spots <= 3;
            return (
              <div
                key={i}
                onMouseEnter={() => setActiveClass(i)}
                onClick={() => !sold && setActiveClass(i)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr 200px 200px 160px",
                  alignItems: "center",
                  padding: "28px 0",
                  borderBottom: "1px solid var(--rule)",
                  cursor: sold ? "default" : "pointer",
                  opacity: sold ? 0.55 : 1,
                  transition: "background 220ms",
                  background: activeClass === i ? "rgba(61, 74, 53, 0.04)" : "transparent",
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <div>
                  <div className="display" style={{ fontSize: 12, opacity: 0.6 }}>{c.day}</div>
                  <div className="display" style={{ fontSize: 38, fontWeight: 300, marginTop: 4 }}>{c.date}</div>
                </div>
                <div>
                  <div className="display" style={{ fontSize: 22, fontWeight: 400, marginBottom: 6 }}>{c.name}</div>
                  <div style={{ fontSize: 15, fontStyle: "italic", color: "var(--ink-soft)" }}>{c.location}</div>
                </div>
                <div className="display" style={{ fontSize: 11, opacity: 0.7 }}>
                  {c.time} · {c.duration}
                </div>
                <div className="display" style={{ fontSize: 11, opacity: 0.7 }}>
                  {c.style} · {c.level}
                </div>
                <div style={{ textAlign: "right" }}>
                  {sold ? (
                    <span className="display" style={{ fontSize: 11, color: accent }}>Waitlist</span>
                  ) : fewLeft ? (
                    <span className="display" style={{ fontSize: 11, color: accent }}>{c.spots} left · Reserve</span>
                  ) : (
                    <span className="display" style={{ fontSize: 11 }}>{c.spots}/{c.total} · Reserve →</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontStyle: "italic", color: "var(--ink-soft)" }}>
            Drop-in $24 · Class pack of 5 — $105 · Monthly unlimited — $160
          </p>
          <button className="btn">View full calendar</button>
        </div>
      </div>

      {/* Retreat callout */}
      <div style={{ position: "relative", padding: "140px 48px", background: "var(--forest-deep)", color: "var(--cream)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", opacity: 0.18, pointerEvents: "none" }}>
          <FigTreeSilhouette color="var(--cream)" opacity={0.6} />
        </div>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div className="script" style={{ fontSize: 56, color: accent, marginBottom: 0 }}>
            an invitation
          </div>
          <h3 className="display" style={{ fontSize: 72, fontWeight: 300, lineHeight: 1, margin: "8px 0 28px" }}>
            Solstice Retreat
          </h3>
          <p className="editorial" style={{ fontSize: 22, lineHeight: 1.5, opacity: 0.92 }}>
            Three days under the figs. Yoga at first light, sound at dusk, long meals, longer silences. Late June, twelve seats only.
          </p>
          <div style={{ marginTop: 36 }}>
            <button className="btn mauve">Reserve a seat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { YogaSection });
