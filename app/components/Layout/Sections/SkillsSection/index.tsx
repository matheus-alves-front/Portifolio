import styles from './Skills.module.scss'

export function SkillsSection() {
  const skills = [
    {
      name: 'Javascript',
      level: 90,
    },
    {
      name: 'React.js',
      level: 80,
    },
    {
      name: 'Next.js',
      level: 100,
    },
    {
      name: 'Vue',
      level: 70,
    },
    {
      name: 'Typescript',
      level: 60,
    },
    {
      name: 'Prisma.io',
      level: 90,
    }
    // 'Javascript',
    // 'React.js',
    // 'Next.js',
    // 'Vue.js',
    // 'Typescript',
    // 'Prisma.io',
    // 'HTML5',
    // 'CSS3',
    // 'Sass',
    // 'Less',
  ]

  return (
    <section className={styles.Skills} id="skills">
      <div className={styles.container}>
        <div className={styles.column} />
        <div className={styles.column}>
          <h2>Skills</h2>
          <div className={styles.skills}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skill}>
                <label htmlFor={`${index}`}>
                  <span className="skillLabel">{skill.name}</span>
                </label>
                <progress id={`${index}`} value={skill.level} max="100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}