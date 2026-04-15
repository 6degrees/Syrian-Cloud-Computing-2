import { useState } from 'react';
import Logo from './Logo';
import { s } from '../styles';
import useRafScroll from '../hooks/useRafScroll';
import { scrollToId } from '../utils/scroll';
import { useLang } from '../i18n/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, toggle } = useLang();

  useRafScroll((y) => {
    setScrolled((prev) => {
      const next = y > 30;
      return prev === next ? prev : next;
    });
  });

  const navItems = [
    ['intro', t.nav.introduction],
    ['services', t.nav.services],
    ['why', t.nav.why],
  ];

  const onNavClick = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <nav style={s.nav(scrolled)}>
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
        <a href="#cta" style={s.navCta} className="nav-cta" onClick={onNavClick('cta')}>
          {t.nav.contact} {lang === 'ar' ? '↖' : '↗'}
        </a>
      </div>
    </nav>
  );
}
