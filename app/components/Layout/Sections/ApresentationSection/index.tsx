import styles from './Apresentation.module.scss'

export function ApresentationSection() {
  return (
    <section className={styles.Container} id="#apresentation">
      <div className='column'></div>
      <div className={styles.content}>
        <nav>
          <span className={styles.writingLabel}>Front-End</span>
          <div className={styles.skillSet}>
            <span className={styles.skill}>React.js</span>
            <span className={styles.skill}>Next.js</span>
            <span className={styles.skill}>Prisma.io</span>
            <span className={styles.skill}>6 More +</span>
          </div>
        </nav>
        <h1>Matheus Alves</h1>
      </div>
    </section>
  )
}