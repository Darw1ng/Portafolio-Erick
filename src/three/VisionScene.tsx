import { useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Conteo de pasajeros por cámara.
 * La unidad va como corte de sección —sin paredes que tapen— para que se vea
 * lo que importa: las detecciones, la línea de conteo y hacia dónde va cada quien.
 */

const GREEN = '#4ade80'
const AMBER = '#fbbf24'
const CYAN = '#4cc9f0'

type Walker = { id: string; dir: 1 | -1; speed: number; offset: number; lane: number; conf: number }

const WALKERS: Walker[] = [
  { id: 'id_07', dir: 1, speed: 0.085, offset: 0.0, lane: -0.3, conf: 0.94 },
  { id: 'id_08', dir: 1, speed: 0.07, offset: 0.45, lane: 0.32, conf: 0.89 },
  { id: 'id_09', dir: -1, speed: 0.065, offset: 0.72, lane: -0.08, conf: 0.92 },
  { id: 'id_10', dir: 1, speed: 0.055, offset: 0.22, lane: 0.14, conf: 0.86 },
]

const START = -4.6
const END = 4.6

function Bus() {
  const seats = useMemo(() => {
    const out: { x: number; z: number }[] = []
    for (let i = 0; i < 6; i++) {
      out.push({ x: -1.3, z: -3 + i * 1.25 })
      out.push({ x: 1.3, z: -3 + i * 1.25 })
    }
    return out
  }, [])

  const frame = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(3.6, 2.4, 11)), [])

  return (
    <group>
      {/* piso y pasillo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.6, 11]}/>
        <meshStandardMaterial color="#1a2635" roughness={0.9} metalness={0}/>
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.012, 0]}>
        <planeGeometry args={[1.5, 11]}/>
        <meshStandardMaterial color="#24384d" roughness={0.85}/>
      </mesh>

      {/* carrocería insinuada: solo aristas, la escena se lee por dentro */}
      <lineSegments geometry={frame} position={[0, 1.2, 0]}>
        <lineBasicMaterial color="#3f5f80" transparent opacity={0.55}/>
      </lineSegments>

      {/* ventanas como marcos flotantes */}
      {Array.from({ length: 6 }).map((_, i) =>
        [-1.79, 1.79].map((x) => (
          <mesh key={`${i}-${x}`} position={[x, 1.5, -3.2 + i * 1.3]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[0.95, 0.72]}/>
            <meshStandardMaterial color="#2d5b80" transparent opacity={0.35} side={THREE.DoubleSide} roughness={0.2} metalness={0.1}/>
          </mesh>
        )),
      )}

      {/* asientos */}
      {seats.map((s) => (
        <group key={`${s.x}-${s.z}`} position={[s.x, 0.32, s.z]}>
          <mesh>
            <boxGeometry args={[0.72, 0.16, 0.72]}/>
            <meshStandardMaterial color="#39506b" roughness={0.75} metalness={0.05}/>
          </mesh>
          <mesh position={[s.x < 0 ? -0.28 : 0.28, 0.32, 0]}>
            <boxGeometry args={[0.16, 0.64, 0.72]}/>
            <meshStandardMaterial color="#446080" roughness={0.75}/>
          </mesh>
        </group>
      ))}

      {/* tubos de sujeción */}
      {[-0.78, 0.78].map((x) => (
        <mesh key={x} position={[x, 1.1, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 2.2, 10]}/>
          <meshStandardMaterial color="#8aa2bd" metalness={0.4} roughness={0.45}/>
        </mesh>
      ))}
    </group>
  )
}

/** La cámara del sistema, con su cono de visión. */
function CameraRig() {
  const cone = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (cone.current) {
      const mat = cone.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.04 + Math.abs(Math.sin(state.clock.elapsedTime * 1.2)) * 0.035
    }
  })
  return (
    <group position={[0, 2.05, -5.1]}>
      <mesh rotation={[0.45, 0, 0]}>
        <boxGeometry args={[0.38, 0.28, 0.5]}/>
        <meshStandardMaterial color="#54697f" metalness={0.35} roughness={0.35}/>
      </mesh>
      <mesh position={[0, -0.1, 0.28]} rotation={[Math.PI / 2 + 0.45, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.13, 0.16, 18]}/>
        <meshStandardMaterial color="#0b1118" metalness={0.5} roughness={0.15} emissive={CYAN} emissiveIntensity={0.5}/>
      </mesh>
      <mesh ref={cone} position={[0, -0.55, 3.4]} rotation={[-Math.PI / 2 + 0.1, 0, 0]}>
        <coneGeometry args={[1.5, 7.2, 4, 1, true]}/>
        <meshBasicMaterial color={CYAN} transparent opacity={0.08} side={THREE.DoubleSide} depthWrite={false}/>
      </mesh>
      <Html center position={[0, 0.45, 0]} zIndexRange={[12, 0]}>
        <span className="scene-tag scene-tag--cyan">cam · 19 fps</span>
      </Html>
    </group>
  )
}

