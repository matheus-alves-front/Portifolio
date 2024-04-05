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
  isResumeSection,
  isRecommensationsInView
}: {
  isSkillSection: boolean,
  isCareerSection: boolean,
  isCreditsSection: boolean,
  isResumeSection: boolean,
  isRecommensationsInView: boolean
}) {
  const {updateAnimationKey} = useContext(AnimationContext)

  useEffect(() => {
    if (isSkillSection) {
      updateAnimationKey('FallingForever')
      return
    }
    if (isCareerSection && !isSkillSection && !isResumeSection) {
      updateAnimationKey('Counting')
      return
    }
    if (isRecommensationsInView && !isResumeSection) {
      updateAnimationKey('FightingIdle')
    }
  }, [
    isSkillSection,
    isCareerSection,
    isCreditsSection,
    isResumeSection,
    isRecommensationsInView
  ])


  return (
    <section
      className={
        `${styles.CanvaRoot} 
          ${isSkillSection ? styles.SkillSection : null}
          ${isCareerSection ? styles.CareerSection : null}
          ${isCreditsSection ? styles.CareerSection : null}
          ${isResumeSection ? styles.CareerSection : null}
          ${isRecommensationsInView ? styles.CareerSection : null}
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