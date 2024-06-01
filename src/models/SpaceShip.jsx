import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import spaceShipScene from "../assets/3d/spaceship_-_cb2.glb";

const SpaceShip = () => {
  const spaceShipRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(spaceShipScene);

  // Get access to the animations for the spaceShip
  const { actions } = useAnimations(animations, spaceShipRef);

  // Play the "FLY" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    actions["FLY"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate spaceShip-like motion using a sine wave
    spaceShipRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the spaceShip reached a certain endpoint relative to the camera
    if (spaceShipRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the spaceShip 180 degrees on the y-axis
      spaceShipRef.current.rotation.y = Math.PI;
    } else if (spaceShipRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the spaceShip's rotation
      spaceShipRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (spaceShipRef.current.rotation.y === 0) {
      // Moving forward
      spaceShipRef.current.position.x += 0.01;
      spaceShipRef.current.position.y -= 0.01;
    } else {
      // Moving backward
      spaceShipRef.current.position.x -= 0.01;
      spaceShipRef.current.position.y += 0.01;
    }
  });

  return (
    // to create and display 3D objects
    <mesh ref={spaceShipRef} rotation={[0.1,-10,0]} position={[-9, -2, 1]} scale={[0.06, 0.06, 0.06]}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}

export default SpaceShip;