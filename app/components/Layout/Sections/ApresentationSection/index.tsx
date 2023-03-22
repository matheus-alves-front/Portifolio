"use client"
import Typical from 'react-typical'
import styles from './Apresentation.module.scss'

export function ApresentationSection() {
  return (
    <section className={styles.Container} id="#apresentation">
      <div className='column'></div>
      <div className={styles.content}>
        <nav>
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
            <span className={`${styles.skill} ${styles.last}`}>6 More +</span>
          </div>
        </nav>
        <h1>Matheus Alves</h1>
      </div>
    </section>
  )
}