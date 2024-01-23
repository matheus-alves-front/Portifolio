"use client"
import Typical from 'react-typical'
import styles from './Apresentation.module.scss'
import { motion, useScroll, useTransform } from "framer-motion"
import { archivoBlackFont, archivoFont } from '@/app/utils/nextFonts'
import { useContext } from 'react'
import { AnimationContext } from '@/app/contexts/AnimationContext'


export function ApresentationSection() {
  const { scrollY } = useScroll()
  const { updateAnimationKey } = useContext(AnimationContext)

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
            <Typical 
              loop={Infinity}
              wrapper="b"
              steps={[
                'Front-end',
                2000,
                'Jedi',
                2000,
                'Skater',
                2000,
                'Crazy',
                2000
                // 'Spike-Lee',
                // 2000,
                // 'Choosen Boyz',
                // 2000,
                // 'Sly-Boogie',
                // 2000
              ]}
            />
          </span>
          <div className={styles.skillSet}>
            <span className={styles.skill}>React.js</span>
            <span className={styles.skill}>Next.js</span>
            <span className={styles.skill}>Prisma.io</span>
            <span className={styles.skill}>Three.js</span>
            <span className={`${styles.skill} ${styles.last}`}
              onClick={() => updateAnimationKey('Porrada')}
            >More +</span>
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