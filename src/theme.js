// Brand tokens, fonts, and shared constants
export const C = {
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

export const SF = `'Poppins', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif`;
export const SFText = `'Poppins', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif`;
export const SFMono = `'SF Mono', ui-monospace, 'Cascadia Code', 'Fira Code', monospace`;

// Stable ref so GradientBlinds doesn't reinit WebGL on every scroll (was causing flicker)
export const HERO_GRADIENT_COLORS = ['#162523', '#162523', '#25403A', '#5C7F78', '#D3B988', '#705F45', '#25403A', '#162523'];
