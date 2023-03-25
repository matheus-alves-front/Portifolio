"use client"
import { useContext, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
// import { Perf } from 'r3f-perf'

import { CanvaContextProvider } from '../Context/CanvaContext'
import { PageContext } from '../Context/PageContext'
import { LoadModels } from '../Models/LoadModels'
import {AnimatedCamera} from '../Models/Camera'

import './CanvaRoot.scss'

export function CanvaRoot() {
  const { step } = useContext(PageContext)

  return (
    <section className={`CanvaRoot ${step}`}
    >
      <Canvas gl={{ antialias: true, }} camera={{manual: true}}>
        <CanvaContextProvider>
          <LoadModels />

          <AnimatedCamera />
          {/* {perfVisible ? <Perf position={'bottom-right'} /> : null} */}
          {/* 
            Lights
          */}
          <directionalLight
            position={[ 1,1,0 ]} 
            color="white" 
            intensity={4}
            // castShadow 
          />
          <ambientLight intensity={1}/>
        </CanvaContextProvider>
      </Canvas>
    </section>
  )
}