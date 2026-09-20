import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { Sprite } from '../data/arcade'

/** Dispara una sola vez cuando el elemento entra al viewport. */
export function useInView<T extends HTMLElement>(rootMargin = '-12% 0px') {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setInView(true); return }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); io.disconnect() } },
      { rootMargin, threshold: 0.08 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return { ref, inView }
}

export function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: {
  children: ReactNode
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
  className?: string
}) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

/** Cierra con Escape y bloquea el scroll del fondo mientras hay modal. */
export function useModalBehavior(open: boolean, onClose: () => void) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])
}

/**
 * Pinta un sprite de caracteres como SVG de rects.
 * Las filas cortas se rellenan con transparente, así un sprite mal cuadrado no se deforma.
 */
export function PixelSprite({ sprite, className = '', title }: { sprite: Sprite; className?: string; title?: string }) {
  const w = Math.max(...sprite.rows.map((r) => r.length))
  const h = sprite.rows.length

  const rects: ReactNode[] = []
  sprite.rows.forEach((row, y) => {
    let x = 0
    while (x < w) {
      const ch = row[x] ?? '.'
      const fill = sprite.palette[ch]
      if (!fill) { x++; continue }
      // junta píxeles contiguos del mismo color en un solo rect
      let run = 1
      while (x + run < w && (row[x + run] ?? '.') === ch) run++
      rects.push(<rect key={`${x}-${y}`} x={x} y={y} width={run} height={1} fill={fill}/>)
      x += run
    }
  })

  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} ${h}`}
      shapeRendering="crispEdges"
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {rects}
    </svg>
  )
}

export function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  switch (name) {
    case 'stack':
      return <svg {...common}><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/><path d="m3 18 9 5 9-5" opacity=".45"/></svg>
    case 'cube':
      return <svg {...common}><path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7L12 2.5Z"/><path d="M12 21.5v-9L3.5 7"/><path d="m12 12.5 8.5-5.5"/></svg>
    case 'eye':
      return <svg {...common}><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/></svg>
    case 'chip':
      return <svg {...common}><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M4 10h3M4 14h3M17 10h3M17 14h3M10 4v3M14 4v3M10 17v3M14 17v3"/></svg>
    case 'arrow':
      return <svg {...common}><path d="M5 12h13m-5-6 6 6-6 6"/></svg>
    case 'external':
      return <svg {...common}><path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>
    case 'github':
      return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.53.1.72-.23.72-.5v-1.8c-2.92.63-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.61 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.42-2.33-.26-4.78-1.17-4.78-5.2 0-1.15.41-2.09 1.08-2.83-.11-.27-.47-1.34.1-2.8 0 0 .88-.28 2.88 1.08a10 10 0 0 1 5.24 0c2-1.36 2.88-1.08 2.88-1.08.57 1.46.21 2.53.1 2.8.67.74 1.08 1.68 1.08 2.83 0 4.04-2.46 4.93-4.8 5.19.38.33.71.97.71 1.96v2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z"/></svg>
    case 'mail':
      return <svg {...common}><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
    case 'close':
      return <svg {...common}><path d="m6 6 12 12M18 6 6 18"/></svg>
    case 'rotate':
      return <svg {...common}><path d="M3 12a9 9 0 0 1 15.3-6.4L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.3 6.4L3 16"/><path d="M3 21v-5h5"/></svg>
    default:
      return null
  }
}
