import { lazy, Suspense, useEffect, useState, type ReactNode } from 'react'
import { useInView } from '../components/primitives'
import type { SceneKind } from './SceneHost'

const SceneHost = lazy(() => import('./SceneHost'))

/**
 * Puerta de entrada al 3D. Dos candados:
 *  1. el chunk de three.js solo se descarga cuando la sección se acerca al viewport;
 *  2. el canvas del hero espera a que el navegador esté ocioso, para que el texto pinte primero.
 */
export function Stage({
  kind,
  camera = [6, 4, 8],
  fov = 45,
  idleFirst = false,
  fallback,
}: {
  kind: SceneKind
  camera?: [number, number, number]
  fov?: number
  idleFirst?: boolean
  fallback?: ReactNode
}) {
  const { ref, inView } = useInView<HTMLDivElement>('160px')
  const [idleReady, setIdleReady] = useState(!idleFirst)

  useEffect(() => {
    if (idleReady) return
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }
    const idleId = w.requestIdleCallback?.(() => setIdleReady(true), { timeout: 1200 })
    // red de seguridad: en una pestaña de fondo requestIdleCallback puede no correr nunca
    const timer = setTimeout(() => setIdleReady(true), 900)
    return () => {
      if (idleId !== undefined) w.cancelIdleCallback?.(idleId)
      clearTimeout(timer)
    }
  }, [idleReady])

  const show = inView && idleReady

  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0 }}>
      {show ? (
        <Suspense fallback={fallback ?? <div className="lab__loading">CARGANDO ESCENA…</div>}>
          <SceneHost kind={kind} camera={camera} fov={fov}/>
        </Suspense>
      ) : (
        fallback ?? <div className="lab__loading">CARGANDO ESCENA…</div>
      )}
    </div>
  )
}
