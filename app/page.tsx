"use client";
import Image from "next/image";
import { useState } from "react";

const caseStudies = [
  {
    client: "Bream",
    role: "UI/UX Design & Full-Stack Engineering",
    description:
      "Contractor on Bream's engineering team. Redesigned the member dashboard, making positive impacts on new user retention and engagement, and shipped a referral system, tagging, and profile updates.",
    link: "https://www.hellobream.com/",
    imageGroups: [
      { label: "Before", images: [
        { src: "/work/bream/dashboard-before.png", alt: "Bream member dashboard before redesign — sidebar navigation with feature cards", width: 670, height: 960 },
      ] },
      { label: "After", images: [
        { src: "/work/bream/after-dashboard.png", alt: "Bream dashboard after redesign — referral invite, upcoming plans, and event tags", width: 324, height: 662 },
        { src: "/work/bream/after-groups.png", alt: "Bream dashboard showing your groups and latest community activity", width: 322, height: 661 },
        { src: "/work/bream/after-discovery.png", alt: "Bream dashboard showing group discovery, tagged perks, and member benefits", width: 323, height: 661 },
      ] },
    ],
  },
  {
    client: "hili",
    role: "Full-Stack Engineer",
    description:
      "Full-stack engineer at hili since September 2025, owning architecture, feature development, and deployment on an active consumer web app — working closely with a dedicated designer.",
    link: "https://app.gethili.com",
    testimonial: {
      quote:
        "Throughout Kirsten's time at hili, I was struck by her rare combination of calm and tenacity. She inherited a challenging codebase, took ownership of it, and made meaningful improvements while delivering new features at a brisk pace. She pairs strong software engineering skills with resourcefulness, humility, and a genuine desire to learn, making her the kind of developer any organization would be fortunate to have. I'm grateful to have worked alongside her and proud of what we accomplished together.",
      name: "Karli Kujawa",
      role: "hili",
    },
  },
  {
    client: "Gold Family Farms",
    role: "UI/UX Design & Development",
    description:
      "Shifted the their real-world paper workflow into easy to use software that handles ticket submission, mechanic assignment, and preventative maintenance scheduling.",
    link: null,
    note: "Internal application — owned by Gold Family Farms and not publicly viewable",
    imageGroups: [
      { images: [
        { src: "/work/gfix/ticket-submit.png", alt: "gFix create ticket form for reporting equipment issues", caption: "Submit ticket", width: 498, height: 600 },
        { src: "/work/gfix/ticket-list.png", alt: "gFix open tickets dashboard with assignment and filtering", caption: "Open tickets", width: 497, height: 939 },
        { src: "/work/gfix/ticket-detail.png", alt: "gFix ticket detail view with repair assignment and photo upload", caption: "Ticket detail", width: 498, height: 931 },
        { src: "/work/gfix/item-detail.png", alt: "gFix equipment inventory detail with gallery and history tabs", caption: "Item detail", width: 479, height: 520 },
      ] },
    ],
  },
];

const otherWork = [
  {
    client: "Daybreak Haunts",
    role: "UI/UX Design & Development",
    description:
      "Designed and built a donation-driven pass system for a community Halloween fundraiser, from the landing page to an interactive neighborhood map. The campaign raised over $4,000 for the Utah Food Bank.",
    link: null,
    note: "Live for the Halloween fundraiser only — no longer viewable",
    images: [
      { src: "/work/daybreak-haunts/landing.png", alt: "Daybreak Haunts donation landing page with Utah Food Bank integration" },
      { src: "/work/daybreak-haunts/pass.png", alt: "Digital Haunts Pass showing business rewards and perks" },
      { src: "/work/daybreak-haunts/map.png", alt: "Interactive neighborhood map with legend and business locations" },
    ],
  },
  {
    client: "Magpie Zines",
    role: "UI/UX Design & Development",
    description:
      "Designed and built a community-contributed catalog app for a tabletop RPG — browse, filter, and submission workflows, contributor forms, and print-ready catalog cards.",
    link: "https://library.skoticus.com",
  },
];

type Project = (typeof caseStudies)[number] | (typeof otherWork)[number];

