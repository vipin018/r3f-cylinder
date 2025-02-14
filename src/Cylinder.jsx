import React from 'react'
import { useTexture  } from '@react-three/drei'
// import { CylinderGeometry, MeshStandardMaterial, Mesh } from 'three'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
const Cylinder = () => {

    let texture = useTexture('src/img4.jpg');
    let cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta;
    })
    return (
        <group ref={cyl}>
        <mesh rotation={[0, 0.3, 0.3]} >
            <cylinderGeometry args={[2, 2, 2, 60, 30, true]} />
            <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
        </mesh>
        </group>
    )
}

export default Cylinder;