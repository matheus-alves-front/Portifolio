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
    camera.position.x = cameraPositionRef.current.x
    camera.position.y = cameraPositionRef.current.y
    camera.position.z = cameraPositionRef.current.z

    matheusRef.current.position.x = matheusPositionRef.current.x
    matheusRef.current.position.y = matheusPositionRef.current.y

    camera.lookAt(
      cameraPositionRef.current.lookAtX,
      cameraPositionRef.current.lookAtY,
      0
    )
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
    
    if (windowWidth < 768) {
      cameraPositionRef.current.x =  .15
      cameraPositionRef.current.lookAtX =  .15
    } else {
      cameraPositionRef.current.x =  .3
      cameraPositionRef.current.lookAtX =  .3
    }
  }

  const matheusPositionRef = useRef({
    y: -1.7,
    x: 0
  })

  const cameraPositionRef = useRef({
    x: .3,
    y: .5,
    z: .6,
    lookAtX: .3,
    lookAtY: .5
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