// Yoga page — most-developed section
const InstagramGlyph = ({ size = 22, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
       aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill={color} stroke="none" />
  </svg>
);

const YogaPage = ({ onNavigate }) => {
  const [filter, setFilter] = React.useState("all");
  const [selectedClass, setSelectedClass] = React.useState(null);

  const classes = [
    { id: 1, day: "Mon", date: "May 5", time: "7:00 AM", duration: "60 min", title: "Slow Flow & Sunrise", style: "slow flow", level: "All levels", spots: 4, total: 12, location: "The Garden Studio", price: "$22" },
    { id: 2, day: "Mon", date: "May 5", time: "6:00 PM", duration: "75 min", title: "Restorative", style: "restorative", level: "Beginner welcome", spots: 6, total: 10, location: "The Garden Studio", price: "$25" },
    { id: 3, day: "Tue", date: "May 6", time: "7:00 AM", duration: "60 min", title: "Slow Flow & Sunrise", style: "slow flow", level: "All levels", spots: 0, total: 12, location: "The Garden Studio", price: "$22" },
    { id: 4, day: "Wed", date: "May 7", time: "9:30 AM", duration: "75 min", title: "Yin & Long Holds", style: "yin", level: "All levels", spots: 8, total: 12, location: "The Garden Studio", price: "$25" },
    { id: 5, day: "Thu", date: "May 8", time: "6:30 PM", duration: "90 min", title: "Restorative + Sound Bath", style: "restorative", level: "All levels", spots: 0, total: 12, location: "The Fig Room", price: "$38" },
    { id: 6, day: "Fri", date: "May 9", time: "7:00 AM", duration: "60 min", title: "Slow Flow & Sunrise", style: "slow flow", level: "All levels", spots: 5, total: 12, location: "The Garden Studio", price: "$22" },
    { id: 7, day: "Sat", date: "May 10", time: "9:30 AM", duration: "90 min", title: "Saturday Morning Practice", style: "slow flow", level: "All levels", spots: 8, total: 14, location: "The Garden Studio", price: "$28" },
    { id: 8, day: "Sun", date: "May 11", time: "5:00 PM", duration: "75 min", title: "Yin & Reflection", style: "yin", level: "All levels", spots: 9, total: 12, location: "The Fig Room", price: "$25" },
  ];

  const filtered = filter === "all" ? classes : classes.filter(c => c.style === filter);

  return (
    <div className="content-page">
      {/* Header band */}
      <section style={{ background: "var(--forest-deep)", color: "var(--cream)", padding: "80px 48px 100px", position: "relative", overflow: "hidden" }} className="grain">
        <div style={{ position: "absolute", right: -120, top: -40, opacity: 0.18, width: 540, height: 620, zIndex: 0 }}>
          <FigTreeSilhouette color="#f3eee2" opacity={0.7} />
        </div>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <a
            href="https://www.instagram.com/yogainyosemite/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow @yogainyosemite on Instagram"
            style={{
              position: "absolute", top: 0, right: 0,
              color: "var(--cream)", opacity: 0.75,
              transition: "opacity 220ms",
              display: "inline-flex", padding: 8,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.75; }}
          >
            <InstagramGlyph size={22} />
          </a>
          <div className="mono-tag" style={{ opacity: 0.65, marginBottom: 24 }}>SECTION 01 — MOVEMENT</div>
          <h1 className="display" style={{ fontSize: "clamp(72px, 14vw, 220px)", fontWeight: 300, lineHeight: 0.92, marginBottom: 30 }}>
            Yoga
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginTop: 40 }}>
            <p className="lede" style={{ color: "var(--cream)", opacity: 0.92 }}>
              A slow, breath-led practice. We move like honey — unhurried, attentive, and kind to the body that carries us.
            </p>
            <div style={{ display: "flex", gap: 36, justifyContent: "flex-end", alignItems: "end" }}>
              <Stat label="Weekly classes" value="8" />
              <Stat label="Average size" value="10" />
              <Stat label="Years teaching" value="07" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy block */}
      <section className="section cream" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 80, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 120 }}>
            <div className="eyebrow">— A practice of —</div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 300, fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 0.95, marginBottom: 24 }}>
              Coming<br/>
              <em style={{ fontFamily: "'Italianno', cursive", textTransform: "none", letterSpacing: 0, fontSize: "1.3em", fontStyle: "normal" }}>home</em><br/>
              to the body
            </h2>
            <Divider color="var(--ink)" width={200} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {[
              { num: "I.", title: "Breath as the doorway", body: "Every class begins where the breath does. We arrive slowly, by listening — not by force. The breath is the slowest part of you, and it knows the way." },
              { num: "II.", title: "Movement as conversation", body: "We move with the body, not at it. Asana here is curious and soft-edged. There is no posture you must achieve, only a body to listen to." },
              { num: "III.", title: "Stillness as homecoming", body: "We end on the floor, often in silence. Sometimes with sound, sometimes with breath. Always with the felt sense that you have returned to yourself." },
            ].map((p, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 24, paddingBottom: 36, borderBottom: i < 2 ? "1px solid var(--rule)" : "none" }}>
                <div className="display" style={{ fontSize: 28, opacity: 0.5, paddingTop: 4 }}>{p.num}</div>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 30, marginBottom: 12 }}>{p.title}</h3>
                  <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.85 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class types */}
      <section className="section paper" style={{ padding: "100px 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="eyebrow" style={{ textAlign: "center" }}>— Three rooms, three weathers —</div>
          <h2 className="section-title" style={{ textAlign: "center", fontSize: "clamp(40px, 5.5vw, 84px)", marginBottom: 60 }}>Class Styles</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {[
              { name: "Slow Flow", greek: "Ι", desc: "A gentle, breath-paced flow. Standing shapes, twists, and grounding closes — like a long walk through familiar woods.", duration: "60 min", best: "Mornings · all levels" },
              { name: "Restorative", greek: "ΙΙ", desc: "Held shapes, supported by bolsters and blankets. The body softens. The mind, eventually, follows. Often paired with sound.", duration: "75–90 min", best: "Evenings · everyone" },
              { name: "Yin", greek: "ΙΙΙ", desc: "Long, quiet holds (3–7 minutes) into the connective tissue. A practice of patience, not flexibility. Bring something to journal in.", duration: "75 min", best: "Mid-week resets" },
            ].map((s, i) => (
              <div key={i} style={{ background: "var(--cream)", padding: "44px 36px", border: "1px solid var(--rule)", position: "relative", minHeight: 380 }}>
                <div className="display" style={{ position: "absolute", top: 24, right: 30, fontSize: 38, opacity: 0.3, fontWeight: 300 }}>{s.greek}</div>
                <div style={{ marginBottom: 28 }}><LeafGlyph size={36} color="var(--forest-deep)" /></div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontWeight: 300, fontSize: 36, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>{s.name}</h3>
                <p style={{ fontSize: 17, lineHeight: 1.6, marginBottom: 28, opacity: 0.85 }}>{s.desc}</p>
                <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 16, display: "flex", justifyContent: "space-between" }}>
                  <div className="mono-tag" style={{ opacity: 0.7 }}>{s.duration}</div>
                  <div className="mono-tag" style={{ opacity: 0.7 }}>{s.best}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule (full) */}
      <section className="section cream" style={{ padding: "120px 48px" }} id="schedule">
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 30 }}>
            <div>
              <div className="eyebrow">— Week of May 5 —</div>
              <h2 className="section-title" style={{ fontSize: "clamp(44px, 6vw, 92px)" }}>Schedule</h2>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span className="mono-tag" style={{ opacity: 0.6, marginRight: 8 }}>filter</span>
              {[
                { k: "all", l: "All" },
                { k: "slow flow", l: "Slow Flow" },
                { k: "restorative", l: "Restorative" },
                { k: "yin", l: "Yin" },
              ].map(f => (
                <button key={f.k}
                  onClick={() => setFilter(f.k)}
                  style={{
                    background: filter === f.k ? "var(--ink)" : "transparent",
                    color: filter === f.k ? "var(--cream)" : "var(--ink)",
                    border: "1px solid var(--ink)",
                    padding: "10px 18px",
                    fontFamily: "'Cinzel', serif",
                    fontSize: 10,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    borderRadius: 999,
                    transition: "all 200ms",
                  }}>
                  {f.l}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule list */}
          <div style={{ borderTop: "2px solid var(--ink)" }}>
            {filtered.map((c, i) => (
              <div key={c.id}
                onClick={() => setSelectedClass(c)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(80px, 110px) minmax(80px, 110px) 1fr minmax(110px, 140px) minmax(100px, 130px)",
                  alignItems: "center",
                  padding: "26px 4px",
                  borderBottom: "1px solid var(--rule)",
                  gap: 20,
                  cursor: "pointer",
                  transition: "background 200ms",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(61,74,53,0.04)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                <div>
                  <div className="display" style={{ fontSize: 22, opacity: 0.75 }}>{c.day}</div>
                  <div className="mono-tag" style={{ opacity: 0.55, marginTop: 4 }}>{c.date}</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: "0.18em" }}>{c.time}</div>
                  <div className="mono-tag" style={{ opacity: 0.55, marginTop: 6 }}>{c.duration}</div>
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontStyle: "italic", marginBottom: 6, lineHeight: 1.2 }}>{c.title}</div>
                  <div className="mono-tag" style={{ opacity: 0.55 }}>{c.style} · {c.level} · {c.location}</div>
                </div>
                <div>
                  <SpotsBar spots={c.spots} total={c.total} />
                </div>
                <div style={{ textAlign: "right" }}>
                  <button className="btn" style={{ padding: "10px 18px", fontSize: 10 }} disabled={c.spots === 0}
                    onClick={(e) => { e.stopPropagation(); setSelectedClass(c); }}>
                    {c.spots === 0 ? "Waitlist" : c.price}
                  </button>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div style={{ padding: 60, textAlign: "center", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 22, opacity: 0.6 }}>No classes match — try a different filter.</div>
            )}
          </div>

          <p style={{ marginTop: 30, fontSize: 16, fontStyle: "italic", opacity: 0.7, textAlign: "center" }}>
            Drop-in $22–28 · Class pack of 5 for $95 · Monthly unlimited $145
          </p>
        </div>
      </section>

      {/* Privates */}
      <section className="section mauve-soft" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div className="img-ph" style={{ aspectRatio: "4/5" }}>
            <div className="ph-tag">private session<br/>4:5</div>
          </div>
          <div>
            <div className="eyebrow">— By appointment —</div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 300, fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 0.95, marginBottom: 20 }}>
              Private<br/>practice
            </h2>
            <p className="lede" style={{ marginBottom: 24 }}>
              For when you want a practice shaped only to you — recovering from injury, returning after a long pause, preparing for birth, or simply going slow.
            </p>
            <p style={{ marginBottom: 32, fontSize: 17, opacity: 0.85, lineHeight: 1.6 }}>
              60 or 90 minute sessions, in-studio or in your home (within 15 minutes). First sessions are always a long, slow conversation.
            </p>
            <button className="btn solid">Inquire about a session →</button>
          </div>
        </div>
      </section>

      {/* Booking modal */}
      {selectedClass && <BookingModal cls={selectedClass} onClose={() => setSelectedClass(null)} />}
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div>
    <div className="display" style={{ fontSize: 48, fontWeight: 300, lineHeight: 1, color: "var(--mauve)" }}>{value}</div>
    <div className="mono-tag" style={{ opacity: 0.7, marginTop: 6 }}>{label}</div>
  </div>
);

