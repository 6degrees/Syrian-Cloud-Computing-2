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
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <GlobalStyles />
      <CustomCursor />
      <Navbar />
      <Hero />
      <StatsBar />
      <Introduction />
      <Services />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </LanguageProvider>
  );
}
