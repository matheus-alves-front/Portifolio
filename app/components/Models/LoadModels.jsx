import { useContext } from 'react'
import { 
  useControls,
  button 
} from 'leva'

import { CanvaContext } from '../Context/CanvaContext'

import { Matheus } from './Matheus'

export function LoadModels() {
  const {
    modelMatheusOptionsRef, 
    modelMatheusRef 
  } = useContext(CanvaContext)

  const {
    matheusPosition,
  } = useControls({
    matheusPosition: {
      joystick: 'invertY',
      value: {
        x: modelMatheusOptionsRef.current.x,
        y: modelMatheusOptionsRef.current.y,
        z: modelMatheusOptionsRef.current.z
      },
      min: -2,
      max: 2,
      step: 0.01
    },
    clickMe: button(() => {
      console.log('ok')
    }),
    select: { options: ['a', 'b', 'c']}
  })

  return (
    <>
      <group 
        ref={modelMatheusRef} 
        scale={1}
        position={[
          matheusPosition.x, 
          matheusPosition.x, 
          matheusPosition.x
        ]}
      >
        <Matheus
          scale={1.4} 
          position-y={0} 
          position-x={0}
          position-z={0}
        />
      </group>
    </>
  )
}