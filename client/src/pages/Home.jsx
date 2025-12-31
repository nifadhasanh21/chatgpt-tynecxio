import ScrollProgress from "../components/ScrollProgress.jsx";
import MagneticButton from "../components/MagneticButton.jsx";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Section from "../components/Section.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import PackageCard from "../components/PackageCard.jsx";
import FAQItem from "../components/FAQItem.jsx";
import ContactForm from "../components/ContactForm.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

export default function Home() {
  const highlights = [
    "UI/UX for web & mobile products",
    "Modern websites & web applications",
    "E-commerce store development",
    "Branding, graphics & identity",
    "Mobile app interface design",
    "Digital marketing & growth strategy"
  ];

  const services = [
    {
      title: "🟣 UI/UX Design for Web & Mobile Apps",
      bullets: [
        "User research, user flows & wireframes",
        "Modern interface design for SaaS, dashboards & tools",
        "Mobile app UI for Android / iOS",
        "Prototypes & usability-focused layouts"
      ],
      outcome: "Clean, intuitive, user-friendly digital products."
    },
    {
      title: "🟣 Website & Web Application Development",
      bullets: [
        "Business & portfolio websites",
        "Landing pages for startups & launches",
        "Custom frontend development",
        "Fast, secure, responsive, SEO-friendly builds"
      ],
      outcome: "Professional online presence that builds trust."
    },
    {
      title: "🟣 E-Commerce Website & Online Store Development",
      bullets: [
        "Modern product-first storefront design",
        "Secure checkout & payment integrations",
        "Conversion-optimized product pages",
        "Basic analytics & inventory setup"
      ],
      outcome: "A store ready to sell from day one."
    },
    {
      title: "🟣 Mobile App UI Design",
      bullets: [
        "Screens, flows, and user journeys",
        "Clean, modern, consistent layouts",
        "Handoff-ready designs for developers"
      ],
      outcome: "App interfaces users love to interact with."
    },
    {
      title: "🟣 Brand Identity & Graphic Design",
      bullets: [
        "Logo + identity system",
        "Color palette & typography",
        "Social media & web graphics",
        "Marketing visuals & brand assets"
      ],
      outcome: "A brand look that feels professional and memorable."
    },
    {
      title: "🟣 Modern Digital Marketing & Growth Support",
      bullets: [
        "Launch & growth strategy",
        "Content & campaign direction",
        "Basic ad strategy & funnel guidance",
        "Consultation & performance review"
      ],
      outcome: "Visibility, awareness, and smarter scaling."
    }
  ];

  const packages = [
    {
      name: "🌟 Signature Launch Package",
      tagline: "Brand + Website + Starter Marketing",
      includes: [
        "Logo + mini brand identity",
        "Up to 5-page modern website",
        "Mobile responsive design",
        "Basic SEO structure",
        "Content guidance & CTA suggestions",
        "Domain, hosting & analytics setup",
        "Contact form integration"
      ],
      timeline: "2–3 weeks",
      price: "$350 – $600 USD (depends on complexity)",
      buttonText: "Get a Custom Quote",
      badge: "Most Popular"
    },
    {
      name: "🟢 UI/UX Product Experience Package",
      tagline: "Perfect for SaaS, dashboards, and mobile/web apps",
      includes: [
        "User flows & wireframes",
        "Full UI design system",
        "Up to 20 screens/pages",
        "Prototype for testing",
        "Developer-ready handoff"
      ],
      timeline: "3–4 weeks",
      price: "$400 – $900 USD",
      buttonText: "Start UI/UX Project",
      badge: "UI/UX"
    },
    {
      name: "🔵 E-Commerce Store Launch Package",
      tagline: "For businesses ready to sell online",
      includes: [
        "Custom storefront design",
        "Product page layout",
        "Payment & checkout integration",
        "Basic inventory setup",
        "SEO & analytics ready"
      ],
      timeline: "2–3 weeks",
      price: "$450 – $900 USD",
      buttonText: "Launch My Store",
      badge: "E-Commerce"
    },
    {
      name: "🟣 Mobile App UI Design Package",
      tagline: "App design that feels modern and consistent",
      includes: [
        "App user journey mapping",
        "Up to 25 screens",
        "Icon & typography system",
        "Prototyping & animations"
      ],
      timeline: "3–5 weeks",
      price: "$500 – $1,000 USD",
      buttonText: "Design My App UI",
      badge: "Mobile"
    },
    {
      name: "🟠 Brand Identity & Graphics Package",
      tagline: "A brand look that feels professional",
      includes: [
        "Logo + variations",
        "Color & typography system",
        "Social media kit",
        "Brand usage guideline (PDF)"
      ],
      timeline: "1–2 weeks",
      price: "$200 – $450 USD",
      buttonText: "Build My Brand",
      badge: "Brand"
    },
    {
      name: "🟡 Digital Marketing & Growth Package (Monthly)",
      tagline: "Monthly growth partner support",
      includes: [
        "Content & campaign strategy",
        "Performance review & optimization",
        "Landing page / funnel support",
        "Consultation & guidance"
      ],
      timeline: "Monthly",
      price: "$300 – $600 USD per month",
      buttonText: "Join Growth Partner Plan",
      badge: "Growth"
    }
  ];

  const faqs = [
    { q: "Do you work with international clients?", a: "Yes — we work globally via remote collaboration." },
    { q: "Do I need all content before starting?", a: "No — we help structure and guide content." },
    { q: "Do you offer revisions?", a: "Yes — each project includes review rounds." },
    { q: "Do you provide post-launch support?", a: "Yes — plus optional ongoing plans." }
  ];

  return (
    <div className="grain">
      <ScrollProgress />
      <Navbar />

      {/* HERO */}
      <header id="home" className="hero">
        {/* Animated Gradient Blobs */}
        <div className="heroFX" aria-hidden="true">
          <motion.div
            className="blob one"
            animate={{ x: [0, 30, -10, 0], y: [0, 10, 30, 0], scale: [1, 1.05, 0.98, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="blob two"
            animate={{ x: [0, -25, 10, 0], y: [0, 25, -10, 0], scale: [1, 1.06, 1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="blob three"
            animate={{ x: [0, 18, -18, 0], y: [0, -12, 16, 0], scale: [1, 1.04, 1, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container heroWrap">
          {/* LEFT */}
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div className="badge" variants={fadeUp}>
              <span className="spark" />
              Design • Development • Growth
            </motion.div>

            <motion.h1 className="h1" style={{ marginTop: 18 }} variants={fadeUp}>
              Design, Build & Grow —<br />
              Digital Experiences That<br />
              Help Brands Succeed
            </motion.h1>

            <motion.p className="p" variants={fadeUp}>
              We help startups, founders, and businesses create high-performing websites, mobile app interfaces,
              e-commerce platforms, and brand identities — combining clean design, smart technology, and growth-focused
              digital marketing.
            </motion.p>

            <motion.div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }} variants={fadeUp}>
              <MagneticButton className="primary" href="#contact">
                Book a Free Discovery Call
              </MagneticButton>

              <MagneticButton href="#packages" shine={false}>
                View Our Packages ↓
              </MagneticButton>
            </motion.div>

            <motion.div
              className="grid grid2 heroHighlights"
              style={{ marginTop: 22 }}
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {highlights.map((h) => (
                <motion.div key={h} className="card soft lift" style={{ padding: 16 }} variants={fadeUp}>
                  <div className="small">✓</div>
                  <div style={{ fontWeight: 900 }}>{h}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="card lift heroCard"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          >
            <div style={{ fontWeight: 950, fontSize: 20 }}>Get a Free Strategy Call</div>
            <p className="p">Tell us what you’re building. We’ll reply with a clear plan and next steps.</p>

            <MagneticButton className="primary wide" href="#contact">
              Get Started
            </MagneticButton>

            <div className="hr"></div>
            <div className="small">Trusted by startups, entrepreneurs, small businesses, and emerging brands worldwide.</div>
            <div className="small" style={{ marginTop: 8 }}>(You can add logos later.)</div>
          </motion.div>
        </div>
      </header>

      {/* TRUST STRIP */}
      <section className="strip">
        <div className="container">
          <div className="small">
            Trusted by startups, entrepreneurs, small businesses, and emerging brands across the globe. (Logos coming soon.)
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section
        id="services"
        title="What We Do"
        subtitle="We’re a product-focused digital studio that blends design, development, and marketing to build meaningful, conversion-focused digital experiences."
      >
        <motion.div
          className="grid grid3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="card lift"
          style={{ marginTop: 18 }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <b>Not sure which service fits your idea?</b>
          <div className="p">Tell us about your project — we’ll guide you to the right plan.</div>
          <MagneticButton className="primary" href="#contact">
            Tell Us About Your Project
          </MagneticButton>
        </motion.div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section id="about" title="Why Work With NovaWave Studio?" subtitle="">
        <motion.div
          className="grid grid2"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            "🎯 Design with business & conversion in mind",
            "⚡ Startup-friendly process and timelines",
            "🤝 Clear communication & transparent pricing",
            "🌍 Remote-friendly, international-ready workflow",
            "🧠 Strategy + Design + Development + Growth in one place"
          ].map((x) => (
            <motion.div key={x} className="card soft lift" style={{ fontWeight: 900 }} variants={fadeUp}>
              {x}
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* PROCESS */}
      <Section id="process" title="How We Work" subtitle="">
        <motion.div
          className="grid grid3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            ["Discovery Call", "Understand your goals, audience & requirements."],
            ["Strategy & Proposal", "Scope, pricing, and project roadmap."],
            ["Design & Review", "Wireframes, UI/UX, branding, layout & feedback."],
            ["Development / Execution", "Build, optimize, refine, and test."],
            ["Launch & Support", "Deployment + final improvements."],
            ["Optional Ongoing Growth", "Updates, landing pages, marketing & scaling."]
          ].map(([t, d]) => (
            <motion.div className="card lift" key={t} variants={fadeUp}>
              <div style={{ fontWeight: 950 }}>{t}</div>
              <p className="p">{d}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* PACKAGES */}
      <Section id="packages" title="📦 Package System (With Pricing)" subtitle="">
        <motion.div
          className="grid grid3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {packages.map((p) => (
            <motion.div key={p.name} variants={fadeUp}>
              <PackageCard {...p} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* PORTFOLIO */}
      <Section id="portfolio" title="Recent Work & Focus Areas" subtitle="We love working on:">
        <motion.div
          className="grid grid2"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            "SaaS dashboards & tools",
            "Startup landing pages",
            "Founder & personal brand sites",
            "Service-business websites",
            "Mobile app UI & prototypes"
          ].map((x) => (
            <motion.div key={x} className="card soft lift" style={{ fontWeight: 900 }} variants={fadeUp}>
              {x}
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
          <MagneticButton className="primary" href="#contact" style={{ marginTop: 18 }}>
            Request Portfolio Samples
          </MagneticButton>
        </motion.div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQ" subtitle="">
        <motion.div
          className="grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((f) => (
            <motion.div key={f.q} variants={fadeUp}>
              <FAQItem {...f} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* FINAL CTA / CONTACT */}
      <Section
        id="contact"
        title="Ready to Build Something Great?"
        subtitle="Tell us about your idea — we’ll come back with a clear plan and proposal."
      >
        <div className="grid grid2 contactGrid" style={{ alignItems: "stretch", gap: 22 }}>
          {/* LEFT */}
          <motion.div
            className="card lift contactLeft"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3 style={{ fontWeight: 950, fontSize: 26, margin: 0 }}>Let’s Build Something Meaningful</h3>

            <p className="p" style={{ marginTop: 12 }}>
              Whether you’re launching a startup, redesigning your brand, or scaling an existing product — we help you move
              fast with clarity and confidence.
            </p>

            <div className="contactPoints">
              <div>⚡ Fast turnaround & startup-friendly process</div>
              <div>🎯 Design focused on conversion & growth</div>
              <div>🌍 Remote collaboration, global clients</div>
              <div>🤝 Clear communication & honest pricing</div>
            </div>

            <div className="contactMini">
              <div className="miniStep">1. Discovery Call</div>
              <div className="miniStep">2. Strategy & Design</div>
              <div className="miniStep">3. Build & Launch</div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
            <ContactForm />
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
