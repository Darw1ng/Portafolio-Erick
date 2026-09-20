import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ACCENT = new THREE.Color('#4cc9f0')

/** Polvo estelar: guiño al portafolio anterior, ahora con profundidad real. */
function Dust({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      // distribución en cáscara esférica, más densa al frente
      // nada por debajo de 13: más cerca, un punto se ve como un cuadro gris sobre el texto
      const r = 13 + Math.random() * 20
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.cos(phi) * 0.55
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
      sizes[i] = Math.random() * 0.06 + 0.015
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    g.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    return g
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.014
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.045}
        sizeAttenuation
        color="#9fc7e8"
        transparent
        opacity={0.75}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

/** Malla de terreno que ondula: la retícula técnica del fondo. */
function Grid() {
  const ref = useRef<THREE.LineSegments>(null)
  const geometry = useMemo(() => {
    const g = new THREE.PlaneGeometry(46, 46, 44, 44)
    g.rotateX(-Math.PI / 2)
    return new THREE.WireframeGeometry(g)
  }, [])

  const base = useMemo(() => Float32Array.from((geometry.attributes.position as THREE.BufferAttribute).array), [geometry])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const attr = geometry.attributes.position as THREE.BufferAttribute
    const arr = attr.array as Float32Array
    for (let i = 0; i < arr.length; i += 3) {
      const x = base[i]
      const z = base[i + 2]
      arr[i + 1] = Math.sin(x * 0.22 + t * 0.55) * 0.5 + Math.cos(z * 0.19 - t * 0.35) * 0.5
    }
    attr.needsUpdate = true
    if (ref.current) ref.current.position.z = ((t * 0.35) % 2) - 1
  })

  return (
    <lineSegments ref={ref} geometry={geometry} position={[0, -4.6, 0]}>
      <lineBasicMaterial color="#173147" transparent opacity={0.55}/>
    </lineSegments>
  )
}

/** El objeto del centro: un núcleo que respira dentro de una jaula geodésica. */
function Core() {
  const cage = useRef<THREE.Mesh>(null)
  const inner = useRef<THREE.Mesh>(null)
  const ring = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (cage.current) {
      cage.current.rotation.y += delta * 0.16
      cage.current.rotation.x = Math.sin(t * 0.22) * 0.18
      cage.current.rotation.z = Math.cos(t * 0.18) * 0.12
    }
    if (inner.current) {
      const s = 1 + Math.sin(t * 1.4) * 0.05
      inner.current.scale.setScalar(s)
      inner.current.rotation.y -= delta * 0.3
      inner.current.rotation.x = Math.sin(t * 0.3) * 0.5
    }
    if (ring.current) {
      ring.current.rotation.z += delta * 0.45
      ring.current.rotation.x = Math.PI / 2.4 + Math.sin(t * 0.5) * 0.1
    }
  })

  return (
    <group position={[3.4, 0.2, 0]}>
      <mesh ref={cage}>
        <icosahedronGeometry args={[2.5, 1]}/>
        <meshBasicMaterial color={ACCENT} wireframe transparent opacity={0.22}/>
      </mesh>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.12, 1]}/>
        <meshStandardMaterial
          color="#071018"
          emissive={ACCENT}
          emissiveIntensity={0.12}
          metalness={1}
          roughness={0.24}
          flatShading
        />
      </mesh>
      <mesh ref={ring}>
        <torusGeometry args={[3.3, 0.012, 8, 128]}/>
        <meshBasicMaterial color={ACCENT} transparent opacity={0.5}/>
      </mesh>
      <pointLight color={ACCENT} intensity={16} distance={12} position={[-2.4, 1.2, 2.6]}/>
      <pointLight color="#f0f9ff" intensity={9} distance={10} position={[2.2, -1.6, 1.8]}/>
    </group>
  )
}

/** Paralaje con el puntero: la cámara se asoma, nunca se va. */
function CameraDrift() {
  useFrame((state, delta) => {
    const { camera, pointer } = state
    camera.position.x += (pointer.x * 1.1 - camera.position.x + 0.4) * Math.min(1, delta * 1.6)
    camera.position.y += (pointer.y * 0.6 + 0.6 - camera.position.y) * Math.min(1, delta * 1.6)
    camera.lookAt(1.6, 0, 0)
  })
  return null
}

export function HeroScene() {
  return (
    <>
      <color attach="background" args={['#04060a']}/>
      <fog attach="fog" args={['#04060a', 14, 40]}/>
      <ambientLight intensity={0.35}/>
      <directionalLight position={[-6, 8, 6]} intensity={1.1} color="#cfe9ff"/>
      <Dust/>
      <Grid/>
      <Core/>
      <CameraDrift/>
    </>
  )
}
