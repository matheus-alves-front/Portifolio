import { useEffect, useRef } from 'react'
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

    camera.lookAt(.3,.5,0)
  })

  useEffect(() => {
    matheusRef.current.position.x = 0
    matheusRef.current.position.y = -.2
    matheusRef.current.position.z = 0
  }, [])

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
        <Matheus scale={1.4} position-y={-1.5} />
      </group>
    </>
  )
}