import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Armado de equipo: la torre se abre en despiece y se vuelve a cerrar,
 * cada pieza entrando por donde realmente entra. Al lado, la parte de red.
 */

const CYAN = '#4cc9f0'
const GREEN = '#4ade80'

type Part = {
  id: string
  label: string
  size: [number, number, number]
  home: [number, number, number]
  blow: [number, number, number]
  color: string
  emissive?: string
  metalness?: number
}

const PARTS: Part[] = [
  { id: 'mobo', label: 'Tarjeta madre', size: [0.1, 3.1, 3.4], home: [-0.75, 0.25, 0], blow: [-2.6, 0.4, 0], color: '#1a7a44', emissive: '#052e16', metalness: 0.25 },
  { id: 'cpu', label: 'Procesador', size: [0.14, 0.62, 0.62], home: [-0.62, 1.05, 0.55], blow: [-0.4, 3.1, 2.2], color: '#cbd5e1', metalness: 0.45 },
  { id: 'cooler', label: 'Disipador', size: [0.62, 0.95, 0.95], home: [-0.22, 1.05, 0.55], blow: [1.9, 2.7, 2.4], color: '#94a3b8', metalness: 0.45 },
  { id: 'ram1', label: 'Memoria RAM', size: [0.09, 1.05, 0.16], home: [-0.6, 0.95, -0.5], blow: [-0.2, 3.0, -1.7], color: '#1e293b', emissive: '#0ea5e9', metalness: 0.3 },
  { id: 'ram2', label: '', size: [0.09, 1.05, 0.16], home: [-0.6, 0.95, -0.78], blow: [-0.2, 3.0, -2.35], color: '#1e293b', emissive: '#0ea5e9', metalness: 0.3 },
  { id: 'gpu', label: 'Tarjeta de video', size: [0.55, 0.55, 2.5], home: [-0.35, -0.35, 0.3], blow: [1.6, -0.6, 2.6], color: '#1e3a5f', emissive: '#4cc9f0', metalness: 0.35 },
  { id: 'ssd', label: 'Almacenamiento', size: [0.14, 0.5, 0.75], home: [-0.6, -1.15, -0.9], blow: [0.4, -2.2, -2.5], color: '#334155', metalness: 0.4 },
  { id: 'psu', label: 'Fuente de poder', size: [1.45, 0.95, 1.75], home: [0.1, -1.75, -0.6], blow: [0.1, -3.6, -2.4], color: '#2a3444', metalness: 0.38 },
]

function Case({ phase }: { phase: React.RefObject<number> }) {
  const panels = useRef<THREE.Group>(null)
  const edges = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(2.1, 4.3, 4.5)), [])

  useFrame(() => {
    const p = phase.current ?? 0
    if (panels.current) {
      panels.current.position.x = p * 2.9
      panels.current.children.forEach((c) => {
        const mesh = c as THREE.Mesh
        const mat = mesh.material as THREE.MeshStandardMaterial
        mat.opacity = 0.28 - p * 0.18
      })
    }
  })

  return (
    <group>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#64748b" transparent opacity={0.9}/>
      </lineSegments>
      {/* panel lateral que se desliza en el despiece */}
      <group ref={panels}>
        <mesh position={[1.05, 0, 0]}>
          <boxGeometry args={[0.06, 4.3, 4.5]}/>
          <meshStandardMaterial color="#334155" transparent opacity={0.22} metalness={0.3} roughness={0.4}/>
        </mesh>
      </group>
      {/* base y techo */}
      {[-2.16, 2.16].map((y) => (
        <mesh key={y} position={[0, y, 0]}>
          <boxGeometry args={[2.1, 0.06, 4.5]}/>
          <meshStandardMaterial color="#334155" metalness={0.35} roughness={0.5}/>
        </mesh>
      ))}
    </group>
  )
}

function Fans() {
  const a = useRef<THREE.Group>(null)
  const b = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (a.current) a.current.rotation.z += delta * 6
    if (b.current) b.current.rotation.z -= delta * 5
  })

  const blades = (color: string) => (
    <>
      <mesh>
        <torusGeometry args={[0.42, 0.05, 8, 24]}/>
        <meshStandardMaterial color="#475569" metalness={0.3} roughness={0.5}/>
      </mesh>
      {Array.from({ length: 7 }).map((_, i) => (
        <mesh key={i} rotation={[0, 0, (i / 7) * Math.PI * 2]} position={[0, 0, 0]}>
          <boxGeometry args={[0.36, 0.1, 0.03]}/>
          <meshStandardMaterial color={color} transparent opacity={0.85} metalness={0.4} roughness={0.5}/>
        </mesh>
      ))}
    </>
  )

  return (
    <>
      <group ref={a} position={[0, 1.1, 2.2]}>{blades('#3b82f6')}</group>
      <group ref={b} position={[0, -0.2, 2.2]}>{blades('#4cc9f0')}</group>
    </>
  )
}

