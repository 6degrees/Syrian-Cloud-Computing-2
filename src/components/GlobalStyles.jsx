import { C, SFText } from '../theme';

// Arabic font stack — uses system Arabic faces + Cairo/Tajawal as web fallback if present
const AR_STACK = `'Cairo', 'Tajawal', -apple-system-ui-serif, 'SF Arabic', 'Geeza Pro', 'Al Bayan', Tahoma, ${SFText}`;

export default function GlobalStyles() {
  return (
    <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: ${C.bg}; color: ${C.text}; font-family: ${SFText}; overflow-x: hidden; }

      html[dir="rtl"] body { font-family: ${AR_STACK}; }

      @media (pointer: fine) and (prefers-reduced-motion: no-preference) {
        body, a, button { cursor: none; }
      }

      :focus-visible { outline: 2px solid ${C.gold}; outline-offset: 2px; border-radius: 4px; }

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
      .eyebrow-line::before { content:''; display:inline-block; width:24px; height:1px; background:${C.green}; margin-inline-end:12px; vertical-align:middle; }
      .lang-toggle { background:transparent; color:${C.gold}; border:1px solid rgba(211,185,136,0.4); border-radius:9999px; padding:6px 14px; font-size:12px; font-weight:600; letter-spacing:0.08em; font-family:${SFText}; }
      .lang-toggle:hover { background:rgba(211,185,136,0.08); }
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
  );
}
