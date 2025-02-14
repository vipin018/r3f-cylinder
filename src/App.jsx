import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
// import * as THREE from 'three'
import Cylinder from './Cylinder'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

const App = () => {
  return (
    <>
      <Canvas  >
        <OrbitControls />
        <ambientLight intensity={10} />
        <Cylinder />
        <EffectComposer>
          <Bloom
            mipmapBlur // Enables or disables mipmap blur.
            intensity={1.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          // blurPass={undefined} // A blur pass.
          // kernelSize={KernelSize.LARGE} // blur kernel size
          // mipmapBlur={false} // Enables or disables mipmap blur.
          // resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
          // resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
          />
        </EffectComposer>
      </Canvas>
    </>
  )
}

export default App