"use client"
import { useContext, useEffect, useRef, useState } from 'react'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { 
  useFrame,
  useThree,
  GroupProps,
} from '@react-three/fiber'
import { motion } from 'framer-motion-3d'
import { useControls } from 'leva'
import { AnimationContext } from '../contexts/AnimationContext'
import { ANIMATIONS_POSITIONS_DESKTOP } from '../utils/AnimationsPositionsRef'
import { MatheusV3 } from './Models/MatheusV3'

export function LoadModels() {
  const {animationKey} = useContext(AnimationContext)
  const matheusRef = useRef<GroupProps>(null)

  const [isMobileView, setIsMobileView] = useState(false)
  
  const {
    camera, 
    gl
  } = useThree()

  const matheusPositionRef = useControls('position boneco',{
    y: {
      value: ANIMATIONS_POSITIONS_DESKTOP[animationKey].y,
      step: 0.001,
      min: -5,
      max: 5
    },
    x: {
      value: ANIMATIONS_POSITIONS_DESKTOP[animationKey].x,
      step: 0.001,
      min: -1,
      max: 1
    },
    z: {
      value: ANIMATIONS_POSITIONS_DESKTOP[animationKey].z,
      step: 0.001,
      min: -5,
      max: 5
    }
  }, 
  {
    collapsed: true
  })

  const matheusRotationRef = useControls('rotation boneco',{
    x: {
      value: 0,
      step: 0.01,
      min: -5,
      max: 5
    },
    y: {
      value: ANIMATIONS_POSITIONS_DESKTOP[animationKey].rotationY,
      step: 0.01,
      min: -1,
      max: 1
    },
    z: {
      value: 0,
      step: 0.01,
      min: -5,
      max: 5
    }
  }, 
  {
    collapsed: true
  })


  const CameraControls = useControls('camera', {
    x: {
      value: 0,
      step: 0.01,
      min: -5,
      max: 5
    },
    y: {
      value: 0.5,
      step: 0.01,
      min: -5,
      max: 5
    },
    z: {
      value: 1,
      step: 0.01,
      min: 1,
      max: 10
    },
    lookAtX: {
      value: 0.3,
      step: 0.01,
      min: -1,
      max: 1
    },
    lookAtY: {
      value: 0.5,
      step: 0.01,
      min: -5,
      max: 5
    },
    lookAtZ: {
      value: 0,
      step: 0.01,
      min: -5,
      max: 5
    },
    far: {
      value: 1000,
      step: 0.01,
      min: 10,
      max: 1000
    },
    zoom: {
      value: 1,
      step: 0.01,
      min: 1,
      max: 2000
    }
  }, 
  {
    collapsed: true,
  })


  useFrame((state, delta) => {
    HandleAnimations()
  })

  function HandleAnimations() {
     // const angle = state.clock.elapsedTime * .05
    // Camera
    camera.position.x = CameraControls.x
    camera.position.y = CameraControls.y
    camera.position.z = CameraControls.z
    camera.far = CameraControls.far
    camera.near = 0.1
    camera.zoom = CameraControls.zoom
    
    camera.updateProjectionMatrix();
    // CONTROLLER
    // // @ts-ignore
    // matheusRef.current.position.x = matheusPositionRef.x
    // // @ts-ignore
    // matheusRef.current.position.y = matheusPositionRef.y
    // // @ts-ignore
    // matheusRef.current.position.z = matheusPositionRef.z

    // @ts-ignore
    matheusRef.current.rotation.x = matheusRotationRef.x
    // @ts-ignore
    // matheusRef.current.rotation.y = matheusRotationRef.y
    matheusRef.current.rotation.y =  ANIMATIONS_POSITIONS_DESKTOP[animationKey].rotationY
    // @ts-ignore
    matheusRef.current.rotation.z = matheusRotationRef.z
    // ---------------------------------------------------------------
    // BONECO
    // @ts-ignore
    matheusRef.current.position.x = ANIMATIONS_POSITIONS_DESKTOP[animationKey].x
    // @ts-ignore
    matheusRef.current.position.y = ANIMATIONS_POSITIONS_DESKTOP[animationKey].y
    // @ts-ignore
    matheusRef.current.position.z = ANIMATIONS_POSITIONS_DESKTOP[animationKey].z

    // // @ts-ignore
    // matheusRef.current.rotation.x = matheusRotationRef.x
    // @ts-ignore
    // // @ts-ignore
    // matheusRef.current.rotation.z = matheusRotationRef.z

    if (isMobileView) {
      camera.lookAt(
        0,
        CameraControls.lookAtY,
        CameraControls.lookAtZ
      )
    } else {
      camera.lookAt(
        CameraControls.lookAtX,
        CameraControls.lookAtY,
        CameraControls.lookAtZ
      )
    }
  }

  useEffect(() => {
    getWindowSize()

    window.addEventListener('resize', getWindowSize);

    return () => window.removeEventListener('resize', getWindowSize);
  }, [])

  function getWindowSize() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (windowWidth < 1024) {
      setIsMobileView(true)
    } else {
      setIsMobileView(false)
    }
  }


  return (
    <>
      <OrbitControls makeDefault/>
      <motion.directionalLight
        castShadow 
        position={[
          1,1,0
        ]} 
        color="white" 
        intensity={4}
      />
      <motion.ambientLight intensity={1}/>
      <PerspectiveCamera makeDefault />
      <motion.group ref={matheusRef}>
        <MatheusV3 
          scale={1} 
          position-y={.1} 
          position-x={0}
        />
      </motion.group>
    </>
  )
}