function PartMesh({ part, phase }: { part: Part; phase: React.RefObject<number> }) {
  const ref = useRef<THREE.Mesh>(null)
  const label = useRef<HTMLSpanElement>(null)
  const home = useMemo(() => new THREE.Vector3(...part.home), [part.home])
  const blow = useMemo(() => new THREE.Vector3(...part.blow), [part.blow])

  useFrame(() => {
    const p = phase.current ?? 0
    if (ref.current) {
      ref.current.position.lerpVectors(home, blow, p)
      ref.current.rotation.y = p * 0.35
    }
    // con la torre cerrada las piezas quedan una encima de otra: las etiquetas solo sirven abiertas
    if (label.current) label.current.style.opacity = String(Math.max(0, Math.min(1, (p - 0.3) / 0.35)))
  })

  return (
    <group>
      <mesh ref={ref} position={part.home}>
        <boxGeometry args={part.size}/>
        <meshStandardMaterial
          color={part.color}
          emissive={part.emissive ?? '#000000'}
          emissiveIntensity={part.emissive ? 0.45 : 0}
          metalness={part.metalness ?? 0.3}
          roughness={0.35}
        />
        {part.label && (
          <Html center position={[0, part.size[1] / 2 + 0.3, 0]} zIndexRange={[12, 0]}>
            <span className="scene-tag" ref={label} style={{ opacity: 0 }}>{part.label}</span>
          </Html>
        )}
      </mesh>
    </group>
  )
}

/** La parte de red: switch con sus LEDs y el cable que sube a la torre. */
function Network() {
  const leds = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!leds.current) return
    leds.current.children.forEach((c, i) => {
      const mesh = c as THREE.Mesh
      const mat = mesh.material as THREE.MeshStandardMaterial
      const on = Math.sin(state.clock.elapsedTime * (3 + i * 1.7) + i) > 0.1
      mat.emissiveIntensity = on ? 2.4 : 0.15
    })
  })

  const cable = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.9, -1.4, -2.2),
      new THREE.Vector3(2.2, -2.1, -2.6),
      new THREE.Vector3(3.3, -2.05, -1.6),
    ])
    return new THREE.TubeGeometry(curve, 24, 0.045, 8, false)
  }, [])

  return (
    <group position={[3.6, -1.9, -1.2]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.9, 0.3, 0.85]}/>
        <meshStandardMaterial color="#334155" metalness={0.35} roughness={0.45}/>
      </mesh>
      <group ref={leds}>
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh key={i} position={[-0.7 + i * 0.35, 0.05, 0.44]}>
            <boxGeometry args={[0.1, 0.06, 0.02]}/>
            <meshStandardMaterial color="#052e16" emissive={GREEN} emissiveIntensity={1}/>
          </mesh>
        ))}
      </group>
      <Html center position={[0, 0.45, 0]} zIndexRange={[12, 0]}>
        <span className="scene-tag scene-tag--ok">switch · red</span>
      </Html>
      <mesh geometry={cable} position={[-3.6, 1.9, 1.2]}>
        <meshStandardMaterial color="#1e3a5f" roughness={0.6}/>
      </mesh>
    </group>
  )
}

export function RigScene() {
  const phase = useRef(0)

  useFrame((state) => {
    // ciclo de 13 s: armado → despiece → pausa → armado
    const t = (state.clock.elapsedTime % 13) / 13
    let p: number
    if (t < 0.25) p = t / 0.25
    else if (t < 0.55) p = 1
    else if (t < 0.8) p = 1 - (t - 0.55) / 0.25
    else p = 0
    // suavizado
    phase.current = p * p * (3 - 2 * p)
  })

  return (
    <>
      <color attach="background" args={['#05070c']}/>
      <fog attach="fog" args={['#05070c', 14, 32]}/>
      <ambientLight intensity={0.9}/>
      <directionalLight position={[5, 7, 6]} intensity={1.9} color="#e0f2fe"/>
      <directionalLight position={[-6, 3, 4]} intensity={0.9} color="#bae6fd"/>
      <pointLight position={[-3, 2, 3]} intensity={14} distance={11} color={CYAN}/>
      <pointLight position={[3, -2, -2]} intensity={7} distance={9} color="#a855f7"/>

      <group position={[-0.6, 0.1, 0]} rotation={[0, -0.5, 0]}>
        <Case phase={phase}/>
        <Fans/>
        {PARTS.map((part) => <PartMesh key={part.id} part={part} phase={phase}/>)}
        <Network/>
      </group>

      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.4}
        enablePan={false}
        minDistance={8}
        maxDistance={20}
        minPolarAngle={0.3}
        maxPolarAngle={Math.PI / 2.1}
        target={[0, 0, 0]}
      />
    </>
  )
}
