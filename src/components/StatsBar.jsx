import { s } from '../styles';
import { useLang } from '../i18n/LanguageContext';

export default function StatsBar() {
  const { t } = useLang();
  const stats = t.stats.items;

  return (
    <div style={s.statsBar} className="stats-bar">
      <div style={s.statsInner} className="stats-grid">
        {stats.map((st, i) => (
          <div key={`${st.val}-${st.label}`} style={s.statItem(i)}>
            <div style={s.statVal}>{st.val}</div>
            <div style={s.statLabel}>{st.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
