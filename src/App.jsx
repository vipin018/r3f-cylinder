import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
// import * as THREE from 'three'
import Cylinder from './Cylinder'


const App = () => {  
  return (
    <>
    <Canvas >
      <OrbitControls />
      <ambientLight intensity={10} />
      <Cylinder />
    </Canvas>
    </>
  )
}

export default App