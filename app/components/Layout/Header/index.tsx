import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.Container}>
      <div className={styles.socialLinks}>
        <a href="https://github.com/matheus-alves-front">
          <img src="/assets/icons/github.png" alt="Linkedin logo" />
        </a>
        <a className={styles.beta} href="https://github.com/matheus-alves-front/Portifolio"> 
          <small> 
            In Development
          </small>
        </a>
      </div>
      <nav>
        <a href={'#apresentation'}>Home</a>
        <a href={'#skills'}>Skills</a>
        <a href={'#experiences'}>Experiences</a>
      </nav>
      <a href="https://www.linkedin.com/in/matheus-alves-pereira/" target="_blank">
        <button>Let's Connect</button>
      </a>
    </header>
  )
}