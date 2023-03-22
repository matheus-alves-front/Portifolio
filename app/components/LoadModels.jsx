import { useEffect, useRef, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { 
  useFrame,
  useThree,
  extend,
  userFrame
} from '@react-three/fiber'

import { Matheus } from '../components/Models/Matheus'

export function LoadModels() {
  const matheusRef = useRef(null)

  const {
    camera, 
    gl
  } = useThree()

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime * .05
    camera.position.x = .3
    camera.position.y = .5
    camera.position.z = .6

    matheusRef.current.position.x = matheusPositionRef.current.x
    matheusRef.current.position.y = matheusPositionRef.current.y

    camera.lookAt(.3,.5,0)
  })

  useEffect(() => {
    getWindowSize()

    matheusRef.current.position.x = matheusPositionRef.current.x
    matheusRef.current.position.y = matheusPositionRef.current.y
    matheusRef.current.position.z = 0

    window.addEventListener('resize', getWindowSize);

    return () => window.removeEventListener('resize', getWindowSize);
  }, [])

  function getWindowSize() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (windowHeight < 780) {
      matheusPositionRef.current.y  = -1.8
    } else {
      matheusPositionRef.current.y  = -1.7
    }

    if (windowWidth < 1024) {
      matheusPositionRef.current.x  = .1
    } else {
      matheusPositionRef.current.x  = 0
    }
  }

  const matheusPositionRef = useRef({
    y: -1.7,
    x: 0
  })

  return (
    <>
      {/* <OrbitControls makeDefault/> */}
      <directionalLight
        castShadow 
        position={[
          1,1,0
        ]} 
        color="white" 
        intensity={4}
      />
      <ambientLight intensity={1}/>

      <group ref={matheusRef}>
        <Matheus 
          scale={1.4} 
          position-y={0} 
          position-x={0}
        />
      </group>
    </>
  )
}