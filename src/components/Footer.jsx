import { s } from '../styles';
import Logo from './Logo';
import { C, SFText } from '../theme';
import { scrollToId } from '../utils/scroll';
import { useLang } from '../i18n/LanguageContext';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLang();

  const footerNav = [
    ['intro', t.nav.introduction],
    ['services', t.nav.services],
    ['why', t.nav.why],
  ];

  return (
    <footer style={s.footer}>
      <div style={s.footerFade} />
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
              {t.footer.address}<br />
              {t.footer.cities}<br /><br />
              <a
                href={`mailto:${t.footer.email}`}
                style={{ color: C.muted, textDecoration: 'none', display: 'block' }}
                className="footer-link"
              >
                {t.footer.email}
              </a>
              <a
                href={`tel:${t.footer.phone.replace(/\s+/g, '')}`}
                style={{ color: C.muted, textDecoration: 'none', display: 'block', marginTop: 8 }}
                className="footer-link"
              >
                {t.footer.phone}
              </a>
            </address>
          </div>
        </div>
        <div style={s.footerBottom}>
          <div style={s.footerCopy}>© <span dir="ltr">{year}</span> {t.companyName}. {t.footer.rights}</div>
          <span style={s.socialLink}>{t.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
