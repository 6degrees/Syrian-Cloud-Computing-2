import sccLogo from '../assets/scc-logo.svg';
import sccLogoAr from '../assets/scc-logo-ar.svg';
import { useLang } from '../i18n/LanguageContext';

export default function Logo({ footer = false }) {
  const { t, lang } = useLang();
  const isArabic = lang === 'ar';
  const src = isArabic ? sccLogoAr : sccLogo;
  return (
    <img
      src={src}
      alt={t.companyName}
      style={{
        height: footer ? 52 : 34,
        width: 'auto',
        display: 'block',
        opacity: 0.95,
      }}
    />
  );
}
