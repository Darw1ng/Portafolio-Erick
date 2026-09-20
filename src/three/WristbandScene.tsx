import { useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Line, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

/**
 * PEM — piso de maternidad con rastreo BLE.
 * Cada pulsera recorre su zona; una cruza el umbral de la salida y dispara Código Rosa.
 */

const ROOMS: { pos: [number, number]; size: [number, number]; label?: string; tone?: string }[] = [
  { pos: [-4.2, -2.6], size: [2.4, 2.2], label: '301' },
  { pos: [-1.4, -2.6], size: [2.4, 2.2], label: '302' },
  { pos: [1.4, -2.6], size: [2.4, 2.2], label: '303' },
  { pos: [4.2, -2.6], size: [2.4, 2.2], label: '304' },
  { pos: [-4.2, 2.6], size: [2.4, 2.2], label: 'Tococirugía', tone: '#7dd3fc' },
  { pos: [-1.4, 2.6], size: [2.4, 2.2], label: '305' },
  { pos: [1.4, 2.6], size: [2.4, 2.2], label: '306' },
  { pos: [4.2, 2.6], size: [2.4, 2.2], label: 'Cunero', tone: '#f9a8d4' },
]

const ANCHORS: [number, number][] = [[-5.4, 0], [-1.8, 0], [1.8, 0], [5.4, 0], [-4.2, 3.4], [4.2, -3.4]]

const PINK = '#f472b6'
const CYAN = '#4cc9f0'
const ALERT = '#fb7185'

function Floor() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <planeGeometry args={[14, 9]}/>
        <meshStandardMaterial color="#0e1826" roughness={0.95} metalness={0}/>
      </mesh>
      <gridHelper args={[14, 28, '#16283c', '#101b29']} position={[0, 0.001, 0]}/>
      {/* pasillo central */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <planeGeometry args={[13, 1.9]}/>
        <meshBasicMaterial color="#0d1b2a" transparent opacity={0.85}/>
      </mesh>
    </group>
  )
}

function Room({ pos, size, label, tone = CYAN }: { pos: [number, number]; size: [number, number]; label?: string; tone?: string }) {
  const geo = useMemo(() => new THREE.BoxGeometry(size[0], 0.7, size[1]), [size])
  const edges = useMemo(() => new THREE.EdgesGeometry(geo), [geo])
  return (
    <group position={[pos[0], 0.35, pos[1]]}>
      <mesh geometry={geo}>
        <meshStandardMaterial color="#16283c" transparent opacity={0.5} roughness={0.85} metalness={0.1}/>
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={tone} transparent opacity={0.7}/>
      </lineSegments>
      {label && (
        <Html center position={[0, 0.62, 0]} zIndexRange={[10, 0]}>
          <span className="scene-tag" style={{ borderColor: `${tone}55`, color: tone }}>{label}</span>
        </Html>
      )}
    </group>
  )
}

/** Ancla BLE con su onda de cobertura. */
function Anchor({ x, z, phase }: { x: number; z: number; phase: number }) {
  const ring = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    const t = (state.clock.elapsedTime * 0.5 + phase) % 1
    if (ring.current) {
      ring.current.scale.setScalar(0.4 + t * 3.2)
      const mat = ring.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.32 * (1 - t)
    }
  })
  return (
    <group position={[x, 0, z]}>
      <mesh position={[0, 1.15, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.1, 12]}/>
        <meshStandardMaterial color="#2c5876" emissive={CYAN} emissiveIntensity={0.8} metalness={0.35} roughness={0.45}/>
      </mesh>
      <mesh ref={ring} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]}>
        <ringGeometry args={[0.86, 0.92, 48]}/>
        <meshBasicMaterial color={CYAN} transparent opacity={0.3} side={THREE.DoubleSide}/>
      </mesh>
    </group>
  )
}

type Tag = { id: string; path: THREE.Vector3[]; speed: number; offset: number; escapes?: boolean }

const TAGS: Tag[] = [
  { id: 'BB-01', speed: 0.06, offset: 0, path: [new THREE.Vector3(-4.2, 0.55, -2.6), new THREE.Vector3(-4.2, 0.55, -0.6), new THREE.Vector3(-2.4, 0.55, -0.6), new THREE.Vector3(-4.2, 0.55, -2.6)] },
  { id: 'BB-02', speed: 0.05, offset: 0.35, path: [new THREE.Vector3(4.2, 0.55, 2.6), new THREE.Vector3(2.6, 0.55, 1.6), new THREE.Vector3(4.6, 0.55, 3.1), new THREE.Vector3(4.2, 0.55, 2.6)] },
  { id: 'BB-03', speed: 0.045, offset: 0.7, path: [new THREE.Vector3(1.4, 0.55, -2.6), new THREE.Vector3(1.4, 0.55, 0), new THREE.Vector3(-1.4, 0.55, 0), new THREE.Vector3(1.4, 0.55, -2.6)] },
  { id: 'BB-04', speed: 0.035, offset: 0.1, escapes: true, path: [new THREE.Vector3(4.2, 0.55, 2.6), new THREE.Vector3(2, 0.55, 0), new THREE.Vector3(-3.5, 0.55, 0), new THREE.Vector3(-6.4, 0.55, 0), new THREE.Vector3(-3.5, 0.55, 0), new THREE.Vector3(2, 0.55, 0)] },
]

