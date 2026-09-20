import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { HeroScene } from './HeroScene'
import { WristbandScene } from './WristbandScene'
import { VisionScene } from './VisionScene'
import { RigScene } from './RigScene'

export type SceneKind = 'hero' | 'wristband' | 'vision' | 'rig'

/**
 * Único punto donde se importa three.js: todo el 3D queda en un chunk aparte
 * que se descarga cuando de verdad hace falta.
 */
export default function SceneHost({
  kind,
  camera,
  fov,
}: {
  kind: SceneKind
  camera: [number, number, number]
  fov: number
}) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: camera, fov }}
    >
      <Suspense fallback={null}>
        {kind === 'hero' && <HeroScene/>}
        {kind === 'wristband' && <WristbandScene/>}
        {kind === 'vision' && <VisionScene/>}
        {kind === 'rig' && <RigScene/>}
      </Suspense>
    </Canvas>
  )
}
