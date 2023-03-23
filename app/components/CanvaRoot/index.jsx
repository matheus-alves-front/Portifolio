"use client"
import { Canvas } from '@react-three/fiber'
import { useContext, useEffect } from 'react'
import { HomeContext } from '../Context/HomeContext'

import { 
  CineonToneMapping,
  ACESFilmicToneMapping,
  LinearEncoding
} from 'three'
import { LoadModels } from '../LoadModels'

import './CanvaRoot.scss'

export function CanvaRoot() {
  const cameraSettings = {
    fov: 45,
    near: .1,
    far: 200,
    position: [3,2,6],
    zoom: 1000
  }

  const { step } = useContext(HomeContext)

  return (
    <section
      className={`CanvaRoot ${step}`}
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