import { s } from '../styles';
import Logo from './Logo';
import { C, SFText } from '../theme';
import { scrollToId } from '../utils/scroll';
import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLang();

  const footerNav = [
    ['services', t.footer.navLinks.services],
    ['why', t.footer.navLinks.why],
    ['cta', t.footer.navLinks.insights],
    ['cta', t.footer.navLinks.contact],
  ];

  return (
    <footer style={s.footer}>
      <div style={s.footerInner}>
        <div style={s.footerTop} className="footer-top-grid">
          <div className="footer-brand-full">
            <a
              href="#hero"
              style={s.navLogo}
              onClick={(e) => { e.preventDefault(); scrollToId('hero'); }}
              aria-label={t.nav.backToTop}
            >
              <Logo footer />
            </a>
            <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.7, maxWidth: 300, marginTop: 16, fontFamily: SFText }}>
              {t.footer.description}
            </p>
          </div>
          <div>
            <div style={s.footerColTitle}>{t.footer.navigation}</div>
            {footerNav.map(([id, label], i) => (
              <a
                key={`${id}-${i}`}
                href={`#${id}`}
                style={s.footerLink}
                className="footer-link"
                onClick={(e) => { e.preventDefault(); scrollToId(id); }}
              >
                {label}
              </a>
            ))}
          </div>
          <div>
            <div style={s.footerColTitle}>{t.footer.contact}</div>
            <address style={{ fontSize: 13, color: C.muted, lineHeight: 1.8, fontFamily: SFText, fontStyle: 'normal' }}>
              {t.footer.address}<br /><br />
              <a
                href="mailto:hello@syriancloud.com"
                style={{ color: C.muted, textDecoration: 'none' }}
                className="footer-link"
              >
                hello@syriancloud.com
              </a>
            </address>
          </div>
        </div>
        <div style={s.footerBottom}>
          <div style={s.footerCopy}>© {year} {t.companyName}. {t.footer.rights}</div>
          <div style={s.footerSocials}>
            <a
              href="https://www.linkedin.com/"
              style={s.socialLink}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in new tab)"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/"
              style={s.socialLink}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter (opens in new tab)"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