const SpotsBar = ({ spots, total }) => {
  const pct = (spots / total) * 100;
  const isFull = spots === 0;
  return (
    <div>
      <div className="mono-tag" style={{ opacity: 0.7, marginBottom: 6, color: isFull ? "var(--mauve-deep)" : "inherit" }}>
        {isFull ? "Full" : `${spots} of ${total}`}
      </div>
      <div style={{ height: 3, background: "rgba(31,36,28,0.12)", overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: isFull ? "100%" : `${pct}%`,
          background: isFull ? "var(--mauve-deep)" : "var(--forest)",
          transition: "width 400ms",
        }}></div>
      </div>
    </div>
  );
};

const BookingModal = ({ cls, onClose }) => {
  const [step, setStep] = React.useState(1);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "rgba(31,36,28,0.6)", backdropFilter: "blur(4px)",
      zIndex: 200, display: "grid", placeItems: "center", padding: 30,
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: "var(--cream)", maxWidth: 540, width: "100%", padding: "48px 44px",
        position: "relative", borderRadius: 4,
      }}>
        <button onClick={onClose} style={{ position: "absolute", top: 18, right: 22, background: "none", border: "none", cursor: "pointer", fontSize: 22, opacity: 0.6 }}>×</button>

        {step === 1 && (
          <>
            <div className="eyebrow" style={{ marginBottom: 12 }}>— Reserve your spot —</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 36, marginBottom: 20 }}>{cls.title}</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28, padding: "20px 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
              <div><div className="mono-tag" style={{ opacity: 0.6 }}>When</div><div style={{ marginTop: 4, fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: "0.16em" }}>{cls.day} {cls.date} · {cls.time}</div></div>
              <div><div className="mono-tag" style={{ opacity: 0.6 }}>Duration</div><div style={{ marginTop: 4, fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: "0.16em" }}>{cls.duration}</div></div>
              <div><div className="mono-tag" style={{ opacity: 0.6 }}>Where</div><div style={{ marginTop: 4, fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: "0.16em" }}>{cls.location}</div></div>
              <div><div className="mono-tag" style={{ opacity: 0.6 }}>Drop-in</div><div style={{ marginTop: 4, fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: "0.16em" }}>{cls.price}</div></div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
                style={{ background: "transparent", border: "none", borderBottom: "1px solid var(--ink)", padding: "10px 0", fontSize: 18, fontFamily: "inherit", outline: "none", color: "var(--ink)" }} />
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email"
                style={{ background: "transparent", border: "none", borderBottom: "1px solid var(--ink)", padding: "10px 0", fontSize: 18, fontFamily: "inherit", outline: "none", color: "var(--ink)" }} />
            </div>
            <button className="btn solid" style={{ width: "100%", justifyContent: "center" }}
              onClick={() => name && email && setStep(2)}>
              Confirm reservation →
            </button>
          </>
        )}
        {step === 2 && (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}><SunOrnament size={64} color="var(--forest-deep)" /></div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>— Held —</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 36, marginBottom: 16 }}>You're on the mat.</h3>
            <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.85, marginBottom: 28 }}>
              A confirmation is on its way to <strong style={{ fontStyle: "italic" }}>{email}</strong>. Arrive 10 minutes early. Wear something soft.
            </p>
            <Divider color="var(--ink)" width={200} />
            <button className="btn" style={{ marginTop: 28 }} onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

Object.assign(window, { YogaPage });
