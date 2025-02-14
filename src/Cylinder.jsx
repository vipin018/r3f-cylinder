import React from 'react'
import { useTexture  } from '@react-three/drei'
// import { CylinderGeometry, MeshStandardMaterial, Mesh } from 'three'
import * as THREE from 'three'

const Cylinder = () => {

    let texture = useTexture('src/img3.jpg');
    return (
        <mesh>
            <cylinderGeometry args={[2, 2, 2, 30, 30, true]} />
            <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
        </mesh>
    )
}

export default Cylinder;