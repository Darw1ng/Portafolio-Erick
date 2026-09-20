import { useEffect, useState } from 'react'
import { useLang, type L } from '../i18n/lang'

const LINKS: { id: string; label: L }[] = [
  { id: 'perfil', label: { es: 'Perfil', en: 'About' } },
  { id: 'capacidades', label: { es: 'Capacidades', en: 'Skills' } },
  { id: 'laboratorio', label: { es: 'Laboratorio 3D', en: '3D Lab' } },
  { id: 'proyectos', label: { es: 'Proyectos', en: 'Work' } },
  { id: 'arcade', label: { es: 'Por gusto', en: 'For fun' } },
  { id: 'trayectoria', label: { es: 'Trayectoria', en: 'Path' } },
]

export function Nav() {
  const { lang, setLang, t } = useLang()
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // scroll-spy: la sección que ocupa la franja superior manda
  useEffect(() => {
    const ids = [...LINKS.map((l) => l.id), 'contacto']
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!sections.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <header className={`nav ${stuck ? 'is-stuck' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#inicio" onClick={() => setOpen(false)}>
          Erick<span>.</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {LINKS.map((l) => (
            <a
              key={l.id}
              className={`nav__link ${active === l.id ? 'is-active' : ''}`}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
            >
              {t(l.label)}
            </a>
          ))}
          <a className="nav__link" href="#contacto" onClick={() => setOpen(false)}>
            {t({ es: 'Contacto', en: 'Contact' })}
          </a>
        </nav>

        <div className="nav__right">
          <div className="lang" role="group" aria-label="Idioma / Language">
            <button className={lang === 'es' ? 'is-on' : ''} onClick={() => setLang('es')} aria-pressed={lang === 'es'}>ES</button>
            <button className={lang === 'en' ? 'is-on' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
          </div>
          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={t({ es: 'Menú', en: 'Menu' })}
            aria-expanded={open}
          >
            <span/>
          </button>
        </div>
      </div>
    </header>
  )
}
