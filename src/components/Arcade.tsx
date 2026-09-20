import { useState } from 'react'
import { useLang } from '../i18n/lang'
import { arcade, type ArcadeEntry } from '../data/arcade'
import { PixelSprite, Reveal, useModalBehavior } from './primitives'

function Cartridge({ entry, onOpen }: { entry: ArcadeEntry; onOpen: () => void }) {
  const { t } = useLang()
  return (
    <button className="cart" style={{ '--c': entry.accent } as React.CSSProperties} onClick={onOpen} aria-label={entry.title}>
      <div className="cart__screen">
        <PixelSprite sprite={entry.sprite} className="cart__sprite" title={entry.title}/>
      </div>
      <div className="cart__title">{entry.title}</div>
      <div className="cart__meta">
        <span className="cart__platform">{entry.platform}</span>
        <span className="cart__status">{t(entry.status)}</span>
      </div>
      <p className="cart__summary">{t(entry.summary)}</p>
      <div className="cart__hud">
        {entry.stats.map((s) => (
          <div key={s.label.es}>
            <b>{s.value}</b>
            <span>{t(s.label)}</span>
          </div>
        ))}
      </div>
      <span className="cart__start">▶ {t({ es: 'PRESS START', en: 'PRESS START' })}</span>
    </button>
  )
}

function CartridgeModal({ entry, onClose }: { entry: ArcadeEntry; onClose: () => void }) {
  const { t } = useLang()
  useModalBehavior(true, onClose)

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={entry.title}>
      <div className="px-modal" style={{ '--c': entry.accent } as React.CSSProperties} onClick={(e) => e.stopPropagation()}>
        <div className="px-modal__top">
          <PixelSprite sprite={entry.sprite} className="px-modal__sprite" title={entry.title}/>
          <div>
            <h2>{entry.title}</h2>
            <p className="px-modal__meta">{entry.platform} · {entry.year} · {t(entry.status)}</p>
          </div>
        </div>
        <p>{t(entry.description)}</p>
        <div className="px-modal__hud">
          {entry.stats.map((s) => (
            <div key={s.label.es}>
              <b>{s.value}</b>
              <span>{t(s.label)}</span>
            </div>
          ))}
        </div>
        <div className="px-foot">
          {entry.link && (
            <a className="px-btn" href={entry.link} target="_blank" rel="noopener noreferrer">
              {t({ es: 'JUGAR', en: 'PLAY' })}
            </a>
          )}
          <button className="px-btn px-btn--ghost" onClick={onClose}>{t({ es: 'VOLVER', en: 'BACK' })}</button>
        </div>
      </div>
    </div>
  )
}

export function Arcade() {
  const { t } = useLang()
  const [open, setOpen] = useState<ArcadeEntry | null>(null)

  return (
    <section className="section arcade" id="arcade">
      <div className="wrap">
        <Reveal>
          <div className="arcade__head">
            <p className="arcade__eyebrow">★ INSERT COIN ★</p>
            <h2 className="arcade__title">{t({ es: 'POR PURO GUSTO', en: 'JUST FOR FUN' })}</h2>
            <p className="arcade__sub">
              {t({
                es: 'Aquí no hay clientes ni sprints. Juegos, servidores que administro por diversión y páginas hechas para una sola persona.',
                en: 'No clients and no sprints here. Games, servers I run for fun, and pages made for a single person.',
              })}
            </p>
          </div>
        </Reveal>

        <div className="cartridges">
          {arcade.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 70}>
              <Cartridge entry={entry} onOpen={() => setOpen(entry)}/>
            </Reveal>
          ))}
        </div>
      </div>

      {open && <CartridgeModal entry={open} onClose={() => setOpen(null)}/>}
    </section>
  )
}
