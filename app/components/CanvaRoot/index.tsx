"use client"
import { Canvas } from '@react-three/fiber'
import { LoadModels } from '../LoadModels'
import { StrictMode } from 'react'
import styles from './CanvaRoot.module.scss'

export function CanvaRoot({
  isSkillSection,
  isCareerSection
}: {
  isSkillSection: boolean
  isCareerSection: boolean
}) {
  return (
    <section
      className={
        `${styles.CanvaRoot} 
        ${isSkillSection ? styles.SkillSection : ''}
        ${isCareerSection ? styles.CareerSection : ''}
        `
      }
    >
      <StrictMode>
        <Canvas
          // flat
          dpr={[1, 2]}
          gl={{
            antialias: true,
          }}
        >
          <LoadModels />
        </Canvas>
      </StrictMode>
    </section>
  )
}