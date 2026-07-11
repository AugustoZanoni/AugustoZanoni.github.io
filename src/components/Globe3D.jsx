import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

function RotatingGlobe() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <group>
      <Sphere ref={meshRef} args={[2.5, 64, 64]}>
        <meshStandardMaterial
          color="#3b82f6"
          wireframe={true}
          emissive="#1e40af"
          emissiveIntensity={0.2}
          transparent={true}
          opacity={0.6}
        />
      </Sphere>
      
      <Sphere args={[2.8, 64, 64]}>
        <meshBasicMaterial
          color="#8b5cf6"
          wireframe={true}
          transparent={true}
          opacity={0.1}
        />
      </Sphere>
    </group>
  )
}

function Globe3D() {
  return (
    <div className="globe-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        <RotatingGlobe />
        
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={15}
          autoRotate={false}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

export default Globe3D
