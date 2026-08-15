"use client";

/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useRef, useState } from "react";
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
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const restoreFocusRef = useRef(false);
  const path = usePathname();
  const open = openPath === path;

  useEffect(() => {
    let frame: number | null = null;

    const update = () => {
      frame = null;
      const top = window.scrollY;
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(top > 24);
      setProgress(available > 0 ? Math.min(100, (top / available) * 100) : 0);
    };

    const requestUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1100px)");
    const updateViewport = (matches: boolean) => {
      setIsMobile(matches);
      if (!matches) {
        restoreFocusRef.current = false;
        setOpenPath(null);
      }
    };
    const handleChange = (event: MediaQueryListEvent) => updateViewport(event.matches);

    updateViewport(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const navigation = navigationRef.current;
    if (!open || !isMobile || !header || !navigation) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const inertSiblings = Array.from(document.body.children).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement && element !== header && element.tagName !== "SCRIPT",
    );
    const previousInertValues = inertSiblings.map((element) => [element, element.inert] as const);

    document.body.classList.add("menu-open");
    inertSiblings.forEach((element) => {
      element.inert = true;
    });

    const focusFrame = window.requestAnimationFrame(() => {
      navigation.querySelector<HTMLAnchorElement>("a[href]")?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        restoreFocusRef.current = true;
        setOpenPath(null);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = Array.from(
        header.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ).filter((element) => !element.inert);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("menu-open");
      previousInertValues.forEach(([element, wasInert]) => {
        element.inert = wasInert;
      });
      if (restoreFocusRef.current && previouslyFocused?.isConnected) {
        window.requestAnimationFrame(() => previouslyFocused.focus());
      }
    };
  }, [isMobile, open]);

  const closeMenu = (restoreFocus = false) => {
    restoreFocusRef.current = restoreFocus;
    setOpenPath(null);
  };

  return (
    <header ref={headerRef} className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " menu-is-open" : ""}`}>
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
      <div className="nav-shell">
        <a className="brand" href="/" aria-label="Prof. Yogeshwar Sharma — home" onClick={() => closeMenu()}>
          <span className="monogram" aria-hidden="true">
            <span>Y</span><i /><span>S</span>
          </span>
          <span className="brand-copy">
            <strong>Yogeshwar Sharma</strong>
            <small>Principal · MLNC · DU</small>
          </span>
        </a>

        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => {
            restoreFocusRef.current = true;
            setOpenPath((value) => value === path ? null : path);
          }}
        >
          <span />
          <span />
        </button>

        <nav
          ref={navigationRef}
          id="primary-navigation"
          className="primary-nav"
          aria-label="Primary navigation"
          inert={isMobile && !open ? true : undefined}
        >
          {links.map((link) => {
            const route = link.href.split("#")[0];
            const active = link.href === "/" ? path === "/" : route !== "" && route !== "/" && path === route;
            return (
              <a
                key={link.href}
                href={link.href}
                className={active ? "is-active" : undefined}
                aria-current={active ? "page" : undefined}
                onClick={() => closeMenu()}
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
