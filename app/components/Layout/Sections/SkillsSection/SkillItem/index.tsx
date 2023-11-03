"use client"
import { useState } from 'react'
import styles from '../Skills.module.scss'

export function SkillItem({
  name,
  level,
  texts
}: {
  name: string,
  level: string,
  texts: string[]
}) {
  const [isTexts, setIsTexts] = useState(false)

  const handleTexts = () => {
    setIsTexts(true)

    setTimeout(() => {
      setIsTexts(false)
    }, 5000)
  }
  return (
    <div 
      className={styles.skill}
      onClick={handleTexts}
    >
      <h5 className={isTexts ? styles.clicked : ''}>{name}</h5>
      <div 
        className={`${styles.skillLevel} ${isTexts ? styles.clicked : ''}`}
        style={{
          width: level
        }}
      >
        {texts.map((text, index) => (
          <p key={index} className={styles.clicked}>
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}