import { useRef, useState } from 'react'
import { useFrame } from "@react-three/fiber"

import Overlay from './Overlay';

const Geometry = ({ position, colors, whatToFetch }) => {
  const ref = useRef();

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered ? 0.1 : 0.2
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += delta * speed
  })

  return (
    <>
      <mesh 
        ref={ref} 
        position={position}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)}
        onClick={() => setIsClicked(!isClicked)}
        scale={isHovered ? 1.2 : 1}
      >
        <dodecahedronGeometry />
        <meshStandardMaterial color={isClicked ? colors[0] : colors[1]} />
        <Overlay whatToFetch={whatToFetch} />
      </mesh>
    </>
  )
}

export default Geometry