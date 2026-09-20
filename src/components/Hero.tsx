import { useLang } from '../i18n/lang'
import { Icon } from './primitives'
import { Stage } from '../three/Stage'
import { alsoWorkWith } from '../data/skills'

export function Hero() {
  const { t } = useLang()

  return (
    <section className="hero" id="inicio">
      <div className="hero__canvas">
        <Stage kind="hero" camera={[0.4, 0.6, 11]} fov={50} idleFirst fallback={<div/>}/>
      </div>

      <div className="hero__inner">
        <p className="hero__hi">{t({ es: 'Hola, soy', en: 'Hi, I am' })}</p>
        <h1 className="hero__name">ERICK</h1>
        <p className="hero__role">
          {t({ es: 'Desarrollador ', en: '' })}
          <b>Full Stack</b>
          {t({ es: ' · Ing. en Sistemas Computacionales', en: ' Developer · Computer Systems Engineer' })}
        </p>
        <p className="hero__desc">
          {t({
            es: 'Construyo productos completos —frontend, backend, base de datos e infraestructura— y los llevo hasta producción con usuarios y pagos reales. También donde el software toca el mundo físico: rastreo, visión por computadora y fierro.',
            en: 'I build complete products —frontend, backend, database and infrastructure— and take them to production with real users and real payments. Also where software meets the physical world: tracking, computer vision and hardware.',
          })}
        </p>
        <div className="hero__cta">
          <a className="btn btn--solid" href="#laboratorio">
            {t({ es: 'Ver el laboratorio 3D', en: 'Enter the 3D lab' })}
            <Icon name="arrow" size={16}/>
          </a>
          <a className="btn" href="#proyectos">{t({ es: 'Proyectos', en: 'Work' })}</a>
        </div>
      </div>

      <div className="hero__meta">
        <div className="hero__socials">
          <a href="https://github.com/Darw1ng" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" size={19}/></a>
          <a href="mailto:jimdom340@gmail.com" aria-label="Email"><Icon name="mail" size={19}/></a>
          <span>VERACRUZ · MX</span>
        </div>
        <a className="hero__scroll" href="#perfil">
          <i/>
          {t({ es: 'DESLIZA', en: 'SCROLL' })}
        </a>
      </div>
    </section>
  )
}

export function StackMarquee() {
  // la lista va duplicada: el track se desplaza justo un 50% y el ciclo no se nota
  const row = [...alsoWorkWith, ...alsoWorkWith]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((s, i) => <span key={`${s}-${i}`}>{s}</span>)}
      </div>
    </div>
  )
}
