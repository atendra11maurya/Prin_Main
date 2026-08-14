"use client";

/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/leadership", label: "Leadership" },
  { href: "/academic", label: "Academic" },
  { href: "/#correspondence", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const update = () => {
      const top = window.scrollY;
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(top > 24);
      setProgress(available > 0 ? Math.min(100, (top / available) * 100) : 0);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " menu-is-open" : ""}`}>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
      <div className="nav-shell">
        <a className="brand" href="/" aria-label="Prof. Yogeshwar Sharma — home" onClick={() => setOpen(false)}>
          <span className="monogram" aria-hidden="true">
            <span>Y</span><i /><span>S</span>
          </span>
          <span className="brand-copy">
            <strong>Yogeshwar Sharma</strong>
            <small>Principal · MLNC</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className="primary-nav" aria-label="Primary navigation">
          {links.map((link) => {
            const route = link.href.split("#")[0];
            const active = link.href === "/" ? path === "/" : route !== "" && route !== "/" && path === route;
            return (
              <a
                key={link.href}
                href={link.href}
                className={active ? "is-active" : undefined}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
