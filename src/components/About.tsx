import { useLang } from '../i18n/lang'
import { about, stats } from '../data/timeline'
import { Reveal } from './primitives'

export function About() {
  const { t } = useLang()

  return (
    <section className="section" id="perfil">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">01 — {t({ es: 'Perfil', en: 'About' })}</p>
            <h2 className="section-title">{t({ es: 'Quién está detrás', en: 'Who is behind this' })}</h2>
          </div>
        </Reveal>

        <div className="about__grid">
          <Reveal>
            <div>
              <p className="about__lead">
                {t({ es: 'Soy Erick, ingeniero en sistemas y ', en: 'I am Erick, a systems engineer and ' })}
                <b>{t({ es: 'desarrollador full stack', en: 'full stack developer' })}</b>.
              </p>
              <div className="about__body">
                {about.body.map((p, i) => <p key={i}>{t(p)}</p>)}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <div className="facts">
                {about.facts.map((f) => (
                  <div className="fact" key={f.label.es}>
                    <span className="fact__label">{t(f.label)}</span>
                    <span className="fact__value">{t(f.value)}</span>
                  </div>
                ))}
              </div>
              <div className="stats">
                {stats.map((s) => (
                  <div className="stat" key={s.label.es}>
                    <div className="stat__value">{s.value}</div>
                    <div className="stat__label">{t(s.label)}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