function Wristband({ tag, onAlert }: { tag: Tag; onAlert: (on: boolean) => void }) {
  const group = useRef<THREE.Group>(null)
  const band = useRef<THREE.Mesh>(null)
  const halo = useRef<THREE.Mesh>(null)
  const alerted = useRef(false)

  const curve = useMemo(() => new THREE.CatmullRomCurve3(tag.path, true, 'catmullrom', 0.25), [tag.path])

  useFrame((state) => {
    const t = (state.clock.elapsedTime * tag.speed + tag.offset) % 1
    const p = curve.getPointAt(t)
    if (group.current) group.current.position.copy(p)
    if (band.current) band.current.rotation.y = state.clock.elapsedTime * 0.8

    // umbral de salida: x < -5.4 es zona de puerta
    const danger = !!tag.escapes && p.x < -5.2
    if (danger !== alerted.current) {
      alerted.current = danger
      onAlert(danger)
    }
    const color = danger ? ALERT : PINK
    if (band.current) (band.current.material as THREE.MeshStandardMaterial).emissive.set(color)
    if (halo.current) {
      const mat = halo.current.material as THREE.MeshBasicMaterial
      mat.color.set(color)
      const pulse = danger ? 6 : 2
      mat.opacity = 0.18 + Math.abs(Math.sin(state.clock.elapsedTime * pulse)) * (danger ? 0.5 : 0.18)
      halo.current.scale.setScalar(danger ? 1.5 : 1)
    }
  })

  return (
    <group ref={group}>
      <mesh ref={band} rotation={[Math.PI / 2.6, 0, 0]}>
        <torusGeometry args={[0.16, 0.055, 10, 26]}/>
        <meshStandardMaterial color="#4a2133" emissive={PINK} emissiveIntensity={1.6} metalness={0.2} roughness={0.5}/>
      </mesh>
      <mesh ref={halo} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <ringGeometry args={[0.3, 0.45, 32]}/>
        <meshBasicMaterial color={PINK} transparent opacity={0.3} side={THREE.DoubleSide}/>
      </mesh>
      <Html center position={[0, 0.42, 0]} zIndexRange={[12, 0]}>
        <span className="scene-tag scene-tag--pink">{tag.id}</span>
      </Html>
    </group>
  )
}

function Trails() {
  return (
    <>
      {TAGS.map((tag) => {
        const curve = new THREE.CatmullRomCurve3(tag.path, true, 'catmullrom', 0.25)
        const pts = curve.getPoints(70).map((p) => [p.x, 0.06, p.z] as [number, number, number])
        return (
          <Line
            key={tag.id}
            points={pts}
            color={tag.escapes ? ALERT : PINK}
            lineWidth={1}
            transparent
            opacity={0.5}
            dashed
            dashSize={0.18}
            gapSize={0.14}
          />
        )
      })}
    </>
  )
}

function Exit({ alert }: { alert: boolean }) {
  const mat = useRef<THREE.MeshBasicMaterial>(null)
  useFrame((state) => {
    if (mat.current) mat.current.opacity = alert ? 0.35 + Math.abs(Math.sin(state.clock.elapsedTime * 7)) * 0.5 : 0.22
  })
  return (
    <group position={[-6.6, 0, 0]}>
      <mesh rotation={[0, Math.PI / 2, 0]} position={[0, 0.7, 0]}>
        <planeGeometry args={[2.1, 1.4]}/>
        <meshBasicMaterial ref={mat} color={alert ? ALERT : '#34d399'} transparent opacity={0.22} side={THREE.DoubleSide}/>
      </mesh>
      <Html center position={[0, 1.7, 0]} zIndexRange={[11, 0]}>
        <span className={`scene-tag ${alert ? 'scene-tag--alert' : 'scene-tag--ok'}`}>
          {alert ? 'CÓDIGO ROSA' : 'SALIDA ASEGURADA'}
        </span>
      </Html>
    </group>
  )
}

export function WristbandScene() {
  const [alerts, setAlerts] = useState(0)

  const onAlert = (on: boolean) => setAlerts((n) => Math.max(0, n + (on ? 1 : -1)))

  return (
    <>
      <color attach="background" args={['#05070c']}/>
      <fog attach="fog" args={['#05070c', 16, 34]}/>
      <ambientLight intensity={0.85}/>
      <directionalLight position={[6, 10, 5]} intensity={1.6} color="#dbeafe"/>
      <directionalLight position={[-7, 6, -4]} intensity={0.7} color="#93c5fd"/>
      <pointLight position={[-6, 3, 0]} intensity={12} distance={10} color={alerts > 0 ? ALERT : CYAN}/>

      <group position={[0, 0, 0]}>
        <Floor/>
        {ROOMS.map((r) => <Room key={r.label} {...r}/>)}
        {ANCHORS.map(([x, z], i) => <Anchor key={`${x}-${z}`} x={x} z={z} phase={i / ANCHORS.length}/>)}
        <Trails/>
        {TAGS.map((tag) => <Wristband key={tag.id} tag={tag} onAlert={onAlert}/>)}
        <Exit alert={alerts > 0}/>
      </group>

      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.35}
        enablePan={false}
        minDistance={9}
        maxDistance={22}
        minPolarAngle={0.35}
        maxPolarAngle={Math.PI / 2.35}
        target={[0, 0.4, 0]}
      />
    </>
  )
}
