"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ backgroundColor: "var(--midnight)", color: "var(--petal)" }}>
      <a
        href="#main"
        style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}
        onFocus={(e) => { Object.assign(e.currentTarget.style, { left: "16px", top: "16px", width: "auto", height: "auto", padding: "8px 16px", backgroundColor: "var(--rose)", color: "#fff", zIndex: "9999", borderRadius: "4px" }); }}
        onBlur={(e) => { Object.assign(e.currentTarget.style, { left: "-9999px", width: "1px", height: "1px" }); }}
      >
        Skip to main content
      </a>

      <header style={{ position: "sticky", top: 0, backgroundColor: "var(--midnight)", borderBottom: "1px solid rgba(240, 232, 236, 0.1)", zIndex: 100 }}>
        <nav style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }} aria-label="Main navigation">
          <a href="#" style={{ fontFamily: "var(--font-dm-serif)", fontSize: "20px", color: "var(--petal)", textDecoration: "none" }}>
            Firework<span style={{ color: "var(--rose)" }}>.</span>
          </a>
          <ul style={{ display: "flex", gap: "36px", listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">
            {["About", "Services", "Work", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} style={{ fontSize: "15px", color: "var(--dusk)", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--rose)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dusk)")}>{item}</a>
              </li>
            ))}
          </ul>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation menu"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "var(--petal)" }} className="mobile-menu-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </nav>
        {menuOpen && (
          <div style={{ backgroundColor: "var(--midnight)", borderTop: "1px solid rgba(240, 232, 236, 0.1)", padding: "16px 24px 24px" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {["About", "Services", "Work", "Contact"].map((item) => (
                <li key={item}><a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{ fontSize: "18px", color: "var(--petal)", textDecoration: "none" }}>{item}</a></li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main id="main">

        {/* Hero & About */}
        <section id="about" className="hero" style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 24px 80px" }}>
          <p style={{ fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "20px", fontWeight: 500 }}>Firework Development</p>
          <h1 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(42px, 7vw, 84px)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "16px", color: "var(--petal)" }}>
            Kirsten Andersen Morris
          </h1>
          <p style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2, color: "var(--rose)", marginBottom: "36px" }}>
            UI/UX design and development
          </p>
          <div style={{ maxWidth: "620px" }}>
            <p style={{ fontSize: "18px", lineHeight: 1.7, marginBottom: "16px", color: "var(--dusk)" }}>
              I design and build web and mobile apps for startups and businesses — from user flows and wireframes to front-end code.
            </p>
            <p style={{ fontSize: "18px", lineHeight: 1.7, marginBottom: "36px", color: "var(--dusk)" }}>
              With a master&apos;s in technical communication, I build clarity and accessibility into every interface, informed by usability testing. I&apos;m easy to work with, ask good questions, and take feedback well.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 48px", marginBottom: "40px" }}>
            <div>
              <p style={{ fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--rose)", fontWeight: 500, marginBottom: "10px" }}>Design</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Miro", "Figma", "User flows", "Wireframing", "Accessibility", "Responsive UI"].map((tag) => (
                  <span key={tag} style={{ fontSize: "13px", padding: "4px 12px", backgroundColor: "var(--deep)", borderRadius: "100px", color: "var(--dusk)", fontWeight: 500 }}>{tag}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--rose)", fontWeight: 500, marginBottom: "10px" }}>Development</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Next.js", "TypeScript", "React", "Python", "Django", "Supabase", "PostgreSQL", "Node.js", "AWS S3"].map((tag) => (
                  <span key={tag} style={{ fontSize: "13px", padding: "4px 12px", backgroundColor: "var(--deep)", borderRadius: "100px", color: "var(--dusk)", fontWeight: 500 }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#contact" style={{ display: "inline-block", backgroundColor: "var(--rose)", color: "#fff", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(196, 96, 126, 0.85)")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--rose)")}>
              Let&apos;s build something together
            </a>
            <a href="#work" style={{ display: "inline-block", color: "var(--petal)", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", fontSize: "15px", fontWeight: 500, border: "1px solid rgba(240, 232, 236, 0.1)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(240, 232, 236, 0.25)")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(240, 232, 236, 0.1)")}>
              See my work
            </a>
          </div>
        </section>

        {/* Services */}
        <section id="services" style={{ backgroundColor: "var(--deep)", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rose)", fontWeight: 500, marginBottom: "16px" }}>Services</p>
            <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "56px", maxWidth: "480px", color: "var(--petal)" }}>
              What I can build with you
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }} className="three-col">
              {[
                { number: "01", title: "UX & Interface Design", body: "User flows, wireframes, and interface design — from early discovery in Miro through usable, accessible interfaces. I refine designs in code, which lets me iterate quickly on real interactions and responsive behavior." },
                { number: "02", title: "Web & Mobile Development", body: "Full-stack development for web and mobile apps — from greenfield builds to new features on existing products. I work in Next.js, Capacitor, Supabase, TypeScript, Python, and Django." },
                { number: "03", title: "Startup MVP Design & Build", body: "Early-stage founder with an idea and no technical co-founder? I can help you scope, design, build, and ship your MVP without the overhead of an agency." },
              ].map((service) => (
                <div key={service.number} style={{ backgroundColor: "var(--midnight)", borderRadius: "12px", padding: "32px" }}>
                  <p style={{ fontSize: "13px", color: "var(--rose)", fontWeight: 500, marginBottom: "16px" }}>{service.number}</p>
                  <h3 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "22px", lineHeight: 1.3, marginBottom: "16px", color: "var(--petal)" }}>{service.title}</h3>
                  <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--dusk)" }}>{service.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
          <p style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rose)", fontWeight: 500, marginBottom: "16px" }}>Work</p>
          <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "56px", color: "var(--petal)" }}>Projects</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {[
              { client: "Bream", role: "UI/UX Design & Full-Stack Engineering", stack: ["Next.js", "Capacitor", "C#", "SQL", "Figma"], description: "Contractor on the engineering team at Bream, a private community platform where women 50+ find friendship through pods, affinity groups, and shared experiences. I've helped design and build across the Next.js/Capacitor client and C# API — including a more engaging member dashboard landing page (in collaboration with our PM), an incentive referral feature, a tagging system, and an updated profile page.", link: "https://www.hellobream.com/", imageGroups: [
                { label: "Before", images: [
                  { src: "/work/bream/dashboard-before.png", alt: "Bream member dashboard before redesign — sidebar navigation with feature cards", width: 670, height: 960 },
                ] },
                { label: "After", images: [
                  { src: "/work/bream/after-dashboard.png", alt: "Bream dashboard after redesign — referral invite, upcoming plans, and event tags", width: 324, height: 662 },
                  { src: "/work/bream/after-groups.png", alt: "Bream dashboard showing your groups and latest community activity", width: 322, height: 661 },
                  { src: "/work/bream/after-discovery.png", alt: "Bream dashboard showing group discovery, tagged perks, and member benefits", width: 323, height: 661 },
                ] },
              ] },
              { client: "hili", role: "Full-Stack Engineer", stack: ["Next.js", "TypeScript", "Supabase"], description: "Full-stack engineer at hili since September 2025 — architecture, feature development, infrastructure, and deployment. I implement UI in collaboration with a dedicated designer on an active consumer web application.", link: "https://app.gethili.com" },
              { client: "Daybreak Haunts", role: "UI/UX Design & Development", stack: ["Miro", "React", "Tailwind CSS", "GCP", "JustGiving API"], description: "Designed and built a donation-driven pass system for a community Halloween fundraiser. I owned the full UI/UX — from the donation landing page and digital pass experience to the interactive neighborhood map and business rewards flow. The campaign raised over $4,000 for the Utah Food Bank.", link: null, note: "Live for the Halloween fundraiser only — no longer viewable", images: [
                { src: "/work/daybreak-haunts/landing.png", alt: "Daybreak Haunts donation landing page with Utah Food Bank integration" },
                { src: "/work/daybreak-haunts/pass.png", alt: "Digital Haunts Pass showing business rewards and perks" },
                { src: "/work/daybreak-haunts/map.png", alt: "Interactive neighborhood map with legend and business locations" },
              ] },
              { client: "Magpie Zines", role: "UI/UX Design & Development", stack: ["Miro", "Python", "Django", "PostgreSQL"], description: "Designed and built a community-contributed catalog app for a tabletop roleplaying game. I designed the browse, filter, and submission workflows, then built the full stack — password-gated contributor forms, catalog filtering by category and type, and print-ready catalog cards.", link: "https://library.skoticus.com" },
              { client: "Gold Family Farms", role: "UI/UX Design & Development", stack: ["Miro", "Figma", "Python", "Django", "AWS S3", "Heroku"], description: "Designed and built gFix, a web app that replaced a paper-based equipment management system for a large plant nursery. I worked directly with the client to map field and workshop workflows, then designed the full UI — from ticket submission and mechanic assignment through inventory detail views and preventative maintenance scheduling.", link: null, note: "Internal application — owned by Gold Family Farms and not publicly viewable", imageGroups: [
                { images: [
                  { src: "/work/gfix/ticket-submit.png", alt: "gFix create ticket form for reporting equipment issues", caption: "Submit ticket", width: 498, height: 600 },
                  { src: "/work/gfix/ticket-list.png", alt: "gFix open tickets dashboard with assignment and filtering", caption: "Open tickets", width: 497, height: 939 },
                  { src: "/work/gfix/ticket-detail.png", alt: "gFix ticket detail view with repair assignment and photo upload", caption: "Ticket detail", width: 498, height: 931 },
                  { src: "/work/gfix/item-detail.png", alt: "gFix equipment inventory detail with gallery and history tabs", caption: "Item detail", width: 479, height: 520 },
                  { src: "/work/gfix/pm-list.png", alt: "gFix preventative maintenance schedule with time and usage triggers", caption: "PM schedule", width: 499, height: 716 },
                ] },
              ] },
            ].map((project, i) => (
              <div key={i} style={{ padding: "32px 0", borderTop: "1px solid rgba(240, 232, 236, 0.1)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", alignItems: "start" }} className="work-row">
                <div>
                  <h3 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "24px", marginBottom: "4px", color: "var(--petal)" }}>{project.client}</h3>
                  <p style={{ fontSize: "14px", color: "var(--rose)", fontWeight: 500, marginBottom: "16px" }}>{project.role}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {project.stack.map((tag) => (
                      <span key={tag} style={{ fontSize: "12px", padding: "3px 10px", backgroundColor: "var(--deep)", borderRadius: "100px", color: "var(--dusk)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--dusk)", marginBottom: project.link || project.note || project.images || project.imageGroups ? "16px" : "0" }}>{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: "14px", color: "var(--rose)", fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: project.images || project.imageGroups ? "24px" : "0" }}>
                      View project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                    </a>
                  )}
                  {!project.link && project.note && (
                    <p style={{ fontSize: "14px", color: "var(--dusk)", fontWeight: 500, fontStyle: "italic", marginBottom: project.images || project.imageGroups ? "24px" : "0" }}>{project.note}</p>
                  )}
                  {project.imageGroups && (
                    <div className="screenshot-showcase">
                      {project.imageGroups.map((group, gi) => (
                        <div key={"label" in group && group.label ? group.label : `group-${gi}`} className="screenshot-group">
                          {"label" in group && group.label && <p className="screenshot-group-label">{group.label}</p>}
                          <div className={`screenshot-grid screenshot-grid-${group.images.length}`}>
                            {group.images.map((img) => (
                              <figure key={img.src} className="screenshot-card">
                                <div className="screenshot-frame">
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={img.width}
                                    height={img.height}
                                    unoptimized
                                    style={{ width: "100%", height: "auto", display: "block" }}
                                  />
                                </div>
                                {"caption" in img && img.caption && (
                                  <figcaption className="screenshot-caption">{img.caption}</figcaption>
                                )}
                              </figure>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {project.images && !project.imageGroups && (
                    <div className="screenshot-showcase">
                      <div className={`screenshot-grid screenshot-grid-${project.images.length}`}>
                        {project.images.map((img) => (
                          <figure key={img.src} className="screenshot-card">
                            <div className="screenshot-frame">
                              <Image
                                src={img.src}
                                alt={img.alt}
                                width={"width" in img && typeof img.width === "number" ? img.width : 390}
                                height={"height" in img && typeof img.height === "number" ? img.height : 844}
                                unoptimized
                                style={{ width: "100%", height: "auto", display: "block" }}
                              />
                            </div>
                          </figure>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(240, 232, 236, 0.1)" }} />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ backgroundColor: "var(--deep)", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="two-col">
            <div>
              <p style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rose)", fontWeight: 500, marginBottom: "16px" }}>Contact</p>
              <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--petal)", marginBottom: "24px" }}>
                Let&apos;s build something together
              </h2>
              <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--dusk)" }}>
                I&apos;m currently taking on new clients. If you have a project in mind — or just want to talk through an idea — I&apos;d love to hear from you.
              </p>
            </div>
            <div>
              <a href="mailto:kirsten@fireworkdev.com"
                style={{ display: "inline-block", backgroundColor: "var(--rose)", color: "#fff", padding: "16px 32px", borderRadius: "6px", textDecoration: "none", fontSize: "16px", fontWeight: 500, marginBottom: "20px" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(196, 96, 126, 0.85)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--rose)")}>
                kirsten@fireworkdev.com
              </a>
              <p style={{ fontSize: "14px", color: "var(--dusk)" }}>Based in Iowa — working with clients everywhere.</p>
            </div>
          </div>
        </section>

      </main>

      <footer style={{ backgroundColor: "var(--deep)", borderTop: "1px solid rgba(240, 232, 236, 0.1)", padding: "24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "14px", color: "var(--dusk)" }}>© {new Date().getFullYear()} Firework Development, LLC</p>
          <p style={{ fontSize: "14px", color: "var(--dusk)" }}>Kirsten Andersen Morris</p>
        </div>
      </footer>

      <style>{`
        .screenshot-showcase { display: flex; flex-direction: column; gap: 28px; }
        .screenshot-group-label {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--rose);
          font-weight: 500;
          margin: 0 0 12px;
        }
        .screenshot-grid {
          display: grid;
          gap: 16px;
          align-items: start;
        }
        .screenshot-grid-1 { grid-template-columns: minmax(0, 200px); }
        .screenshot-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .screenshot-grid-5 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .screenshot-card { margin: 0; }
        .screenshot-frame {
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(240, 232, 236, 0.1);
          background: rgba(240, 232, 236, 0.03);
        }
        .screenshot-caption {
          margin: 8px 0 0;
          font-size: 12px;
          line-height: 1.4;
          color: var(--dusk);
          text-align: center;
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .hero { padding: 80px 24px 64px !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .work-row { grid-template-columns: 1fr !important; gap: 16px !important; }
          .screenshot-grid-1 { grid-template-columns: 1fr; max-width: 240px; }
          .screenshot-grid-3 { grid-template-columns: 1fr; max-width: 240px; }
          .screenshot-grid-5 { grid-template-columns: 1fr; max-width: 240px; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .screenshot-grid-5 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </div>
  );
}
