"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "./icons";

const links = [
  { label: "Работы", hash: "#work", index: "01" },
  { label: "Остальные", hash: "#more", index: "02" },
  { label: "Подход", hash: "#approach", index: "03" },
  { label: "Обо мне", hash: "#about", index: "04" },
  { label: "Контакты", hash: "#contact", index: "05" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const hrefFor = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="shell nav__inner">
          <Link href="/" className="nav__logo" aria-label="Андрей — на главную">
            АНДРЕЙ<b>.</b>
          </Link>

          <nav className="nav__links" aria-label="Основная навигация">
            {links.map((link) => (
              <Link key={link.hash} href={hrefFor(link.hash)} className="nav__link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav__right">
            <span className="nav__status">
              <i />
              Открыт к проектам
            </span>
            <Link href={hrefFor("#contact")} className="btn btn--primary nav__cta">
              <span>Связаться</span>
              <span className="btn__arrow">
                <ArrowUpRight size={13} />
              </span>
            </Link>
            <button
              type="button"
              className={`nav__burger ${open ? "is-open" : ""}`}
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav className="menu__links" aria-label="Мобильная навигация">
              {links.map((link, index) => (
                <motion.div
                  key={link.hash}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.06 + index * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={hrefFor(link.hash)}
                    className="menu__link"
                    onClick={() => setOpen(false)}
                  >
                    <em>{link.index}</em>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="menu__foot">
              <span className="mono">АНДРЕЙ / МИНСК / 2026</span>
              <a href="https://github.com/GhostAndrey" target="_blank" rel="noreferrer" className="mono">
                GitHub ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
