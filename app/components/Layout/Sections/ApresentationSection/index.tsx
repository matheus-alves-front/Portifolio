"use client"
import Typical from 'react-typical'
import styles from './Apresentation.module.scss'
import { motion, useScroll, useTransform } from "framer-motion"
import { archivoBlackFont, archivoFont } from '@/app/utils/nextFonts'
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { AnimationContext } from '@/app/contexts/AnimationContext'
import { TfiGame } from "react-icons/tfi";
import { Typewriter } from 'react-simple-typewriter'

const TYPE_ABOUT_MATHEUS = [
  'Front-end',
  'Full-stack',
  'Jedi',
  'Skater',
  'Crazy',
  'Gearhead'
]

export function ApresentationSection() {
  const { scrollY } = useScroll()
  const { updateAnimationKey } = useContext(AnimationContext)

  const [actualTypeText, setActualTypeText] = useState(0)

  useEffect(() => {
    setInterval(() => {
      if (actualTypeText < TYPE_ABOUT_MATHEUS.length) {
        setActualTypeText(actualTypeText + 1)
      } else {
        setActualTypeText(0)
      }
    }, 2000)
  }, [])

  let scrollYReverse = useTransform(() => scrollY.get() - (scrollY.get() * 2))

  return (
    <section className={styles.Container} id="apresentation">
      <div className='column'></div>
      <div className={styles.content}>
        <motion.nav
          style={{x: scrollY}}
          className={archivoFont.className}
        >
          <span
            className={styles.writingLabel}
          >
             <Typewriter 
              words={TYPE_ABOUT_MATHEUS}
              typeSpeed={50}
              deleteSpeed={50}
              loop={true}
              delaySpeed={1000} 
            />
          </span>
          <div className={styles.skillSet}>
            <button className={styles.skill} 
              onClick={() => updateAnimationKey('FallingForever')}
            >
               <TfiGame /> React.js
            </button>
            <button className={styles.skill} 
              onClick={() => updateAnimationKey('FightingIdle')}
            >
              <TfiGame /> Next.js 
            </button>
            <button className={styles.skill} 
              onClick={() => updateAnimationKey('PunchingBag')}
            >
              <TfiGame /> Prisma.io 
            </button>
            <button className={styles.skill} 
              onClick={() => updateAnimationKey('Counting')}
            >
              <TfiGame /> Three.js 
            </button>
            <button className={`${styles.skill} ${styles.last}`}
              onClick={() => updateAnimationKey('Typing')}
            >
              <TfiGame /> More + 
            </button>
          </div>
        </motion.nav>
        <motion.h1 
          style={{x: scrollYReverse}}
          className={archivoBlackFont.className}
        >
          Matheus Alves
        </motion.h1>
      </div>
    </section>
  )
}