import { useState } from 'react'
import { useLang } from '../i18n/lang'
import { projects, type SceneId } from '../data/projects'
import { Icon, Reveal } from './primitives'
import { Stage } from '../three/Stage'

const scenes = projects.filter((p) => p.scene)

const CAMERAS: Record<SceneId, [number, number, number]> = {
  wristband: [11, 9, 12],
  vision: [8, 6, 11],
  rig: [9, 4, 10.5],
}

export function Lab() {
  const { t } = useLang()
  const [current, setCurrent] = useState(scenes[0]?.id ?? '')
  const project = scenes.find((p) => p.id === current) ?? scenes[0]
  if (!project?.scene) return null

  return (
    <section className="section lab" id="laboratorio">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">03 — {t({ es: 'Laboratorio 3D', en: '3D Lab' })}</p>
            <h2 className="section-title">{t({ es: 'Tres escenas, en vivo', en: 'Three scenes, live' })}</h2>
            <p className="section-sub">
              {t({
                es: 'No son videos ni capturas: cada escena corre en tu navegador con three.js. Gíralas, acércalas, déjalas trabajar.',
                en: 'These are not videos or screenshots: every scene runs in your browser with three.js. Rotate them, zoom in, let them work.',
              })}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="lab__tabs" role="tablist">
            {scenes.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={s.id === current}
                className={`lab__tab ${s.id === current ? 'is-on' : ''}`}
                onClick={() => setCurrent(s.id)}
              >
                <i/>
                {s.title}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="lab__stage">
            <div className="lab__viewport">
              {/* key: al cambiar de escena se desmonta el canvas anterior y se libera la GPU */}
              <Stage key={project.id} kind={project.scene} camera={CAMERAS[project.scene]} fov={42}/>
              <span className="lab__hint">
                <Icon name="rotate" size={12}/> {t({ es: 'ARRASTRA PARA GIRAR · RUEDA PARA ACERCAR', en: 'DRAG TO ORBIT · SCROLL TO ZOOM' })}
              </span>
            </div>

            <div className="lab__panel">
              <span className={`status status--${project.status}`}>{project.status}</span>
              <h3>{project.title}</h3>
              <p>{t(project.description)}</p>
              {project.highlights && (
                <ul className="lab__list">
                  {project.highlights.map((h, i) => <li key={i}>{t(h)}</li>)}
                </ul>
              )}
              <div className="lab__panel-foot">
                {project.tech.slice(0, 4).map((tech) => <span className="chip" key={tech}>{tech}</span>)}
                {project.link && (
                  <a className="btn btn--sm" href={project.link} target="_blank" rel="noopener noreferrer">
                    {t({ es: 'Abrir el original', en: 'Open the original' })}
                    <Icon name="external" size={14}/>
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
