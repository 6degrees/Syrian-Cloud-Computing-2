import { useState } from 'react';
import { LanguageProvider, useLang } from './i18n/LanguageContext';
import GlobalStyles from './components/GlobalStyles';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Introduction from './components/Introduction';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import bgImage from './assets/Background.jpg';
import { s } from './styles';

function SkipLink() {
  const { lang } = useLang();
  const label = lang === 'ar' ? 'تخطِّ إلى المحتوى' : 'Skip to content';
  return <a href="#main" className="skip-link">{label}</a>;
}

export default function App() {
  const [pageReveal, setPageReveal] = useState(false);

  return (
    <LanguageProvider>
      {/* Preloader unmounts itself; onDone fires when its exit animation begins */}
      <Preloader onDone={() => setPageReveal(true)} />
      <GlobalStyles />
      <div className={pageReveal ? 'page-reveal' : 'page-hidden'}>
        <SkipLink />
        {/* <CustomCursor /> */}
        <Navbar />
        <main id="main" tabIndex={-1}>
          <Hero />
          <StatsBar />
          <Introduction />
          <Services />
          <WhyChooseUs />
        </main>
        <div style={s.ctaFooterWrap}>
          <img
            src={bgImage}
            alt=""
            role="presentation"
            loading="lazy"
            decoding="async"
            style={s.ctaFooterBgImage}
          />
          <div style={s.ctaFooterBgOverlay} />
          <CTASection />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
