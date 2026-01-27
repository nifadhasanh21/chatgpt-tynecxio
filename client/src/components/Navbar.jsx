import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Packages", "#packages"],
    ["Process", "#process"],
    ["Portfolio", "#portfolio"],
    ["About", "#about"],
    ["Contact", "#contact"]
  ];

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="nav">
      <div className="container navInner">
        {/* LOGO */}
        <a
          className="logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("#home");
          }}
        >
          <img
            src="/tynecxio-logo.png"
            alt="TynecXio"
            className="logoImg"
          />
        </a>

        {/* Desktop links */}
        <nav className="navLinks" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                go(href);
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="navCta">
          <MagneticButton
            className="primary"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("#contact");
            }}
          >
            Get a Free Strategy Call
          </MagneticButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobileMenu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <div className="container mobileMenuInner">
              {links.map(([label, href]) => (
                <button
                  key={href}
                  className="mobileLink"
                  onClick={() => go(href)}
                >
                  {label}
                </button>
              ))}

              <MagneticButton
                as="button"
                className="primary wide"
                onClick={() => go("#contact")}
              >
                Get a Free Strategy Call
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}