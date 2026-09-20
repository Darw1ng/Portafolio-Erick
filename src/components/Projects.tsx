import { useMemo, useState } from 'react'
import { useLang } from '../i18n/lang'
import { categories, projects, type Category, type Project } from '../data/projects'
import { Icon, Reveal, useModalBehavior } from './primitives'

const CAT_TONE: Record<Category, string> = {
  producto: '#4cc9f0',
  salud: '#34d399',
  rastreo: '#f472b6',
  ia: '#a78bfa',
  web: '#fbbf24',
  hardware: '#fb923c',
}

/** Portada generada cuando el proyecto no tiene captura: patrón técnico + iniciales. */
function CardArt({ project }: { project: Project }) {
  const tone = CAT_TONE[project.category]
  const initials = project.title.replace(/[^A-Za-zÁÉÍÓÚÑáéíóúñ0-9 ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()

  return (
    <svg viewBox="0 0 320 200" width="100%" height="100%" aria-hidden="true">
      <defs>
        <pattern id={`p-${project.id}`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill={tone} opacity="0.22"/>
        </pattern>
        <linearGradient id={`g-${project.id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={tone} stopOpacity="0.16"/>
          <stop offset="100%" stopColor={tone} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#p-${project.id})`}/>
      <rect width="320" height="200" fill={`url(#g-${project.id})`}/>
      <text x="160" y="112" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontSize="58" fontWeight="700" fill={tone} opacity="0.5">{initials}</text>
      <path d="M0 160 L110 160 L128 178 L320 178" fill="none" stroke={tone} strokeWidth="1" opacity="0.35"/>
    </svg>
  )
}

function Card({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { t } = useLang()
  return (
    <button className={`card ${project.scene ? 'card--3d' : ''}`} onClick={onOpen} aria-label={project.title}>
      <div className={`card__media ${project.image ? '' : 'card__media--empty'}`}>
        <div className="card__badges">
          <span className={`status status--${project.status}`}>{project.status}</span>
          <span className="card__year">{project.year}</span>
        </div>
        {project.image ? <img src={project.image} alt={project.title} loading="lazy"/> : <CardArt project={project}/>}
        {project.scene && <span className="card__scene-tag">● {t({ es: 'ESCENA 3D EN EL LABORATORIO', en: '3D SCENE IN THE LAB' })}</span>}
      </div>
      <div className="card__body">
        <h3 className="card__title">{project.title}</h3>
        <p className="card__summary">{t(project.summary)}</p>
        <div className="card__tech">
          {project.tech.slice(0, 3).map((tech) => <span className="chip" key={tech}>{tech}</span>)}
          {project.tech.length > 3 && <span className="chip">+{project.tech.length - 3}</span>}
        </div>
        <span className="card__more">{t({ es: 'VER DETALLE', en: 'VIEW DETAIL' })} <Icon name="arrow" size={13}/></span>
      </div>
    </button>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t } = useLang()
  useModalBehavior(true, onClose)

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__close-wrap">
          <button className="modal__close" onClick={onClose} aria-label={t({ es: 'Cerrar', en: 'Close' })}>
            <Icon name="close" size={17}/>
          </button>
        </div>
        {project.image && (
          <div className="modal__media">
            <img src={project.image} alt={project.title}/>
          </div>
        )}
        <div className="modal__body">
          <div className="modal__head">
            <h2>{project.title}</h2>
            <span className={`status status--${project.status}`}>{project.status}</span>
            <span className="card__year">{project.year}</span>
          </div>
          <p className="modal__desc">{t(project.description)}</p>
          {project.highlights && (
            <ul className="modal__hl">
              {project.highlights.map((h, i) => <li key={i}>{t(h)}</li>)}
            </ul>
          )}
          <div className="card__tech">
            {project.tech.map((tech) => <span className="chip" key={tech}>{tech}</span>)}
          </div>
          <div className="modal__foot">
            {project.link ? (
              <a className="btn btn--solid btn--sm" href={project.link} target="_blank" rel="noopener noreferrer">
                {t({ es: 'Abrir proyecto', en: 'Open project' })} <Icon name="external" size={14}/>
              </a>
            ) : (
              <span className="chip">{t({ es: 'Repositorio privado', en: 'Private repository' })}</span>
            )}
            {project.scene && (
              <a className="btn btn--sm" href="#laboratorio" onClick={onClose}>
                {t({ es: 'Ver la escena 3D', en: 'See the 3D scene' })}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const { t } = useLang()
  const [filter, setFilter] = useState<Category | 'all'>('all')
  const [open, setOpen] = useState<Project | null>(null)

  const shown = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section className="section" id="proyectos">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">04 — {t({ es: 'Proyectos', en: 'Work' })}</p>
            <h2 className="section-title">{t({ es: 'Lo que he construido', en: 'What I have built' })}</h2>
            <p className="section-sub">
              {t({
                es: 'Productos en producción, prototipos que se enseñan a clientes y laboratorios que todavía huelen a cable. Toca cualquiera para el detalle.',
                en: 'Products in production, prototypes shown to clients, and labs that still smell like cable. Tap any of them for the detail.',
              })}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="filters">
            {categories.map((c) => (
              <button
                key={c.id}
                className={`filter ${filter === c.id ? 'is-on' : ''}`}
                onClick={() => setFilter(c.id)}
              >
                {t(c.label)}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid">
          {shown.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i, 6) * 60}>
              <Card project={p} onOpen={() => setOpen(p)}/>
            </Reveal>
          ))}
        </div>
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)}/>}
    </section>
  )
}
