"use client"
import { createContext, useContext, useEffect, useRef, useState } from "react"

export const CanvaContext = createContext({})

export function CanvaContextProvider({children}) {
  // Models Configuration
  const modelMatheusRef = useRef(null);

  const modelMatheusOptionsRef = useRef({
    y: 0,
    x: 0,
    z: 0,
    rotationX: 0,
    scale: {
      x: 1.4,
      y: 1.4,
      z: 1.4
    }
  })

  // Camera Configuration
  const cameraRef = useRef(null)

  const cameraPositionRef = useRef({
    x: .2,
    y: 2.3,
    z: 5,
    lookAtX: .3,
    lookAtY: .5,
    zoom: 1000
  })


  return (
    <CanvaContext.Provider value={{
      modelMatheusRef,
      modelMatheusOptionsRef,
      cameraRef,
      cameraPositionRef
    }}>
      {children}
    </CanvaContext.Provider>
 )
}