function ProjectRow({ project }: { project: Project }) {
  const imageGroups = "imageGroups" in project ? project.imageGroups : undefined;
  const images = "images" in project ? project.images : undefined;

  const flatImages = imageGroups
    ? imageGroups.flatMap((group) => group.images.map((img) => ({ ...img, groupLabel: "label" in group ? group.label : undefined })))
    : images?.map((img) => ({ ...img, groupLabel: undefined as string | undefined }));

  return (
    <div style={{ padding: "24px 0", borderTop: "1px solid var(--divider)", display: "grid", gridTemplateColumns: "220px 1fr", gap: "40px", alignItems: "start" }} className="work-row">
      <div>
        <h3 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "22px", marginBottom: "4px", color: "var(--ink)" }}>{project.client}</h3>
        <p style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 500 }}>{project.role}</p>
      </div>
      <div>
        <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--muted)", marginBottom: project.link || project.note ? "12px" : "0" }}>{project.description}</p>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "14px", color: "var(--ink)", fontWeight: 500, textDecoration: "underline", textDecorationColor: "var(--accent)", textDecorationThickness: "3px", textUnderlineOffset: "4px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
            View project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
          </a>
        )}
        {!project.link && project.note && (
          <p style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 500, fontStyle: "italic" }}>{project.note}</p>
        )}
        {flatImages && flatImages.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "20px" }}>
            {flatImages.map((img) => (
              <figure key={img.src} style={{ width: "150px", flexShrink: 0, margin: 0, textAlign: "center" }}>
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
                {img.groupLabel && (
                  <figcaption style={{ marginTop: "6px", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500 }}>
                    {img.groupLabel}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
        {"testimonial" in project && project.testimonial && (
          <div style={{ marginTop: "20px", padding: "20px 24px", border: "1px solid var(--divider)", borderRadius: "8px", backgroundColor: "var(--surface)" }}>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--muted)", fontStyle: "italic", marginBottom: "8px" }}>
              &ldquo;{project.testimonial.quote}&rdquo;
            </p>
            <p style={{ fontSize: "13px", color: "var(--muted)" }}>
              <span style={{ color: "var(--ink)", fontWeight: 500 }}>{project.testimonial.name}</span> — {project.testimonial.role}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ backgroundColor: "var(--bg)", color: "var(--ink)" }}>
      <a
        href="#main"
        style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}
        onFocus={(e) => { Object.assign(e.currentTarget.style, { left: "16px", top: "16px", width: "auto", height: "auto", padding: "8px 16px", backgroundColor: "var(--accent)", color: "var(--on-accent)", zIndex: "9999", borderRadius: "4px" }); }}
        onBlur={(e) => { Object.assign(e.currentTarget.style, { left: "-9999px", width: "1px", height: "1px" }); }}
      >
        Skip to main content
      </a>

      <header style={{ position: "sticky", top: 0, backgroundColor: "var(--bg)", borderBottom: "1px solid var(--divider)", zIndex: 100 }}>
        <nav style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }} aria-label="Main navigation">
          <a href="#" style={{ fontFamily: "var(--font-dm-serif)", fontSize: "20px", color: "var(--ink)", textDecoration: "none" }}>
            Firework.
          </a>
          <ul style={{ display: "flex", gap: "36px", listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">
            {[["About", "about"], ["Services", "services"], ["Portfolio", "portfolio"], ["Contact", "contact"]].map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} style={{ fontSize: "15px", color: "var(--muted)", textDecoration: "none" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--ink)"; e.currentTarget.style.textDecoration = "underline"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.textDecoration = "none"; }}>{label}</a>
              </li>
            ))}
          </ul>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation menu"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "var(--ink)" }} className="mobile-menu-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </nav>
        {menuOpen && (
          <div style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--divider)", padding: "16px 24px 24px" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {[["About", "about"], ["Services", "services"], ["Portfolio", "portfolio"], ["Contact", "contact"]].map(([label, id]) => (
                <li key={id}><a href={`#${id}`} onClick={() => setMenuOpen(false)} style={{ fontSize: "18px", color: "var(--ink)", textDecoration: "none" }}>{label}</a></li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main id="main">

        {/* Hero & About */}
        <section id="about" style={{ backgroundColor: "var(--surface)" }}>
        <div className="hero" style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 24px 80px" }}>
          <p style={{ fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "20px", fontWeight: 500 }}>Firework Development</p>
          <h1 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(42px, 7vw, 84px)", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "16px", color: "var(--ink)" }}>
            Kirsten Andersen Morris
          </h1>
          <p style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2, color: "var(--accent)", marginBottom: "36px" }}>
            Product Engineer — building software that&apos;s easy to learn and use.
          </p>
          <div style={{ maxWidth: "620px" }}>
            <p style={{ fontSize: "18px", lineHeight: 1.7, marginBottom: "16px", color: "var(--muted)" }}>
              My background in instructional design and technical communication allow me to translate complex ideas and processes into simple and accessible products.
            </p>
            <p style={{ fontSize: "18px", lineHeight: 1.7, marginBottom: "36px", color: "var(--muted)" }}>
              I&apos;d love to learn more about your project and see how I can help.
            </p>
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#contact" style={{ display: "inline-block", backgroundColor: "var(--accent)", color: "var(--on-accent)", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", fontSize: "15px", fontWeight: 500 }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-hover)")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--accent)")}>
              Talk about your project
            </a>
            <a href="#portfolio" style={{ display: "inline-block", color: "var(--ink)", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", fontSize: "15px", fontWeight: 500, border: "1px solid var(--border)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--ink)")} onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}>
              See portfolio
            </a>
          </div>
        </div>
        </section>

        {/* Services */}
        <section id="services" style={{ backgroundColor: "var(--surface)", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500, marginBottom: "16px" }}>Services</p>
            <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "56px", maxWidth: "480px", color: "var(--ink)" }}>
              Where I can help
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }} className="three-col">
              {[
                { number: "01", title: "Build a new product or MVP", body: "Scope the problem, design the UX, build the full stack, and ship — for early-stage founders and small teams without a technical co-founder or an agency's overhead." },
                { number: "02", title: "Turn a manual workflow into software", body: "Map a messy, paper-based or spreadsheet-based business process, then design and build the internal tool that replaces it — informed by how the work actually happens on the ground." },
                { number: "03", title: "Fix a confusing product", body: "Audit the UX and onboarding of a live product, then ship the fixes — simplifying the flows that confuse customers and drive support tickets, so people succeed without needing to ask for help." },
              ].map((service) => (
                <div key={service.number} style={{ backgroundColor: "var(--bg)", borderRadius: "12px", padding: "32px" }}>
                  <p style={{ marginBottom: "16px" }}><span style={{ display: "inline-block", fontSize: "13px", color: "var(--on-accent)", backgroundColor: "var(--accent)", fontWeight: 500, padding: "2px 12px", borderRadius: "100px" }}>{service.number}</span></p>
                  <h3 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "22px", lineHeight: 1.3, marginBottom: "16px", color: "var(--ink)" }}>{service.title}</h3>
                  <p style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--muted)" }}>{service.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
          <p style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500, marginBottom: "16px" }}>Portfolio</p>
          <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "56px", color: "var(--ink)" }}>Projects</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {[...caseStudies, ...otherWork].map((project, i) => (
              <ProjectRow key={i} project={project} />
            ))}
            <div style={{ borderTop: "1px solid var(--divider)" }} />
          </div>
        </section>


        {/* Contact */}
        <section id="contact" style={{ backgroundColor: "var(--surface)", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="two-col">
            <div>
              <p style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500, marginBottom: "16px" }}>Contact</p>
              <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: "24px" }}>
                Let&apos;s build something together
              </h2>
              <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--muted)" }}>
                I&apos;m currently taking on new clients — for new product builds, turning a manual workflow into software, or fixing a confusing product. If you have a project in mind, I&apos;d love to hear about it.
              </p>
            </div>
            <div>
              <a href="mailto:kirsten@fireworkdev.com"
                style={{ display: "inline-block", backgroundColor: "var(--accent)", color: "var(--on-accent)", padding: "16px 32px", borderRadius: "6px", textDecoration: "none", fontSize: "16px", fontWeight: 500, marginBottom: "20px" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--accent)")}>
                kirsten@fireworkdev.com
              </a>
              <p style={{ fontSize: "14px", color: "var(--muted)" }}>Based in Iowa — working with clients everywhere.</p>
            </div>
          </div>
        </section>

      </main>

      <footer style={{ backgroundColor: "var(--surface)", borderTop: "1px solid var(--divider)", padding: "24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "14px", color: "var(--muted)" }}>© {new Date().getFullYear()} Firework Development, LLC</p>
          <p style={{ fontSize: "14px", color: "var(--muted)" }}>Kirsten Andersen Morris</p>
        </div>
      </footer>

      <style>{`
        .screenshot-frame {
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--divider);
          background: var(--surface);
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .hero { padding: 80px 24px 64px !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .work-row { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </div>
  );
}
