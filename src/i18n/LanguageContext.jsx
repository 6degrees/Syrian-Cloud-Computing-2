import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';

const STORAGE_KEY = 'scc.lang';
const DEFAULT_LANG = 'ar'; // Arabic is primary per client brief

const LanguageContext = createContext(null);

function getInitialLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  const saved = window.localStorage?.getItem(STORAGE_KEY);
  if (saved === 'ar' || saved === 'en') return saved;
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage?.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    dir: lang === 'ar' ? 'rtl' : 'ltr',
    isRTL: lang === 'ar',
    t: translations[lang],
    toggle: () => setLang((l) => (l === 'ar' ? 'en' : 'ar')),
    setLang,
  }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
