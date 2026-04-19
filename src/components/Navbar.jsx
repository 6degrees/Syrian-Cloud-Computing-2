import { useEffect, useState } from 'react';
import Logo from './Logo';
import { s } from '../styles';
import useRafScroll from '../hooks/useRafScroll';
import { scrollToId } from '../utils/scroll';
import { useLang } from '../i18n/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, lang, toggle } = useLang();

  useRafScroll((y) => {
    setScrolled((prev) => {
      const next = y > 30;
      return prev === next ? prev : next;
    });
  });

  // Lock body scroll when the mobile drawer is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [menuOpen]);

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const navItems = [
    ['intro', t.nav.introduction],
    ['services', t.nav.services],
    ['why', t.nav.why],
  ];

  const onNavClick = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <nav style={s.nav(scrolled)}>
       <div style={s.navInner}>
        <a href="#hero" style={s.navLogo} onClick={onNavClick('hero')} aria-label={t.nav.backToTop}>
          <Logo />
        </a>
        <ul style={s.navLinks} className="nav-links-hide" id="navlinks">
          {navItems.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                style={s.navLink}
                className="nav-link-el"
                onClick={onNavClick(id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button
            type="button"
            onClick={toggle}
            className="lang-toggle"
            aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            {t.nav.langToggle}
          </button>
          <a href="#cta" style={s.navCta} className="nav-cta nav-cta-desktop" onClick={onNavClick('cta')}>
            {t.nav.contact} {lang === 'ar' ? '↖' : '↗'}
          </a>
          <button
            type="button"
            className="nav-menu-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`nav-menu-icon${menuOpen ? ' open' : ''}`} aria-hidden="true">
              <span /><span /><span />
            </span>
          </button>
        </div>
       </div>
      </nav>

      <div
        id="mobile-drawer"
        className={`mobile-drawer${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.introduction}
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-drawer-list">
          {navItems.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={onNavClick(id)}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#cta" className="mobile-drawer-cta" onClick={onNavClick('cta')}>
              {t.nav.contact} {lang === 'ar' ? '↖' : '↗'}
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`mobile-drawer-backdrop${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
