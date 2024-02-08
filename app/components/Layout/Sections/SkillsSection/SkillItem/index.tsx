"use client"
import { useContext, useState } from 'react'
import styles from '../Skills.module.scss'
import { AnimationContext } from '@/app/contexts/AnimationContext'
import { AnimationKey } from '@/app/utils/AnimationsPositionsRef'
import { TfiGame } from "react-icons/tfi";

export function SkillItem({
  name,
  level,
  texts,
  animation
}: {
  name: string,
  level: string,
  texts: string[],
  animation: AnimationKey
}) {
  const [isTexts, setIsTexts] = useState(false)
  const { updateAnimationKey } = useContext(AnimationContext)

  const handleTexts = () => {
    // setIsTexts(true)

    // setTimeout(() => {
    //   setIsTexts(false)
    // }, 5000)
    updateAnimationKey(animation)
  }
  return (
    <div 
      className={styles.skill}
      onClick={handleTexts}
    >
      <h5 className={isTexts ? styles.clicked : ''}>
        {name}
      </h5>
      <div className={`${styles.skillLevelContent} ${isTexts ? styles.clicked : ''}`}>
        <div 
          className={`${styles.skillLevel}`}
          style={{
            width: level
          }}
        >
          <TfiGame className={styles.playableIcon} />
        </div>
        {texts.map((text, index) => (
          <p key={index} className={isTexts ? styles.clicked : ''}>
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}