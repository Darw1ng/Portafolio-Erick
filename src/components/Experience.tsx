import { useLang } from '../i18n/lang'
import { credentials, timeline } from '../data/timeline'
import { Reveal } from './primitives'

export function Experience() {
  const { t } = useLang()

  return (
    <section className="section" id="trayectoria">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">06 — {t({ es: 'Trayectoria', en: 'Path' })}</p>
            <h2 className="section-title">{t({ es: 'Mi recorrido hasta aquí', en: 'How I got here' })}</h2>
          </div>
        </Reveal>

        <div className="timeline">
          {timeline.map((item, i) => (
            <Reveal key={item.title.es} delay={i * 60}>
              <div className={`tl-item ${item.active ? 'is-active' : ''}`}>
                <p className="tl-item__period">{t(item.period)}</p>
                <h3 className="tl-item__title">
                  {t(item.title)}
                  {item.active && <span className="tl-live">● {t({ es: 'ACTIVO', en: 'ACTIVE' })}</span>}
                  {item.badge && <span className="tl-badge">{t(item.badge)}</span>}
                </h3>
                <p className="tl-item__body">{t(item.body)}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="creds">
          {credentials.map((group, i) => (
            <Reveal key={group.title.es} delay={i * 80}>
              <div className="cred">
                <h3>{t(group.title)}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.main.es}>
                      <div className="cred__main">{t(item.main)}</div>
                      <div className="cred__sub">{t(item.sub)}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <>
      <section className="section contact" id="contacto">
        <div className="contact__glow"/>
        <div className="wrap contact__inner">
          <Reveal>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>07 — {t({ es: 'Contacto', en: 'Contact' })}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="contact__title">{t({ es: 'Hablemos', en: 'Let us talk' })}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="contact__text">
              {t({
                es: '¿Tienes un proyecto en mente o quieres colaborar? Escríbeme y lo platicamos.',
                en: 'Got a project in mind or want to collaborate? Write to me and we will talk it through.',
              })}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <a className="contact__mail" href="mailto:jimdom340@gmail.com">jimdom340@gmail.com</a>
          </Reveal>
          <Reveal delay={240}>
            <div className="contact__links">
              <a className="btn btn--solid" href="mailto:jimdom340@gmail.com">{t({ es: 'Enviar correo', en: 'Send an email' })}</a>
              <a className="btn" href="https://github.com/Darw1ng" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer__inner">
          <span>© {year} ERICK</span>
          <span>{t({ es: 'HECHO CON REACT, THREE.JS Y PACIENCIA', en: 'BUILT WITH REACT, THREE.JS AND PATIENCE' })}</span>
          <a href="https://github.com/Darw1ng" target="_blank" rel="noopener noreferrer">@Darw1ng</a>
        </div>
      </footer>
    </>
  )
}
