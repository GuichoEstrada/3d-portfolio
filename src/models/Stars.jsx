import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

import starsScene from '../assets/3d/billions_stars_skybox_hdri_panorama.glb';

  const Stars = ({isRotating}) => {
    const stars = useGLTF(starsScene);
    const starsRef = useRef();

    useFrame((_, delta) => {
      if(isRotating) {
        starsRef.current.rotation.y += 0.15 * delta
      }
    })
    
  return (
    <mesh 
      ref={starsRef}
      scale={200}
    >
        <primitive object={stars.scene} />
    </mesh>
  )
}

export default Stars;