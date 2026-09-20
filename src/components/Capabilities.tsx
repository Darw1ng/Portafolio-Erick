import { useLang } from '../i18n/lang'
import { alsoWorkWith, capabilities, skillGroups } from '../data/skills'
import { Icon, Reveal, useInView } from './primitives'

function SkillBar({ name, level }: { name: string; level: number }) {
  const { ref, inView } = useInView<HTMLDivElement>('-5% 0px')
  return (
    <div className="skill" ref={ref}>
      <div className="skill__top">
        <span>{name}</span>
        <span className="skill__level">{level}%</span>
      </div>
      <div className="skill__bar">
        <div className="skill__fill" style={{ width: inView ? `${level}%` : 0 }}/>
      </div>
    </div>
  )
}

export function Capabilities() {
  const { t } = useLang()

  return (
    <section className="section" id="capacidades">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">02 — {t({ es: 'Capacidades', en: 'Capabilities' })}</p>
            <h2 className="section-title">{t({ es: 'Qué sé hacer, y hasta dónde', en: 'What I can do, and how far' })}</h2>
            <p className="section-sub">
              {t({
                es: 'Los porcentajes son honestos: donde digo 55 % es nivel medio con práctica real, no un curso de fin de semana.',
                en: 'The percentages are honest: 55% means intermediate with real practice, not a weekend course.',
              })}
            </p>
          </div>
        </Reveal>

        <div className="caps">
          {capabilities.map((c, i) => (
            <Reveal key={c.icon} delay={i * 80}>
              <article className="cap">
                <div className="cap__icon"><Icon name={c.icon} size={22}/></div>
                <h3>{t(c.title)}</h3>
                <p>{t(c.body)}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="skills">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title.es} delay={i * 90}>
              <div className="skills__group">
                <h3>{t(g.title)}</h3>
                {g.items.map((s) => <SkillBar key={s.name} {...s}/>)}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="tags-cloud">
            {alsoWorkWith.map((tag) => <span className="chip" key={tag}>{tag}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
