import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.Container}>
      <div className={styles.socialLinks}>
        <a href="#">
          <img src="/assets/icons/github.png" alt="Linkedin logo" />
        </a>
        <a href="#"> 
          <img src="/assets/icons/github.png" alt="Linkedin logo" />
        </a>
      </div>
      <nav>
        <a href={'#'}>Home</a>
        <a href={'#'}>Skills</a>
        <a href={'#'}>Achievements</a>
      </nav>
      <button>Let's Connect</button>
    </header>
  )
}