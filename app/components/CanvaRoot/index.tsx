"use client"
import { Canvas } from '@react-three/fiber'
import { LoadModels } from '../LoadModels'
import { StrictMode, useContext, useEffect } from 'react'
import styles from './CanvaRoot.module.scss'
import { AnimationContext } from '@/app/contexts/AnimationContext'

export function CanvaRoot({
  isSkillSection,
  isCareerSection,
  isCreditsSection,
  isResumeSection
}: {
  isSkillSection: boolean,
  isCareerSection: boolean,
  isCreditsSection: boolean,
  isResumeSection: boolean
}) {
  const {updateAnimationKey} = useContext(AnimationContext)

  useEffect(() => {
    if (isSkillSection) {
      updateAnimationKey('FallingForever')
    }
    if (isCareerSection && !isSkillSection) {
      updateAnimationKey('Counting')
    }
  }, [
    isSkillSection,
    isCareerSection,
    isCreditsSection,
    isResumeSection
  ])


  return (
    <section
      className={
        `${styles.CanvaRoot} 
          ${isSkillSection ? styles.SkillSection : null}
          ${isCareerSection ? styles.CareerSection : null}
          ${isCreditsSection ? styles.CareerSection : null}
          ${isResumeSection ? styles.CareerSection : null}
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