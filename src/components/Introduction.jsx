import { s } from '../styles';
import { useLang } from '../i18n/LanguageContext';

const BAR_HEIGHTS = [48, 84, 62, 98];

export default function Introduction() {
  const { t } = useLang();
  return (
    <section style={s.introSection} id="intro">
      <div style={s.inner}>
        <div style={s.introShell}>
          <div style={s.introGrid} className="intro-grid">
            <div style={s.introTextWrap}>
              <div style={s.eyebrow} className="eyebrow-line">{t.intro.eyebrow}</div>
              <h2 style={{ ...s.h2, marginBottom: 14 }} className="section-h2">{t.intro.title}</h2>
              <p style={{ ...s.subText, maxWidth: 660 }} className="section-subtext">{t.intro.body}</p>
            </div>

            <div style={s.introVisual}>
              <div style={s.introVisualGlow} />
              <div style={s.introVisualOverlay} />
              <div style={s.introVisualContent}>
                <div>
                  <div style={s.introVisualLabel}>{t.intro.visualLabel}</div>
                  <h3 style={s.introVisualTitle}>{t.intro.visualTitle}</h3>
                  <p style={s.introVisualMeta}>{t.intro.visualMeta}</p>
                </div>
                <div style={s.introBars}>
                  {BAR_HEIGHTS.map((h, i) => (
                    <div key={h} style={s.introBar(h, i)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
