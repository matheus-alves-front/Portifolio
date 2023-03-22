import { 
  useFrame,
  useThree,
  extend,
  userFrame
} from '@react-three/fiber'
import { useRef } from 'react'

import { 
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
  Text,
  MeshReflectorMaterial,
  Float
} from '@react-three/drei'


export function ExperienceThree() {
  const cubeMesh = useRef()
  const groupRef = useRef()
  
  //   // ANIMAÇÃO CAMERA RODANDO
  // const {
  //   camera, 
  //   gl
  // } = useThree()
  // useFrame((state, delta) => {
  //   cubeMesh.current.rotation.y += 2 * delta
  //   // groupRef.current.rotation.y += 1 * delta
    
  //   // const angle = state.clock.elapsedTime
  //   // state.camera.position.x = Math.sin(angle) * 8
  //   // state.camera.position.z = Math.cos(angle) * 8
  //   // state.camera.lookAt(0,0,0)
  // })

  return(
    <>
      <OrbitControls makeDefault/>

      <directionalLight position={
        [
          1,
          2,
          3
        ]
      } color="white" intensity={1.5}/>
      <ambientLight intensity={.03}/>
      
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color={'orange'}/>
        </mesh>
        <PivotControls 
          anchor={[0,1,0]}
          depthTest={false}
        >
          <mesh 
            rotation-y={.5} 
            position-x={2}
            scale={1.5}
            ref={cubeMesh}
          >
            <boxGeometry 
              scale={1}
            />
            <Html>
              <button>Test</button>
            </Html>
            <meshStandardMaterial 
              color="purple" 
              wireframe={false}
            />
          </mesh>
        </PivotControls>
      </group>
      <mesh
        position-y={-1} 
        rotation-x={ - Math.PI * .5}
        scale={10}
      >
        <planeGeometry />
        <MeshReflectorMaterial 
          color={'white'} 
          resolution={502}
          mixBlur={1}
          mirror={1}
        />
      </mesh>

      <Float speed={5}>
        <Text color={'black'} scale={.4} position-y={2}>
          Eu Sou Foda
        </Text>
      </Float>
    
    </>
  )
}