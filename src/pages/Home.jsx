import { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import SpaceStation from '../models/SpaceStation';
import Stars from '../models/Stars';
import SpaceShip from '../models/SpaceShip';
import Jane from '../models/Jane';
import HomeInfo from '../components/HomeInfo';

import ghost from '../assets/fsm-team-ghost.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {

  const audioRef = useRef(new Audio(ghost));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [ currentAnimation, setCurrentAnimation ] = useState('wait')

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    }
  })

  const adjustSpaceStationForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -1.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768) {
      screenScale = [10, 10, 10];
    } else {
      screenScale = [11, 11, 11];
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjustJaneForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7];
      screenPosition = [0, -3.5, -0.5]
    } else {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0, -3.5, -0.5]
    }

    return [screenScale, screenPosition]
  }

  useEffect(() => {
    // Call changeAnimation whenever isRotating changes
    changeAnimation();
  }, [isRotating]); // Add isRotating as dependency

  const changeAnimation = () => {
    if(isRotating) {
      setCurrentAnimation('hero_janefoster01@dash')
    } else {
      setCurrentAnimation('wait')
    }
  }

  const [spaceStationScale, spaceStationPosition, spaceStationRotation] = adjustSpaceStationForScreenSize();
  const [janeScale, janePosition] = adjustJaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near:0.1, far:1000}}
      >
        {/* used to render the loading screen */}
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={[20]}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

          <SpaceShip />

          <Stars
            isRotating = {isRotating}
          />

          <SpaceStation
            position = {spaceStationPosition}
            scale = {spaceStationScale}
            rotation = {spaceStationRotation}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
          />

          <Jane
            currentAnimation={currentAnimation}
            isRotating = {isRotating}
            position = {janePosition}
            scale = {janeScale}
            rotation = {[-0.3,1.5,0]}
          />

        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img 
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home