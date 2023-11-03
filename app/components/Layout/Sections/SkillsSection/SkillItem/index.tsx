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
      <h5 className={isTexts ? styles.clicked : ''}>
        {name}
        <br />
        <small>Level {level.replace('%', '')}</small>
      </h5>
      <div className={`${styles.skillLevelContent} ${isTexts ? styles.clicked : ''}`}>
        <div 
          className={`${styles.skillLevel}`}
          style={{
            width: level
          }}
        >
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