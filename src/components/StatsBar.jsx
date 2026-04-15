import { s } from '../styles';
import { useLang } from '../i18n/LanguageContext';

export default function StatsBar() {
  const { t } = useLang();
  const stats = [
    { val: '99.99%', label: t.stats.uptimeLabel },
    { val: '10 Gbps', label: t.stats.networkLabel },
    { val: '24/7', label: t.stats.supportLabel },
    { val: t.stats.localValue, label: t.stats.localLabel },
  ];

  return (
    <div style={s.statsBar}>
      <div style={s.statsInner} className="stats-grid">
        {stats.map((st, i) => (
          <div key={st.label} style={s.statItem(i)}>
            <div style={s.statVal}>{st.val}</div>
            <div style={s.statLabel}>{st.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
