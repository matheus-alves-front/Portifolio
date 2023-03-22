"use client"
import { Canvas } from '@react-three/fiber'

import { 
  CineonToneMapping,
  ACESFilmicToneMapping,
  LinearEncoding
} from 'three'
import { LoadModels } from '../LoadModels'

import styles from './CanvaRoot.module.scss'

export function CanvaRoot() {
  const cameraSettings = {
    fov: 45,
    near: .1,
    far: 200,
    position: [3,2,6],
    zoom: 1000
  }

  return (
    <section
      className={styles.CanvaRoot}
    >
      <Canvas
        orthographic
        // flat
        dpr={[1, 2]}
        gl={{
          antialias: true,
          // toneMapping: LinearEncoding
        }}
        camera={cameraSettings}
      >
        <LoadModels />
      </Canvas>
    </section>
  )
}