import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

export function Milky({
  particles = 99999,       // number of stars
  radius = 1,              // galaxy size
  branches = 6,            // spiral arms
  spin = 20,                // spiral rotation
  randomness = 12,          // star spread
  randomnessPower = 1,     // non-linear spread
  rotationSpeed = 0.0003,  // slow rotation speed
  driftSpeed = 0.0003,     // upward drift speed
  maxHeight = 1.5,         // max drift height
  xOffset = 1,             // initial galaxy X offset
  yOffset = 0,             // initial galaxy Y offset
  zOffset = 0              // initial galaxy Z offset
}) {
  const galaxyRef = useRef()

  // Generate initial star positions
  const positions = useMemo(() => {
    const arr = new Float32Array(particles * 3)
    for (let i = 0; i < particles; i++) {
      const i3 = i * 3
      const r = Math.random() * radius
      const spinAngle = r * spin
      const branchAngle = ((i % branches) / branches) * Math.PI * 2

      const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness
      const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness
      const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness

      arr[i3 + 0] = Math.cos(branchAngle + spinAngle) * r + randomX + xOffset
      arr[i3 + 1] = randomY * 0.1 + yOffset
      arr[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ + zOffset
    }
    return arr
  }, [particles, radius, branches, spin, randomness, randomnessPower, xOffset, yOffset, zOffset])

  useFrame(() => {
    const positionsAttribute = galaxyRef.current.geometry.attributes.position

    // Upward drift
    for (let i = 1; i < particles * 3; i += 3) {
      if (positions[i] < maxHeight) {
        positions[i] += driftSpeed
      }
    }

    positionsAttribute.array = positions
    positionsAttribute.needsUpdate = true

    // Slow rotation
    galaxyRef.current.rotation.y += rotationSpeed
  })

  return (
    <points ref={galaxyRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles}
          array={positions}
          itemSize={3}
          usage={THREE.DynamicDrawUsage}
        />
      </bufferGeometry>

      <pointsMaterial 
        size={0.01}               // star size
        sizeAttenuation
        color="#ffffff"
        transparent
        opacity={0.9}
      />
    </points>
  )
}
