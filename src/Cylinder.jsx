import React from 'react'
import { useTexture  } from '@react-three/drei'
// import { CylinderGeometry, MeshStandardMaterial, Mesh } from 'three'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
const Cylinder = () => {

    let texture = useTexture('src/img.png');
    let cyl = useRef(null);
    useFrame((state, delta) => {
        // cyl.current.rotation.z += delta*1.5;
        // cyl.current.rotation.x += delta*2.5;
        cyl.current.rotation.y += delta*1.2;
    })
    return (
        <group ref={cyl}>
        <mesh rotation={[0, 0.2, 0.5]} >
            <cylinderGeometry args={[2, 2, 2, 32, 1, true]} />
            <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
        </mesh>
        </group>
    )
}

export default Cylinder;