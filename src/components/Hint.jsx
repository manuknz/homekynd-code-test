import { Html } from '@react-three/drei'

const Hint = () => {
  return (
    <Html position={[-10.5, 3.5, 0]} >
      <div className='container'>
        <h2>Instructions</h2>
        <p>● Click on the geometries to stop the group rotation and change colors.</p>
        <p>● Click on the card with the planet or person name to loop through the data.</p>
        <p>● Hover over the geometry to increase its size.</p>
        <p>● Drag with the right mouse button to pan the scene.</p>
        <p>● Drag with the left mouse button to rotate the scene.</p>
        <p>● Scroll to zoom in or out.</p>
      </div>
    </Html>
  )
}

export default Hint