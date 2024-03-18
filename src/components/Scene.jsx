import { useRef, useState } from 'react'
import { OrbitControls, Stars } from '@react-three/drei'

import Geometry from './Geometry'
import { useFrame } from '@react-three/fiber'

const Scene = () => {
  const ref = useRef();

  const [isClicked, setIsClicked] = useState(false);

  useFrame(() => {
    const speed = isClicked ? 0 : 0.005
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += speed
  })

  return (
    <>
      <Stars />
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[0, 0, 2]} 
        intensity={1}
      />
      <OrbitControls />
      <group 
        ref={ref}
        onClick={() => setIsClicked(!isClicked)}
      >
        <Geometry 
          position={[-2, 0, 0]} 
          size={[1, 32, 32]} 
          colors={["silver", "white"]} 
          whatToFetch={"people"} 
        />
        <Geometry 
          position={[0, -2, -3]} 
          size={[1, 32, 32]} 
          colors={["white", "silver"]} 
          whatToFetch={"planets"} 
        />
      </group>
    </>
  )
}

export default Scene