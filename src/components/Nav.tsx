import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { LINKS, NAV_ITEMS } from "../data/content";
import SocialLinks from "./SocialLinks";

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav-wrap${scrolled ? " is-scrolled" : ""}`}>
      <nav className="nav" aria-label="Navegação principal">
        <a href="#inicio" className="brand" onClick={close}>
          <span className="brand-mark">EP</span>
          <span className="brand-name">
            Eduarda Passos
            <small>Advocacia Internacional</small>
          </span>
        </a>

        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Agende sua consulta
          <ArrowUpRight size={16} strokeWidth={1.6} />
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        hidden={!open}
      >
        <ul className="mobile-links">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.href} style={{ animationDelay: `${60 + index * 40}ms` }}>
              <a href={item.href} onClick={close}>
                <span>0{index + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          onClick={close}
        >
          Agende sua consulta
          <ArrowUpRight size={18} strokeWidth={1.6} />
        </a>

        <SocialLinks className="socials-outline" />
      </div>
    </header>
  );
}

export default Nav;
