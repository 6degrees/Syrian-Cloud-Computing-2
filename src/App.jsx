import { useEffect, useRef, useState } from 'react';
import GradientBlinds from './components/GradientBlinds.jsx';
import sccLogo from './assets/scc-logo.svg';

// ─── Brand tokens ────────────────────────────────────────────────
const C = {
  bg: '#0A0D0C',
  surface: '#0f1410',
  surface2: '#131a14',
  border: 'rgba(92,127,120,0.14)',
  green: '#5C7F78',
  emerald: '#25403A',
  deep: '#162523',
  gold: '#D3B988',
  bronze: '#705F45',
  text: '#F0EDE6',
  muted: '#7a9490',
};

// Stable ref so GradientBlinds doesn't reinit WebGL on every scroll (was causing flicker)
const HERO_GRADIENT_COLORS = ['#162523', '#162523', '#25403A', '#5C7F78', '#D3B988', '#705F45', '#25403A', '#162523'];

const SF = `'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif`;
const SFText = `'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif`;
const SFMono = `'SF Mono', ui-monospace, 'Cascadia Code', 'Fira Code', monospace`;

const Logo = ({ footer = false }) => (
  <img
    src={sccLogo}
    alt="Syrian Cloud Computing"
    style={{
      width: footer ? 120 : 84,
      height: 'auto',
      display: 'block',
      opacity: 0.95,
    }}
  />
);

const icons = {
  server: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="4" rx="1" /><rect x="2" y="13" width="20" height="4" rx="1" /><circle cx="5.5" cy="9" r="0.8" fill="currentColor" /><circle cx="5.5" cy="15" r="0.8" fill="currentColor" /></svg>,
  home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9,22 9,12 15,12 15,22" /></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  cloud: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="8,17 12,21 16,17" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" /></svg>,
  monitor: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>,
};

const services = [
  { num: '01', icon: icons.server, title: 'Cloud Computing & Transformation', desc: 'Advanced cloud services to build, migrate, and operate digital environments with confidence and scale.' },
  { num: '02', icon: icons.home, title: 'IaaS & Managed Operations', desc: 'Secure and high-performance infrastructure with continuous monitoring, administration, and optimization.' },
  { num: '03', icon: icons.shield, title: 'Locally Hosted SaaS', desc: 'Software platforms hosted within the country to support compliance, data residency, reliability, and control.' },
  { num: '04', icon: icons.cloud, title: 'Mobile Apps, Hosting & Marketing', desc: 'Mobile products, reliable hosting, and targeted promotion to improve engagement and open new digital channels.' },
  { num: '05', icon: icons.monitor, title: 'Digital Marketing & Sales Growth', desc: 'Data-driven campaigns that expand reach, attract quality leads, and improve conversion performance.' },
  { num: '06', icon: icons.clock, title: 'B2C Digital Revenue Services', desc: 'Digital platforms and customer experiences designed to improve accessibility and accelerate revenue generation.' },
];

const features = [
  { num: '01', title: 'Introduction', desc: 'Digital transformation is now a strategic pillar, and we support organizations moving from traditional operations to advanced digital services.' },
  { num: '02', title: 'About Us', desc: 'We deliver cloud computing, software platforms, managed operations, and digital solutions that improve efficiency and customer experience.' },
  { num: '03', title: 'Local Trust', desc: 'Our in-country hosting approach helps businesses and government entities meet regulatory and operational requirements with confidence.' },
  { num: '04', title: 'Growth Focus', desc: 'Every solution is designed to create business value, unlock new channels, and accelerate measurable digital revenue outcomes.' },
];

