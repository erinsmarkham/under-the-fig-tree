// Sound, Blog, About, Shop pages

const SoundPage = ({ onNavigate }) => {
  const journeys = [
    { name: "New Moon Sound Journey", date: "Sun May 12 · 5:00 PM", duration: "75 min", desc: "A 75-minute lying-down journey with crystal singing bowls, chimes, and a Paiste gong. We arrive together, lie down, and let the bowls do the work." },
    { name: "Full Moon Release", date: "Sun May 26 · 7:30 PM", duration: "90 min", desc: "Begins with intention-setting and a slow, supported restorative shape. Closes with sound — long bowl tones, gong swells, and silence." },
    { name: "Solstice Ceremony", date: "Sat Jun 21 · 6:00 PM", duration: "120 min", desc: "Twice-yearly. Slow movement, breath, sound, and a small ritual. Limited to 14 souls." },
  ];

  return (
    <div className="content-page">
      <section className="grain" style={{ background: "linear-gradient(180deg, #2a2330 0%, #3d2e3a 100%)", color: "var(--cream)", padding: "100px 48px 120px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.18, display: "grid", placeItems: "center", zIndex: 0 }}>
          <SoundWaves />
        </div>
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>
          <div className="mono-tag" style={{ opacity: 0.6, marginBottom: 24 }}>SECTION 02 — VIBRATION</div>
          <h1 className="display" style={{ fontSize: "clamp(72px, 14vw, 220px)", fontWeight: 300, lineHeight: 0.92, marginBottom: 30 }}>
            Sound
          </h1>
          <p className="lede" style={{ color: "var(--cream)", margin: "0 auto", maxWidth: 660 }}>
            The body listens before the mind does. Sound bath is medicine for the nervous system — long tones, slow vibrations, and the simple, sacred act of being held.
          </p>
        </div>
      </section>

      <section className="section paper" style={{ padding: "100px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="eyebrow">— Instruments in the room —</div>
          <h2 className="section-title" style={{ fontSize: "clamp(40px, 5.5vw, 84px)", marginBottom: 50 }}>The Bowls</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { name: "Crystal Bowls", note: "C–B, 8 octaves", desc: "Pure-tone quartz." },
              { name: "Himalayan Bowls", note: "Hand-hammered", desc: "Earthier, warmer overtones." },
              { name: "Paiste Gong", note: "32\" symphonic", desc: "For the long releases." },
              { name: "Chimes & Bells", note: "Koshi, tingsha", desc: "Sparks of sweetness." },
            ].map((b, i) => (
              <div key={i} style={{ padding: "30px 24px", background: "var(--cream)", border: "1px solid var(--rule)" }}>
                <div className="display" style={{ fontSize: 18, marginBottom: 16 }}>{String(i+1).padStart(2,'0')}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 26, marginBottom: 8 }}>{b.name}</h3>
                <div className="mono-tag" style={{ opacity: 0.55, marginBottom: 12 }}>{b.note}</div>
                <p style={{ fontSize: 15, opacity: 0.8 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="eyebrow">— Upcoming journeys —</div>
          <h2 className="section-title" style={{ fontSize: "clamp(40px, 5.5vw, 84px)", marginBottom: 50 }}>Journeys</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "2px solid var(--ink)" }}>
            {journeys.map((j, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 200px", gap: 40, padding: "36px 0", borderBottom: "1px solid var(--rule)", alignItems: "center" }}>
                <div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontWeight: 300, fontSize: 30, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.05, marginBottom: 12 }}>{j.name}</h3>
                  <div className="mono-tag" style={{ opacity: 0.65 }}>{j.date} · {j.duration}</div>
                </div>
                <p style={{ fontSize: 17, lineHeight: 1.6, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", opacity: 0.88 }}>{j.desc}</p>
                <div style={{ textAlign: "right" }}>
                  <button className="btn solid">Reserve →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mauve-soft" style={{ padding: "120px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}><SunOrnament size={56} color="var(--forest-deep)" /></div>
          <div className="eyebrow">— Bring the bowls home —</div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 300, fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1, marginBottom: 24 }}>Sound Recordings</h2>
          <p className="lede" style={{ marginBottom: 30, margin: "0 auto 30px" }}>
            Studio-recorded sound bath sessions for sleep, study, anxiety, and the long afternoons. Available in the shop.
          </p>
          <button className="btn solid" onClick={() => onNavigate("shop")}>Visit the shop →</button>
        </div>
      </section>
    </div>
  );
};

const SoundWaves = () => (
  <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
    {[...Array(8)].map((_, i) => (
      <circle key={i} cx="600" cy="400" r={80 + i * 70} fill="none" stroke="#f3eee2" strokeWidth="0.8" opacity={0.7 - i * 0.07} />
    ))}
  </svg>
);

// ----------- BLOG -----------

const BlogPage = ({ onNavigate }) => {
  const posts = [
    { id: 1, title: "On the slowness of figs", date: "April 22, 2026", read: "6 min", category: "Field Notes", excerpt: "A fig tree teaches what nothing else can — that some kinds of sweetness only come from waiting through the long, quiet seasons of seeming-nothing." },
    { id: 2, title: "What the body knows about grief", date: "April 9, 2026", read: "9 min", category: "Practice", excerpt: "Grief lives in the hips, the throat, the small place behind the heart. Here's how I teach it gently — and what students have shown me back." },
    { id: 3, title: "Three songs my bowls keep singing", date: "March 30, 2026", read: "4 min", category: "Sound", excerpt: "Some tones return to me like old friends. A short note on the bowls I find myself playing again and again — and what I think they're saying." },
    { id: 4, title: "On rest, and the courage to do it", date: "March 14, 2026", read: "7 min", category: "Reflections", excerpt: "Real rest is harder than it sounds. It asks us to be unproductive in a culture that treats our worth as output. I'm still learning." },
    { id: 5, title: "Spring practice (an offering)", date: "March 1, 2026", read: "5 min", category: "Practice", excerpt: "A short sequence to thaw the long winter — moving low and slow, with three breaths held in every shape. Try it on a quiet morning." },
  ];

  return (
    <div className="content-page">
      <section style={{ background: "var(--cream)", padding: "60px 48px 80px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", textAlign: "center" }}>
          <div className="mono-tag" style={{ opacity: 0.65, marginBottom: 24 }}>SECTION 03 — REFLECTIONS</div>
          <h1 className="display" style={{ fontSize: "clamp(72px, 14vw, 220px)", fontWeight: 300, lineHeight: 0.92, marginBottom: 24 }}>
            The Journal
          </h1>
          <p className="lede" style={{ margin: "0 auto", textAlign: "center" }}>
            Slow writing on the body, the breath, the seasons, and the small unfoldings that make a life.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="section paper" style={{ padding: "80px 48px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "center", marginBottom: 80 }}>
            <div className="img-ph" style={{ aspectRatio: "4/5" }}>
              <div className="ph-tag">featured post<br/>4:5</div>
            </div>
            <div>
              <div className="mono-tag" style={{ opacity: 0.65, marginBottom: 16 }}>FEATURED · {posts[0].category}</div>
              <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 300, fontSize: "clamp(36px, 4.5vw, 64px)", letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1, marginBottom: 24 }}>
                {posts[0].title}
              </h2>
              <div style={{ display: "flex", gap: 18, marginBottom: 24, fontFamily: "'Italianno', cursive", fontSize: 22, opacity: 0.7 }}>
                <span>{posts[0].date}</span>
                <span>·</span>
                <span>{posts[0].read} read</span>
              </div>
              <p className="lede" style={{ marginBottom: 32, fontSize: 22 }}>{posts[0].excerpt}</p>
              <button className="btn solid">Read the post →</button>
            </div>
          </div>

          <Divider color="var(--ink)" width={300} />

          {/* Post list */}
          <div style={{ marginTop: 60 }}>
            <div style={{ display: "flex", gap: 20, marginBottom: 30, flexWrap: "wrap" }}>
              {["All", "Field Notes", "Practice", "Sound", "Reflections"].map(c => (
                <button key={c} style={{
                  background: c === "All" ? "var(--ink)" : "transparent",
                  color: c === "All" ? "var(--cream)" : "var(--ink)",
                  border: "1px solid var(--ink)",
                  padding: "8px 18px", borderRadius: 999,
                  fontFamily: "'Cinzel', serif", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase",
                  cursor: "pointer",
                }}>{c}</button>
              ))}
            </div>
            {posts.slice(1).map(p => (
              <div key={p.id} style={{
                display: "grid", gridTemplateColumns: "200px 160px 1fr 120px",
                gap: 32, padding: "32px 0", borderBottom: "1px solid var(--rule)",
                alignItems: "center", cursor: "pointer",
              }}>
                <div className="img-ph" style={{ aspectRatio: "4/3" }}>
                  <div className="ph-tag">post<br/>4:3</div>
                </div>
                <div>
                  <div className="mono-tag" style={{ opacity: 0.55, marginBottom: 6 }}>{p.category}</div>
                  <div className="mono-tag" style={{ opacity: 0.65 }}>{p.date}</div>
                  <div className="mono-tag" style={{ opacity: 0.55, marginTop: 4 }}>{p.read} read</div>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 32, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: 16, lineHeight: 1.55, opacity: 0.78 }}>{p.excerpt}</p>
                </div>
                <div style={{ textAlign: "right", fontSize: 24 }}>→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </div>
  );
};

const NewsletterBlock = () => {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  return (
    <section className="section forest grain" style={{ padding: "120px 48px", textAlign: "center" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 2, color: "var(--cream)" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}><LeafGlyph size={32} color="#f3eee2" /></div>
        <div className="eyebrow" style={{ color: "var(--mauve)", opacity: 1, marginBottom: 16 }}>— A slow newsletter —</div>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontWeight: 300, fontSize: "clamp(34px, 4.5vw, 56px)", letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1, marginBottom: 20 }}>Letters from<br/>the fig tree</h2>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 19, lineHeight: 1.55, marginBottom: 32, opacity: 0.9 }}>
          Once a month, a small letter — practices, playlists, and the occasional poem.<br/>No noise. No urgency. Unsubscribe whenever you like.
        </p>
        {!done ? (
          <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} style={{ display: "flex", gap: 0, maxWidth: 460, margin: "0 auto", borderBottom: "1px solid var(--cream)" }}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your email"
              style={{ flex: 1, background: "transparent", border: "none", padding: "14px 4px", color: "var(--cream)", fontFamily: "inherit", fontSize: 17, outline: "none" }} />
            <button type="submit" style={{ background: "transparent", border: "none", color: "var(--cream)", fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase", padding: "14px 4px", cursor: "pointer" }}>Subscribe →</button>
          </form>
        ) : (
          <div style={{ fontFamily: "'Italianno', cursive", fontSize: 36, color: "var(--mauve)" }}>thank you — see you soon ✦</div>
        )}
      </div>
    </section>
  );
};

// ----------- ABOUT -----------

const AboutPage = ({ onNavigate }) => {
  return (
    <div className="content-page">
      <section className="section paper" style={{ padding: "60px 48px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="mono-tag" style={{ opacity: 0.65, marginBottom: 24 }}>SECTION 04 — THE TEACHER</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end" }}>
            <h1 style={{ fontFamily: "'Cinzel', serif", fontWeight: 300, fontSize: "clamp(60px, 10vw, 160px)", letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 0.9 }}>
              About<br/><em style={{ fontFamily: "'Italianno', cursive", textTransform: "none", letterSpacing: 0, fontSize: "1em", fontStyle: "normal" }}>Erin</em>
            </h1>
            <p className="lede">
              Yoga teacher (E-RYT 500), sound practitioner, gardener of slow gardens. Lover of the long pause and the second cup of tea.
            </p>
          </div>
        </div>
      </section>

      <section className="section cream" style={{ padding: "80px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60 }}>
          <div>
            <div className="img-ph" style={{ aspectRatio: "3/4", marginBottom: 18 }}>
              <div className="ph-tag">portrait<br/>3:4</div>
            </div>
            <div className="img-ph" style={{ aspectRatio: "1/1" }}>
              <div className="ph-tag">studio<br/>candid</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, lineHeight: 1.6, fontStyle: "italic" }}>
              I came to yoga the way most people do — looking for something. I stayed because I was found.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              Under the Fig Tree began in my grandmother's backyard in late summer of 2024, the season the fig tree gave more fruit than we could eat. I had been teaching out of borrowed rooms for years, and that summer, with sticky hands and a notebook, the shape of this place finally arrived.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              My background is in slow flow, restorative, and yin — a lineage that owes quiet debts to Bernie Clark, Judith Hanson Lasater, and the long line of teachers who have insisted that the body is not a thing to be improved.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
              I came to sound a few years later, by accident, in a workshop I was meant to be teaching. The bowls undid me kindly. I trained with the Sound Healing Academy and have been studying with crystal bowls and gong ever since.
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, lineHeight: 1.6, fontStyle: "italic", paddingTop: 12, borderTop: "1px solid var(--rule)" }}>
              I believe in soft practices, real friendship, and the medicine of slowness. I'd love to share a class with you.
            </p>
            <div className="script" style={{ fontSize: 60, color: "var(--mauve-deep)", marginTop: 8 }}>— Erin</div>
          </div>
        </div>
      </section>

      <section className="section paper" style={{ padding: "100px 48px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div className="eyebrow">— Trainings & Lineage —</div>
          <h2 className="section-title" style={{ fontSize: "clamp(36px, 4.5vw, 64px)", marginBottom: 40 }}>Studies</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {[
              { year: "2019", item: "RYT-200, Yoga Tree (San Francisco)" },
              { year: "2021", item: "RYT-500 — Restorative & Yin specialty" },
              { year: "2022", item: "Sound Healing Academy — Crystal Bowls Level 1 & 2" },
              { year: "2023", item: "Trauma-Informed Practice with Hala Khouri" },
              { year: "2024", item: "Gong practitioner training (Don Conreaux lineage)" },
              { year: "Ongoing", item: "Continued study with Judith Hanson Lasater" },
            ].map((s, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 16, padding: "16px 0", borderBottom: "1px solid var(--rule)" }}>
                <div className="display" style={{ fontSize: 14, opacity: 0.6 }}>{s.year}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, fontStyle: "italic" }}>{s.item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ----------- SHOP -----------

const ShopPage = ({ onNavigate }) => {
  const products = [
    { id: 1, name: "New Moon Sound Bath", category: "Recording", price: "$18", duration: "42 min", desc: "Studio-recorded crystal bowl journey for slow evenings." },
    { id: 2, name: "The Rest Bundle", category: "Collection", price: "$48", duration: "3 recordings", desc: "Restorative class + sound bath + body scan for the long, hard weeks." },
    { id: 3, name: "Morning Slow Flow", category: "Recording", price: "$15", duration: "35 min", desc: "A 35-minute video class to begin gently. All levels." },
    { id: 4, name: "Breath Journeys", category: "Collection", price: "$32", duration: "4 sessions", desc: "Four guided breathwork practices for grief, anxiety, sleep, and clarity." },
    { id: 5, name: "Hand-poured ritual candle", category: "Object", price: "$28", duration: "60 hr burn", desc: "Beeswax, fig leaf, and cedar. Made in small batches with my mother." },
    { id: 6, name: "Field notes journal", category: "Object", price: "$22", duration: "120 pages", desc: "A small linen-bound notebook. Lined and unlined pages for class reflections." },
  ];
  const [filter, setFilter] = React.useState("All");
  const filtered = filter === "All" ? products : products.filter(p => p.category === filter);

  return (
    <div className="content-page">
      <section className="section mauve-soft" style={{ padding: "80px 48px 100px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="mono-tag" style={{ opacity: 0.65, marginBottom: 24 }}>SECTION 05 — OFFERINGS TO TAKE HOME</div>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 60, alignItems: "end" }}>
            <h1 className="display" style={{ fontSize: "clamp(72px, 14vw, 220px)", fontWeight: 300, lineHeight: 0.92 }}>
              The Shop
            </h1>
            <p className="lede">
              A small collection of recordings, journeys, and handmade objects — gathered slowly, made with care.
            </p>
          </div>
        </div>
      </section>

      <section className="section paper" style={{ padding: "60px 48px 100px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 14, marginBottom: 40, flexWrap: "wrap" }}>
            {["All", "Recording", "Collection", "Object"].map(c => (
              <button key={c} onClick={() => setFilter(c)} style={{
                background: filter === c ? "var(--ink)" : "transparent",
                color: filter === c ? "var(--cream)" : "var(--ink)",
                border: "1px solid var(--ink)",
                padding: "10px 22px", borderRadius: 999,
                fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase",
                cursor: "pointer", transition: "all 200ms",
              }}>{c}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {filtered.map(p => (
              <div key={p.id} style={{ cursor: "pointer" }}
                onMouseEnter={(e) => { const ph = e.currentTarget.querySelector(".ph-img"); if (ph) ph.style.transform = "scale(1.03)"; }}
                onMouseLeave={(e) => { const ph = e.currentTarget.querySelector(".ph-img"); if (ph) ph.style.transform = "scale(1)"; }}
              >
                <div className="img-ph ph-img" style={{ aspectRatio: "4/5", marginBottom: 18, transition: "transform 380ms" }}>
                  <div className="ph-tag">product {p.id}<br/>4:5</div>
                </div>
                <div className="mono-tag" style={{ opacity: 0.55, marginBottom: 6 }}>{p.category} · {p.duration}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 26, marginBottom: 8 }}>{p.name}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, opacity: 0.78, marginBottom: 14 }}>{p.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--rule)", paddingTop: 14 }}>
                  <span className="display" style={{ fontSize: 18 }}>{p.price}</span>
                  <span className="mono-tag">add to cart →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section forest grain" style={{ padding: "100px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", color: "var(--cream)", position: "relative", zIndex: 2 }}>
          <Divider color="#f3eee2" width={240} />
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 24, lineHeight: 1.5, margin: "30px 0" }}>
            "Every recording was made on a quiet morning, with intention.<br/>I hope it finds you when you need it."
          </p>
          <div className="script" style={{ fontSize: 36, color: "var(--mauve)" }}>— Erin</div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { SoundPage, BlogPage, AboutPage, ShopPage });
