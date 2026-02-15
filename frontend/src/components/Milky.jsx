import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Milky({
  particles = 50000,
  spread = 200,         
  speed = 0.001
}) {
  const pointsRef = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(particles * 3)

    for (let i = 0; i < particles; i++) {
      const i3 = i * 3

      // RANDOM SPACE DISTRIBUTION (FULL SCREEN)
      arr[i3 + 0] = (Math.random() - 0.5) * spread
      arr[i3 + 1] = (Math.random() - 0.5) * spread
      arr[i3 + 2] = (Math.random() - 0.5) * spread
    }

    return arr
  }, [particles, spread])

  useFrame(() => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += speed
    pointsRef.current.rotation.x += speed * 0.3
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particles}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
