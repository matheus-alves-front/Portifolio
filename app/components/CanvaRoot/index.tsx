"use client"
import { Canvas } from '@react-three/fiber'
import { LoadModels } from '../LoadModels'
import { StrictMode } from 'react'
import styles from './CanvaRoot.module.scss'

export function CanvaRoot({
  isSkillSection,
  isCareerSection,
  isCreditsSection
}: {
  isSkillSection: boolean,
  isCareerSection: boolean,
  isCreditsSection: boolean
}) {
  return (
    <section
      className={
        `${styles.CanvaRoot} 
          ${isSkillSection ? styles.SkillSection : null}
          ${isCareerSection ? styles.CareerSection : null}
          ${isCreditsSection ? styles.CareerSection : null}
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