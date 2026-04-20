import { C, SFText } from '../theme';

// Arabic font stack — Alexandria via Google Fonts, with system Arabic faces as fallback
const AR_STACK = `'Alexandria', -apple-system-ui-serif, 'SF Arabic', 'Geeza Pro', 'Al Bayan', Tahoma, ${SFText}`;

export default function GlobalStyles() {
  return (
    <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-padding-top: 80px; }
      body { background: ${C.bg}; color: ${C.text}; font-family: ${SFText}; overflow-x: hidden; }
      main:focus { outline: none; }

      html[dir="rtl"] body { font-family: ${AR_STACK}; }


      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.001ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.001ms !important;
          scroll-behavior: auto !important;
        }
      }

      :focus-visible { outline: 2px solid ${C.gold}; outline-offset: 2px; border-radius: 4px; }

      /* Skip link — visually hidden until focused */
      .skip-link {
        position: fixed; top: 12px; left: 12px; z-index: 200;
        background: ${C.gold}; color: ${C.bg};
        padding: 10px 16px; border-radius: 8px;
        font-family: ${SFText}; font-size: 13px; font-weight: 600;
        text-decoration: none;
        transform: translateY(-150%);
        transition: transform 0.2s ease;
      }
      .skip-link:focus { transform: translateY(0); }
      html[dir="rtl"] .skip-link { left: auto; right: 12px; }

      @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
      @keyframes fadeUpScroll { from { opacity: 0; transform: translate(-50%, 20px); } to { opacity: 1; transform: translate(-50%, 0); } }
      @keyframes scrollDrop {
        0%   { transform: scaleY(0); transform-origin: top;    opacity: 1; }
        50%  { transform: scaleY(1); transform-origin: top;    opacity: 1; }
        51%  { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
        100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
      }
      .hero-line-1  { animation: fadeUp 0.8s 0.1s both ease-out; }
      .hero-line-2  { animation: fadeUp 0.8s 0.26s both ease-out; }
      .hero-sub     { animation: fadeUp 0.8s 0.42s both ease-out; }
      .hero-btns    { animation: fadeUp 0.8s 0.58s both ease-out; }
      .scroll-ind   { animation: fadeUpScroll 0.8s 0.9s both ease-out; }
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
      /* Light-theme overrides for the Why Us section */
      #why .why-cta:hover { border-color: #3A5F58 !important; }
      #why .section-h2 { color: #111 !important; }
      #why .section-subtext { color: #555 !important; }
      .lang-toggle { background:${C.text}; color:${C.bg}; border:none; border-radius:9999px; padding:6px 14px; font-size:12px; font-weight:600; letter-spacing:0.08em; font-family:${SFText}; cursor:pointer; }
      .lang-toggle:hover { background:${C.gold}; }

      /* Mobile hamburger button — hidden on desktop */
      .nav-menu-btn {
        display: none;
        background: transparent; border: 1px solid rgba(255,255,255,0.12);
        border-radius: 8px; padding: 8px; width: 40px; height: 40px;
        align-items: center; justify-content: center;
      }
      .nav-menu-btn:hover { background: rgba(255,255,255,0.05); }
      .nav-menu-icon { position: relative; width: 18px; height: 14px; display: inline-block; }
      .nav-menu-icon span {
        position: absolute; left: 0; right: 0; height: 1.5px; background: ${C.text};
        border-radius: 2px; transition: transform 0.25s ease, opacity 0.2s ease, top 0.25s ease;
      }
      .nav-menu-icon span:nth-child(1) { top: 0; }
      .nav-menu-icon span:nth-child(2) { top: 6px; }
      .nav-menu-icon span:nth-child(3) { top: 12px; }
      .nav-menu-icon.open span:nth-child(1) { top: 6px; transform: rotate(45deg); }
      .nav-menu-icon.open span:nth-child(2) { opacity: 0; }
      .nav-menu-icon.open span:nth-child(3) { top: 6px; transform: rotate(-45deg); }

      /* Mobile drawer */
      .mobile-drawer {
        position: fixed; top: 64px; inset-inline-end: 0;
        width: min(320px, 85vw); height: calc(100vh - 64px);
        background: rgba(10,13,12,0.96);
        backdrop-filter: blur(22px); -webkit-backdrop-filter: blur(22px);
        border-inline-start: 1px solid ${C.border};
        padding: 32px 28px; z-index: 90;
        transform: translateX(100%); transition: transform 0.3s ease;
        visibility: hidden;
      }
      html[dir="rtl"] .mobile-drawer { transform: translateX(-100%); }
      .mobile-drawer.open { transform: translateX(0); visibility: visible; }
      .mobile-drawer-list { list-style: none; display: flex; flex-direction: column; gap: 4px; }
      .mobile-drawer-list a {
        display: block; padding: 16px 4px; font-size: 16px; font-weight: 500;
        color: ${C.text}; text-decoration: none; border-bottom: 1px solid rgba(92,127,120,0.12);
        font-family: ${SFText};
      }
      .mobile-drawer-list a:hover { color: ${C.gold}; }
      .mobile-drawer-cta { color: ${C.gold} !important; font-weight: 600 !important; }
      .mobile-drawer-backdrop {
        position: fixed; inset: 0; background: rgba(0,0,0,0.5);
        z-index: 80; opacity: 0; visibility: hidden;
        transition: opacity 0.25s ease, visibility 0.25s ease;
      }
      .mobile-drawer-backdrop.open { opacity: 1; visibility: visible; }

      @media (max-width: 1024px) {
        .intro-grid { grid-template-columns: 1fr !important; }
        .services-head-grid { grid-template-columns: 1fr !important; }
        .services-grid { grid-template-columns: repeat(2,1fr) !important; }
        .why-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
        .why-left-sticky { position: static !important; }
        .footer-top-grid { grid-template-columns: 1fr 1fr !important; }
        .footer-brand-full { grid-column: 1 / -1 !important; }
      }

      /* Unified horizontal padding across the site — one value per breakpoint.
         Anything painted as a top-level band (nav, hero, stats, sections, footer)
         should match these values so content edges line up down the page. */
      nav, #hero, .stats-bar, footer { padding-inline: 48px; }

      @media (max-width: 768px) {
        .nav-links-hide { display: none !important; }
        .nav-cta-desktop { display: none !important; }
        .nav-menu-btn { display: inline-flex !important; }
        .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        .services-grid { grid-template-columns: 1fr !important; }
        .footer-top-grid { grid-template-columns: 1fr !important; }
        .hero-h1 { font-size: 34px !important; }
        .hero-sub { font-size: 14px !important; line-height: 1.55 !important; }
        .section-h2 { font-size: 30px !important; line-height: 1.15 !important; }
        .section-subtext { font-size: 14px !important; line-height: 1.6 !important; }
        .card-title { font-size: 16px !important; }
        .card-desc { font-size: 12.5px !important; }
        .nav-cta, .btn-primary, .btn-ghost, .btn-gold { font-size: 13px !important; }
        nav, #hero, .stats-bar, footer { padding-inline: 20px !important; }
        section, .section-pad { padding-top: 72px !important; padding-bottom: 72px !important; padding-inline: 20px !important; }
      }
    `}</style>
  );
}