function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const s = {
  body: { background: C.bg, color: C.text, fontFamily: SFText, overflowX: 'hidden', cursor: 'none', margin: 0 },
  nav: (scrolled) => ({
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '0 48px', height: 64,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    transition: 'background 0.4s, border-color 0.4s',
    background: scrolled ? 'rgba(10,13,12,0.85)' : 'transparent',
    backdropFilter: scrolled ? 'blur(22px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(22px)' : 'none',
    borderBottom: `1px solid ${scrolled ? C.border : 'transparent'}`,
  }),
  navLogo: { display: 'flex', alignItems: 'center', textDecoration: 'none' },
  logoText: { fontFamily: SF, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.text, lineHeight: 1.2, opacity: 0.9 },
  navLinks: { display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0, position: 'absolute', left: '50%', transform: 'translateX(-50%)' },
  navLink: { fontSize: 13.5, color: C.muted, textDecoration: 'none', fontWeight: 400, fontFamily: SFText },
  navCta: { fontSize: 13.5, color: C.gold, textDecoration: 'none', fontWeight: 500, fontFamily: SFText, borderBottom: '1px solid rgba(211,185,136,0.4)', paddingBottom: 1 },

  hero: { position: 'relative', height: '100vh', minHeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: C.bg },
  blindsWrap: { position: 'absolute', top: '-25%', left: 0, right: 0, width: '100%', height: '150%', zIndex: 0, pointerEvents: 'none' },
  vignette: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #0A0D0C 100%)', zIndex: 1, pointerEvents: 'none' },
  vignetteBottom: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, background: 'linear-gradient(to bottom, transparent, #0A0D0C)', zIndex: 2, pointerEvents: 'none' },
  heroContent: { position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: 1160 },
  badge: { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', border: '1px solid rgba(211,185,136,0.25)', borderRadius: 9999, background: 'rgba(211,185,136,0.05)', fontSize: 12, fontWeight: 500, color: C.gold, letterSpacing: '0.04em', marginBottom: 32, fontFamily: SFText },
  badgeDot: { width: 5, height: 5, borderRadius: '50%', background: C.gold },
  h1: { fontFamily: SF, fontSize: 'clamp(36px,5.8vw,72px)', fontWeight: 800, lineHeight: 0.98, letterSpacing: '-0.025em', color: C.text, marginBottom: 24, maxWidth: 1080, marginInline: 'auto' },
  heroSub: { fontSize: 'clamp(15px,1.5vw,18px)', color: C.muted, lineHeight: 1.65, maxWidth: 700, margin: '0 auto 40px', fontFamily: SFText },
  heroBtns: { display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' },
  btnPrimary: { padding: '14px 32px', background: C.text, color: C.bg, border: 'none', borderRadius: 9999, fontFamily: SFText, fontSize: 14, fontWeight: 500, cursor: 'none', transition: 'background 0.25s, transform 0.15s', textDecoration: 'none', display: 'inline-block' },
  btnGhost: { padding: '14px 32px', background: 'rgba(255,255,255,0.07)', color: C.text, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 9999, fontFamily: SFText, fontSize: 14, fontWeight: 400, cursor: 'none', transition: 'all 0.25s', textDecoration: 'none', display: 'inline-block' },

  scrollInd: { position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 },
  scrollLabel: { fontSize: 10, fontFamily: SFMono, letterSpacing: '0.18em', color: C.muted, textTransform: 'uppercase' },
  scrollLine: { width: 1, height: 40, background: `linear-gradient(to bottom, ${C.muted}, transparent)` },

  statsBar: { borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: 'rgba(15,20,16,0.62)', padding: '0 48px' },
  statsInner: { maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' },
  statItem: (i) => ({ padding: '20px 18px', textAlign: 'center', borderRight: i < 3 ? `1px solid ${C.border}` : 'none' }),
  statVal: { fontFamily: SF, fontSize: 24, fontWeight: 600, color: 'rgba(240,237,230,0.9)', lineHeight: 1, marginBottom: 4, letterSpacing: '-0.01em' },
  statLabel: { fontSize: 10.5, color: 'rgba(122,148,144,0.82)', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: SFMono },
  introSection: { padding: '122px 48px 44px', background: C.bg },
  introShell: {
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    padding: '42px 36px',
    background: 'linear-gradient(180deg, rgba(15,20,16,0.58), rgba(10,13,12,0.78))',
  },
  introGrid: { display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 32, alignItems: 'stretch' },
  introTextWrap: { paddingRight: 8 },
  introVisual: {
    position: 'relative',
    minHeight: 380,
    border: `1px solid ${C.border}`,
    borderRadius: 10,
    overflow: 'hidden',
    background: 'linear-gradient(145deg, rgba(22,37,35,0.95) 0%, rgba(15,20,16,0.96) 55%, rgba(19,26,20,0.98) 100%)',
  },
  introVisualGlow: {
    position: 'absolute',
    width: 260,
    height: 260,
    right: -60,
    top: -40,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(211,185,136,0.22) 0%, rgba(211,185,136,0) 70%)',
    pointerEvents: 'none',
  },
  introVisualOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 20% 20%, rgba(92,127,120,0.2), transparent 40%), linear-gradient(180deg, transparent 0%, rgba(10,13,12,0.45) 100%)',
    pointerEvents: 'none',
  },
  introVisualContent: {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  introVisualLabel: { fontFamily: SFMono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.gold },
  introVisualTitle: { fontFamily: SF, fontSize: 26, lineHeight: 1.15, color: C.text, letterSpacing: '-0.01em', maxWidth: 280 },
  introVisualMeta: { fontSize: 13, color: C.muted, fontFamily: SFText, lineHeight: 1.6, maxWidth: 300 },
  introBars: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, alignItems: 'end', marginTop: 18 },
  introBar: (h, i) => ({
    height: h,
    borderRadius: 4,
    background: i % 2 ? 'linear-gradient(to top, rgba(92,127,120,0.9), rgba(37,64,58,0.6))' : 'linear-gradient(to top, rgba(211,185,136,0.9), rgba(112,95,69,0.55))',
    border: `1px solid ${C.border}`,
  }),
  servicesSection: { ...((bg = C.bg) => ({ padding: '74px 48px 144px', background: bg }))(C.bg) },
  servicesHeadWrap: {
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    padding: '34px 32px',
    background: 'linear-gradient(180deg, rgba(10,13,12,0.75), rgba(19,26,20,0.62))',
    marginBottom: 58,
  },
  servicesBodyWrap: {
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    padding: '0',
    overflow: 'hidden',
    background: 'linear-gradient(180deg, rgba(10,13,12,0.52), rgba(15,20,16,0.64))',
  },
  servicesHeadGrid: { display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 28, alignItems: 'end' },
  servicesLead: { ...((size, color, lh, maxWidth, ff) => ({ fontSize: size, color, lineHeight: lh, maxWidth, fontFamily: ff }))(16, C.muted, 1.7, 520, SFText) },

  section: (bg = C.bg) => ({ padding: '120px 48px', background: bg }),
  inner: { maxWidth: 1200, margin: '0 auto' },
  eyebrow: { fontFamily: SFMono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.green, marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 },
  h2: { fontFamily: SF, fontSize: 'clamp(32px,4vw,52px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.02em', color: C.text, marginBottom: 20 },
  subText: { fontSize: 16, color: C.muted, lineHeight: 1.65, maxWidth: 480, fontFamily: SFText },

  servicesGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: C.border, borderTop: `1px solid ${C.border}`, marginTop: 64 },
  card: (hovered) => ({ background: hovered ? C.surface2 : C.surface, padding: '40px 36px', position: 'relative', overflow: 'hidden', transition: 'background 0.25s', cursor: 'none' }),
  cardTopBorder: (hovered) => ({ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: C.green, transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.35s ease' }),
  cardNum: { position: 'absolute', top: 24, right: 28, fontFamily: SFMono, fontSize: 11, color: 'rgba(122,148,144,0.4)', letterSpacing: '0.08em' },
  cardIcon: { width: 40, height: 40, marginBottom: 24, color: C.green },
  cardTitle: { fontFamily: SF, fontSize: 18, fontWeight: 600, color: C.text, marginBottom: 10 },
  cardDesc: { fontSize: 13.5, color: C.muted, lineHeight: 1.65, marginBottom: 28, fontFamily: SFText },
  cardLink: (hovered) => ({ fontSize: 13, color: C.gold, textDecoration: 'none', fontWeight: 500, opacity: hovered ? 1 : 0, transition: 'opacity 0.25s', display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: SFText }),

  whySection: { background: C.deep, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: '120px 48px' },
  whyGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'start' },
  whyLeft: { position: 'sticky', top: 120 },
  whyCta: { fontSize: 14, color: C.gold, textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6, borderBottom: '1px solid rgba(211,185,136,0.3)', paddingBottom: 2, fontFamily: SFText },
  featureRow: (visible, i) => ({ display: 'grid', gridTemplateColumns: '52px 1fr', gap: 20, padding: '32px 0', borderBottom: '1px solid rgba(92,127,120,0.12)', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateX(24px)', transition: `opacity 0.6s ${i * 0.1}s ease, transform 0.6s ${i * 0.1}s ease` }),
  featureNum: { fontFamily: SFMono, fontSize: 12, color: C.bronze, paddingTop: 2 },
  featureTitle: { fontFamily: SF, fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 6 },
  featureDesc: { fontSize: 13.5, color: C.muted, lineHeight: 1.65, fontFamily: SFText },

  ctaSection: { position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '140px 48px', background: C.bg },
  ctaGlow: { position: 'absolute', width: 900, height: 500, left: '50%', top: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse, rgba(37,64,58,0.5) 0%, transparent 70%)', pointerEvents: 'none' },
  ctaH2: { fontFamily: SF, fontSize: 'clamp(36px,5vw,60px)', fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.025em', color: C.text, marginBottom: 20 },
  ctaSub: { fontSize: 16, color: C.muted, margin: '0 auto 44px', maxWidth: 440, lineHeight: 1.65, fontFamily: SFText },
  btnGold: { padding: '16px 40px', background: C.gold, color: C.bg, border: 'none', borderRadius: 9999, fontFamily: SFText, fontSize: 15, fontWeight: 500, cursor: 'none', textDecoration: 'none', display: 'inline-block' },
  ctaSecondary: { fontSize: 13.5, color: C.muted, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: SFText, marginTop: 16 },

  footer: { background: '#060908', borderTop: `1px solid ${C.border}`, padding: '64px 48px 36px' },
  footerInner: { maxWidth: 1200, margin: '0 auto' },
  footerTop: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 64, marginBottom: 56 },
  footerColTitle: { fontFamily: SFMono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.green, marginBottom: 20 },
  footerLink: { fontSize: 13.5, color: C.muted, textDecoration: 'none', display: 'block', marginBottom: 12, fontFamily: SFText },
  footerBottom: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 28, borderTop: `1px solid ${C.border}` },
  footerCopy: { fontSize: 12, color: 'rgba(122,148,144,0.5)', fontFamily: SFMono },
  footerSocials: { display: 'flex', gap: 20 },
  socialLink: { fontSize: 12, color: C.muted, textDecoration: 'none', fontFamily: SFMono, letterSpacing: '0.06em', textTransform: 'uppercase' },
};

function ServiceCard({ item, delay }) {
  const [ref, visible] = useReveal(0.1);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      style={{
        ...s.card(hovered),
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: `opacity 0.6s ${delay}s ease, transform 0.6s ${delay}s ease, background 0.25s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={s.cardTopBorder(hovered)} />
      <span style={s.cardNum}>{item.num}</span>
      <div style={s.cardIcon}>{item.icon}</div>
      <div style={s.cardTitle}>{item.title}</div>
      <div style={s.cardDesc}>{item.desc}</div>
      <a href="#" style={s.cardLink(hovered)}>Learn more →</a>
    </div>
  );
}

function FeatureRow({ item, index, visible }) {
  return (
    <div style={s.featureRow(visible, index)}>
      <div style={s.featureNum}>{item.num}</div>
      <div>
        <div style={s.featureTitle}>{item.title}</div>
        <div style={s.featureDesc}>{item.desc}</div>
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const ringRef = useRef({ x: -100, y: -100 });
  const mouseRef = useRef({ x: -100, y: -100 });
  const heroParallaxRef = useRef(null);
  const heroBgRef = useRef(null);

  const [statsRef, statsVisible] = useReveal(0.1);
  const [whyLeftRef, whyLeftVisible] = useReveal(0.1);
  const [whyFeatRef, whyFeatVisible] = useReveal(0.05);
  const [ctaRef, ctaVisible] = useReveal(0.1);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px), (hover: none), (pointer: coarse)');
    const update = () => setIsMobileView(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const onMove = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    document.addEventListener('mousemove', onMove);
    let raf;
    const animate = () => {
      setCursorPos({ ...mouseRef.current });
      ringRef.current.x += (mouseRef.current.x - ringRef.current.x) * 0.13;
      ringRef.current.y += (mouseRef.current.y - ringRef.current.y) * 0.13;
      setRingPos({ x: ringRef.current.x, y: ringRef.current.y });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      if (heroParallaxRef.current) heroParallaxRef.current.style.transform = `translateY(${y * 0.18}px)`;
      if (heroBgRef.current) heroBgRef.current.style.transform = `translateY(${y * 0.3}px)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${C.bg}; color: ${C.text}; font-family: ${SFText}; overflow-x: hidden; cursor: none; }
        a { cursor: none; }
        button { cursor: none; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeUpScroll { from { opacity: 0; transform: translate(-50%, 20px); } to { opacity: 1; transform: translate(-50%, 0); } }
        @keyframes dotPulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
        @keyframes scrollDrop {
          0%   { transform: scaleY(0); transform-origin: top;    opacity: 1; }
          50%  { transform: scaleY(1); transform-origin: top;    opacity: 1; }
          51%  { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
        .hero-badge   { animation: fadeUp 0.7s 0.1s both ease-out; }
        .hero-line-1  { animation: fadeUp 0.8s 0.3s both ease-out; }
        .hero-line-2  { animation: fadeUp 0.8s 0.46s both ease-out; }
        .hero-sub     { animation: fadeUp 0.8s 0.62s both ease-out; }
        .hero-btns    { animation: fadeUp 0.8s 0.78s both ease-out; }
        .scroll-ind   { animation: fadeUpScroll 0.8s 1.1s both ease-out; }
        .badge-dot    { animation: dotPulse 2s infinite; }
        .scroll-line  { animation: scrollDrop 1.8s 1.5s ease-in-out infinite; }
        .nav-link-el  { position:relative; padding-bottom:2px; }
        .nav-link-el::after { content:''; position:absolute; bottom:0; left:0; width:100%; height:1px; background:${C.gold}; transform:scaleX(0); transform-origin:left; transition:transform 0.3s ease; }
        .nav-link-el:hover { color:${C.text} !important; }
        .nav-link-el:hover::after { transform:scaleX(1); }
        .btn-primary:hover { background:${C.gold} !important; }
        .btn-ghost:hover { background:rgba(255,255,255,0.13) !important; }
        .btn-gold:hover { background:#e5ca9a !important; }
        .why-cta:hover { border-color:${C.gold} !important; }
        .footer-link:hover { color:${C.text} !important; }
        .social-link:hover { color:${C.gold} !important; }
        .eyebrow-line::before { content:''; display:inline-block; width:24px; height:1px; background:${C.green}; margin-right:12px; vertical-align:middle; }
        @media (max-width: 1024px) {
          .intro-grid { grid-template-columns: 1fr !important; }
          .services-head-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: repeat(2,1fr) !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .why-left-sticky { position: static !important; }
          .footer-top-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-brand-full { grid-column: 1 / -1 !important; }
        }
        @media (max-width: 768px) {
          .nav-links-hide { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .footer-top-grid { grid-template-columns: 1fr !important; }
          .hero-h1 { font-size: 38px !important; }
          nav { padding: 0 20px !important; }
          section, .section-pad { padding: 72px 20px !important; }
        }
      `}</style>

      <div style={{ position: 'fixed', width: 8, height: 8, background: C.gold, borderRadius: '50%', pointerEvents: 'none', zIndex: 9999, left: cursorPos.x, top: cursorPos.y, transform: 'translate(-50%,-50%)', transition: 'width 0.2s, height 0.2s' }} />
      <div style={{ position: 'fixed', width: 32, height: 32, border: '1px solid rgba(211,185,136,0.4)', borderRadius: '50%', pointerEvents: 'none', zIndex: 9998, left: ringPos.x, top: ringPos.y, transform: 'translate(-50%,-50%)' }} />

      <nav style={s.nav(scrolled)}>
        <a href="#" style={s.navLogo}>
          <Logo />
        </a>
        <ul style={s.navLinks} className="nav-links-hide" id="navlinks">
          {[['intro', 'Introduction'], ['services', 'Services'], ['why', 'Who We Are']].map(([id, label]) => (
            <li key={id}><a href={`#${id}`} style={s.navLink} className="nav-link-el" onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{label}</a></li>
          ))}
        </ul>
        <a href="#cta" style={s.navCta} onClick={(e) => { e.preventDefault(); scrollTo('cta'); }}>Get In Touch ↗</a>
      </nav>

      <section style={s.hero} id="hero">
        <div style={{ ...s.blindsWrap, pointerEvents: 'none' }} ref={heroBgRef}>
          <GradientBlinds
            gradientColors={HERO_GRADIENT_COLORS}
            autoAnimate={isMobileView}
            disablePointerInteraction={isMobileView}
            autoAnimateSpeed={0.8}
            autoAnimateRange={0.22}
            angle={-35}
            noise={0.05}
            blindCount={14}
            blindMinWidth={60}
            spotlightRadius={0.22}
            spotlightSoftness={1.6}
            spotlightOpacity={0.16}
            mouseDampening={0.06}
            distortAmount={0.4}
            shineDirection="left"
            mixBlendMode="normal"
          />
        </div>
        <div style={s.vignette} />
        <div style={s.vignetteBottom} />

        <div style={s.heroContent} ref={heroParallaxRef}>
          <div style={s.badge} className="hero-badge"><span style={s.badgeDot} className="badge-dot" />Digital Transformation Partner</div>
          <h1 style={s.h1} className="hero-h1">
            <span style={{ display: 'block', opacity: 0, transform: 'translateY(40px)' }} className="hero-line-1">Empowering Digital Transformation</span>
            <span style={{ display: 'block', opacity: 0, transform: 'translateY(40px)' }} className="hero-line-2">Through Cloud, Software, and Smart Services</span>
          </h1>
          <p style={{ ...s.heroSub, opacity: 0, transform: 'translateY(20px)' }} className="hero-sub">We help businesses and industries accelerate their digital journey through secure cloud services, local hosting, managed operations, software, mobile applications, and revenue-driven digital solutions.</p>
          <div style={{ ...s.heroBtns, opacity: 0, transform: 'translateY(20px)' }} className="hero-btns">
            <a href="#cta" style={s.btnPrimary} className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('cta'); }}>Get Started</a>
            <a href="#services" style={s.btnGhost} className="btn-ghost" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Explore Services</a>
          </div>
        </div>

        <div
          style={{
            ...s.scrollInd,
            opacity: scrolled ? 0 : 1,
            visibility: scrolled ? 'hidden' : 'visible',
            transition: 'opacity 0.25s ease, visibility 0.25s ease',
          }}
          className={!scrolled ? 'scroll-ind' : ''}
        >
          <span style={s.scrollLabel}>Scroll</span>
          <div style={s.scrollLine} className="scroll-line" />
        </div>
      </section>

      <div style={s.statsBar}>
        <div style={s.statsInner} className="stats-grid">
          {[
            { val: '99.99%', label: 'Uptime' },
            { val: '10 Gbps', label: 'Network' },
            { val: '24/7', label: 'Support' },
            { val: 'Local', label: 'Data Residency' },
          ].map((st, i) => (
            <div key={i} style={s.statItem(i)}>
              <div style={s.statVal}>{st.val}</div>
              <div style={s.statLabel}>{st.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={s.introSection} id="intro">
        <div style={s.inner}>
          <div style={s.introShell}>
            <div style={s.introGrid} className="intro-grid">
            <div style={s.introTextWrap}>
              <div style={s.eyebrow} className="eyebrow-line">Introduction</div>
              <h2 style={{ ...s.h2, marginBottom: 14 }}>Helping organizations move from traditional operations to advanced digital and e-services.</h2>
              <p style={{ ...s.subText, maxWidth: 660 }}>
                Our mission is to support digital transformation through reliable cloud computing services, modern software platforms, and end-to-end digital solutions that improve efficiency, enhance customer experience, and unlock new revenue opportunities.
              </p>
            </div>

            <div style={s.introVisual}>
              <div style={s.introVisualGlow} />
              <div style={s.introVisualOverlay} />
              <div style={s.introVisualContent}>
                <div>
                  <div style={s.introVisualLabel}>Visual Placeholder</div>
                  <h3 style={s.introVisualTitle}>Digital Transformation Command View</h3>
                  <p style={s.introVisualMeta}>
                    Placeholder area for a future image (team, datacenter, dashboard, or industry scene) that fits the premium dark theme.
                  </p>
                </div>
                <div style={s.introBars}>
                  {[48, 84, 62, 98].map((h, i) => (
                    <div key={h} style={s.introBar(h, i)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section style={s.servicesSection} id="services">
        <div style={s.inner}>
          <div style={s.servicesHeadWrap}>
            <div style={s.servicesHeadGrid} className="services-head-grid">
              <div>
                <div style={s.eyebrow} className="eyebrow-line">Services</div>
                <h2 style={{ ...s.h2, marginBottom: 0 }}>Cloud, software, and smart business solutions<br />for sustainable growth</h2>
              </div>
              <p style={s.servicesLead}>From infrastructure and local SaaS to mobile and digital marketing, we build practical services that support both B2B and B2C success.</p>
            </div>
          </div>
        </div>
        <div style={s.inner}>
          <div style={s.servicesBodyWrap}>
            <div style={{ ...s.servicesGrid, marginTop: 0, borderTop: 'none' }} className="services-grid">
              {services.map((item, i) => <ServiceCard key={i} item={item} delay={i * 0.07} />)}
            </div>
          </div>
        </div>
      </section>

      <section style={s.whySection} id="why">
        <div style={s.inner}>
          <div style={s.whyGrid} className="why-grid">
            <div ref={whyLeftRef} style={{ ...s.whyLeft, opacity: whyLeftVisible ? 1 : 0, transform: whyLeftVisible ? 'none' : 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }} className="why-left-sticky">
              <div style={s.eyebrow} className="eyebrow-line">Who We Are</div>
              <h2 style={s.h2}>Syrian Cloud Computing:<br />Introduction & About</h2>
              <p style={{ ...s.subText, marginBottom: 32, maxWidth: 430 }}>We support businesses and industries with secure cloud infrastructure, managed operations, locally hosted software, and revenue-focused digital services designed for real-world market impact.</p>
              <a href="#cta" style={s.whyCta} className="why-cta" onClick={(e) => { e.preventDefault(); scrollTo('cta'); }}>Talk with our team →</a>
            </div>
            <div ref={whyFeatRef} style={{ display: 'flex', flexDirection: 'column' }}>
              {features.map((item, i) => <FeatureRow key={i} item={item} index={i} visible={whyFeatVisible} />)}
            </div>
          </div>
        </div>
      </section>

      <section style={s.ctaSection} id="cta">
        <div style={s.ctaGlow} />
        <div style={{ position: 'absolute', width: 400, height: 200, left: '50%', top: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse, rgba(211,185,136,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div ref={ctaRef} style={{ ...s.inner, position: 'relative', zIndex: 1, opacity: ctaVisible ? 1 : 0, transform: ctaVisible ? 'none' : 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <div style={{ ...s.eyebrow, justifyContent: 'center' }}>Get Started</div>
          <h2 style={s.ctaH2}>Ready to accelerate your<br />digital transformation journey?</h2>
          <p style={s.ctaSub}>Let us design the right mix of cloud, software, mobile, and digital growth services for your organization.</p>
          <div style={{ marginBottom: 16 }}><a href="mailto:hello@syriancloud.com" style={s.btnGold} className="btn-gold">Start Your Journey</a></div>
          <a href="tel:+963" style={s.ctaSecondary} className="cta-secondary">Talk to an engineer →</a>
        </div>
      </section>

      <footer style={s.footer}>
        <div style={s.footerInner}>
          <div style={s.footerTop} className="footer-top-grid">
            <div className="footer-brand-full">
              <a href="#" style={s.navLogo}><Logo footer /></a>
              <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.7, maxWidth: 280, marginTop: 16, fontFamily: SFText }}>Building reliable cloud infrastructure for businesses across Syria and the region. Grounded locally, scaled globally.</p>
            </div>
            <div>
              <div style={s.footerColTitle}>Navigation</div>
              {[['#services', 'What We Do'], ['#why', 'Our Philosophy'], ['#cta', 'Insights'], ['#cta', 'Contact']].map(([href, label]) => <a key={label} href={href} style={s.footerLink} className="footer-link">{label}</a>)}
            </div>
            <div>
              <div style={s.footerColTitle}>Contact</div>
              <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.8, fontFamily: SFText }}>
                Damascus, Syria<br /><br />
                <a href="mailto:hello@syriancloud.com" style={{ color: C.muted, textDecoration: 'none' }} className="footer-link">hello@syriancloud.com</a><br />
                <a href="tel:+963" style={{ color: C.muted, textDecoration: 'none' }} className="footer-link">+963 (0) XXX XXX XXX</a>
              </p>
            </div>
          </div>
          <div style={s.footerBottom}>
            <div style={s.footerCopy}>© 2025 Syrian Cloud Computing. All rights reserved.</div>
            <div style={s.footerSocials}><a href="#" style={s.socialLink} className="social-link">LinkedIn</a><a href="#" style={s.socialLink} className="social-link">Twitter</a></div>
          </div>
        </div>
      </footer>
    </>
  );
}
