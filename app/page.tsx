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

        {/* Hero */}
        <section className="hero" style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 24px 80px", display: "grid", gridTemplateColumns: "1fr min(340px, 32%)", gap: "64px", alignItems: "center" }}>
          <div className="hero-content">
            <p style={{ fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rose)", marginBottom: "20px", fontWeight: 500 }}>Firework Development</p>
            <h1 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "28px", maxWidth: "800px", color: "var(--petal)" }}>
              Building software that works —{" "}<span style={{ color: "var(--rose)" }}>and feels human.</span>
            </h1>
            <p style={{ fontSize: "20px", lineHeight: 1.6, color: "var(--dusk)", maxWidth: "560px", marginBottom: "40px" }}>
              I help businesses build software that solves real problems, and founders bring their product ideas to life.
            </p>
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
          </div>
          <div className="hero-portrait">
            <Image
              src="/hero-portrait.png"
              alt="Watercolor portrait of Kirsten Andersen Morris"
              width={1024}
              height={1024}
              priority
              unoptimized
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </section>

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <hr style={{ border: "none", borderTop: "1px solid rgba(240, 232, 236, 0.1)" }} />
        </div>

        {/* About */}
        <section id="about" style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }} className="two-col">
          <div>
            <p style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--rose)", fontWeight: 500, marginBottom: "16px" }}>About</p>
            <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--petal)" }}>
              Kirsten Andersen Morris
            </h2>
          </div>
          <div style={{ paddingTop: "8px" }}>
            <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "20px", color: "var(--dusk)" }}>
              I&apos;m a full-stack engineer with a particular strength on the back end. I work through Firework Development, my independent software practice, where I partner with startups and businesses to build web apps and SaaS products that actually solve problems.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "20px", color: "var(--dusk)" }}>
              I hold a master&apos;s degree in technical communication, which means I think as much about clarity and usability as I do about clean code. I care deeply about accessibility — building software that works for everyone isn&apos;t a checkbox for me, it&apos;s a standard. I&apos;m a Certified Professional in Accessibility Core Competencies (CPACC) through IAAP.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--dusk)" }}>
              I&apos;m scrappy, optimistic, and easy to work with. I ask good questions, take feedback well, and I&apos;m always learning. If you&apos;ve worked with developers who were hard to reach or hard to understand, I&apos;m told I&apos;m a different experience.
            </p>
            <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Next.js", "TypeScript", "Python", "Django", "Supabase", "React", "PostgreSQL", "Node.js", "AWS S3", "Figma"].map((tech) => (
                <span key={tech} style={{ fontSize: "13px", padding: "4px 12px", backgroundColor: "var(--deep)", borderRadius: "100px", color: "var(--dusk)", fontWeight: 500 }}>{tech}</span>
              ))}
            </div>
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
                { number: "01", title: "Web App & SaaS Development", body: "Full-stack development with a back-end focus — from greenfield builds to new features on existing products. I work in Next.js, Supabase, TypeScript, Python, and Django." },
                { number: "02", title: "Startup Product Partnership", body: "Early-stage founder with an idea and no technical co-founder? I can be your first engineering partner — helping you scope, build, and ship your MVP without the overhead of an agency." },
                { number: "03", title: "Technical Problem Solving", body: "Not sure what you need yet? I'm happy to start with a conversation. I help teams think through problems, evaluate options, and make a plan before writing a single line of code." },
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
          <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "56px", color: "var(--petal)" }}>Selected projects</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {[
              { client: "Bream", role: "Full-Stack Engineer", stack: ["Next.js", "Capacitor", "C#", "SQL"], description: "I'm a contractor on the engineering team at Bream, a private community platform where women 50+ find friendship through pods, affinity groups, and shared experiences. Since June 2026 I've been building an incentive referral feature across the Next.js/Capacitor client and C# API.", link: "https://www.hellobream.com/" },
              { client: "hili", role: "Sole Engineer", stack: ["Next.js", "TypeScript", "Supabase"], description: "I've been the sole engineer at hili since September 2025, responsible for the full stack — architecture decisions, feature development, infrastructure, and deployment of an active consumer web application.", link: "https://app.gethili.com" },
              { client: "Daybreak Haunts", role: "Utah Food Bank Fundraiser", stack: ["React", "Tailwind CSS", "GCP", "JustGiving API"], description: "A donation-driven pass system for a community Halloween event. Donors who gave to the Utah Food Bank received a digital pass granting perks at local businesses and Halloween houses. The campaign raised over $4,000.", link: null },
              { client: "Magpie Zines", role: "Grand Coven Library", stack: ["Python", "Django", "PostgreSQL"], description: "A community-contributed catalog app for a tabletop roleplaying game. Players submit fictional magical texts using a password-gated form, browse and filter the catalog by category and type, and print catalog cards.", link: "https://library.skoticus.com" },
              { client: "Gold Family Farms", role: "gFix Web Application", stack: ["Python", "Django", "AWS S3", "Heroku"], description: "A web app built to replace a paper-based equipment management system for a large plant nursery. Features include inventory tracking, maintenance tickets, preventative maintenance triggers, and role-based user permissions.", link: null },
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
                  <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--dusk)", marginBottom: project.link ? "16px" : "0" }}>{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: "14px", color: "var(--rose)", fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      View project
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                    </a>
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
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .hero { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-portrait { order: -1; max-width: 280px; margin: 0 auto; }
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .work-row { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </div>
  );
}
