import sccLogo from '../assets/scc-logo.svg';
import { useLang } from '../i18n/LanguageContext';

export default function Logo({ footer = false }) {
  const { t } = useLang();
  return (
    <img
      src={sccLogo}
      alt={t.companyName}
      style={{
        width: footer ? 120 : 84,
        height: 'auto',
        display: 'block',
        opacity: 0.95,
      }}
    />
  );
}
