import { useContext } from 'react'
import * as THREE from 'three';
import { PerspectiveCamera  } from '@react-three/drei'
import { 
  useFrame,
  useThree
} from '@react-three/fiber'
import { CanvaContext } from '../Context/CanvaContext'
import { PageContext } from '../Context/PageContext'

export function AnimatedCamera() {
  const { 
    cameraRef,
    cameraPositionRef, 
    modelMatheusOptionsRef, 
    modelMatheusRef 
  } = useContext(CanvaContext)

  const {camera} = useThree()

  const {step} = useContext(PageContext)

  const cameraPositionAnimation = new THREE.Vector3()

  useFrame((state, delta) => {
    const angle = state.clock.elapsedTime

    if (step === 'home') {
      camera.position.lerp(cameraPositionAnimation.set(
        cameraPositionRef.current.x,
        cameraPositionRef.current.y,
        cameraPositionRef.current.z,
      ), .1)

      camera.zoom = 5
    }

    if (step === 'skills') {
      const position = cameraPositionAnimation.set(
        0,
        2,
        cameraPositionRef.current.z,
      )
      camera.position.lerp(position, .1)
      camera.zoom = 3
    }

    camera.updateProjectionMatrix();
  })

  return (
    <PerspectiveCamera  
        ref={cameraRef}
        position={[
              cameraPositionRef.current.x,
              cameraPositionRef.current.y,
              cameraPositionRef.current.z
        ]} 
        makeDefault 
        // zoom={cameraPositionRef.current.zoom}
      />
  )
}