function CountLine() {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (mesh.current) {
      const mat = mesh.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.4 + Math.abs(Math.sin(state.clock.elapsedTime * 2)) * 0.35
    }
  })
  return (
    <group position={[0, 0.03, 0]}>
      <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.5, 0.1]}/>
        <meshBasicMaterial color={AMBER} transparent opacity={0.5}/>
      </mesh>
      <Html center position={[2.3, 0.2, 0]} zIndexRange={[11, 0]}>
        <span className="scene-tag scene-tag--amber">línea de conteo</span>
      </Html>
    </group>
  )
}

function Person({ walker, onCross }: { walker: Walker; onCross: (dir: 1 | -1) => void }) {
  const group = useRef<THREE.Group>(null)
  const boxRef = useRef<THREE.LineSegments>(null)
  const side = useRef<number>(walker.dir === 1 ? -1 : 1)

  const edges = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(0.64, 1.7, 0.64)), [])
  const tone = walker.dir === 1 ? '#3f6f8f' : '#8a7340'

  useFrame((state) => {
    const t = (state.clock.elapsedTime * walker.speed + walker.offset) % 1
    const z = walker.dir === 1 ? START + t * (END - START) : END - t * (END - START)
    if (group.current) {
      group.current.position.set(walker.lane, Math.abs(Math.sin(state.clock.elapsedTime * 5 + walker.offset * 6)) * 0.05, z)
      group.current.rotation.y = walker.dir === 1 ? 0 : Math.PI
    }
    const nowSide = Math.sign(z) || 1
    if (nowSide !== side.current) {
      side.current = nowSide
      if ((walker.dir === 1 && nowSide > 0) || (walker.dir === -1 && nowSide < 0)) onCross(walker.dir)
    }
  })

  return (
    <group ref={group}>
      <mesh position={[0, 0.72, 0]}>
        <capsuleGeometry args={[0.2, 0.62, 6, 14]}/>
        <meshStandardMaterial color={tone} roughness={0.55} metalness={0.1}/>
      </mesh>
      <mesh position={[0, 1.34, 0]}>
        <sphereGeometry args={[0.17, 16, 16]}/>
        <meshStandardMaterial color={tone} roughness={0.5}/>
      </mesh>
      <lineSegments ref={boxRef} geometry={edges} position={[0, 0.9, 0]}>
        <lineBasicMaterial color={walker.dir === 1 ? GREEN : AMBER} transparent opacity={0.9}/>
      </lineSegments>
      <Html center position={[0, 1.95, 0]} zIndexRange={[13, 0]}>
        <span className={`scene-tag ${walker.dir === 1 ? 'scene-tag--ok' : 'scene-tag--amber'}`}>
          person {walker.conf.toFixed(2)}
        </span>
      </Html>
    </group>
  )
}

export function VisionScene() {
  const [count, setCount] = useState({ up: 12, down: 7 })

  const onCross = (dir: 1 | -1) =>
    setCount((c) => (dir === 1 ? { ...c, up: c.up + 1 } : { ...c, down: c.down + 1 }))

  const aboard = count.up - count.down

  return (
    <>
      <color attach="background" args={['#05070c']}/>
      <fog attach="fog" args={['#05070c', 16, 34]}/>
      <ambientLight intensity={0.95}/>
      <directionalLight position={[5, 9, 4]} intensity={1.5} color="#e0f2fe"/>
      <directionalLight position={[-5, 6, -4]} intensity={0.7} color="#93c5fd"/>
      <pointLight position={[0, 2.2, 2]} intensity={12} distance={11} color="#bfdbfe"/>

      <group rotation={[0, -0.42, 0]} position={[0, -0.9, 0]}>
        <Bus/>
        <CameraRig/>
        <CountLine/>
        {WALKERS.map((w) => <Person key={w.id} walker={w} onCross={onCross}/>)}

        <Html center position={[0, 3.4, 0]} zIndexRange={[14, 0]}>
          <div className="scene-hud">
            <div><b style={{ color: GREEN }}>{count.up}</b><span>suben</span></div>
            <div><b style={{ color: AMBER }}>{count.down}</b><span>bajan</span></div>
            <div><b style={{ color: CYAN }}>{aboard}</b><span>a bordo</span></div>
          </div>
        </Html>
      </group>

      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.25}
        enablePan={false}
        minDistance={8}
        maxDistance={20}
        minPolarAngle={0.4}
        maxPolarAngle={Math.PI / 2.3}
        target={[0, 0.4, 0]}
      />
    </>
  )
}
