import { firaCodeFont } from '@/app/utils/nextFonts'
import styles from './Header.module.scss'
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export function Header() {
  return (
    <header className={`${styles.Container} ${firaCodeFont.className}`}>
      <div className={styles.socialLinks}>
        <a 
          className={styles.beta} 
          target="_blank"
          href="https://github.com/matheus-alves-front"
        > 
          <IoLogoGithub className={styles.betaIcon} />
          <small> 
            Github
          </small>
        </a>
        <a 
          className={styles.downloadCV}
          href='/downloads/CV-english.pdf'
          download={'CV-MATHEUS'}
        >
          Download CV
        </a>
      </div>
      <nav>
        <a href={'#apresentation'}>Home</a>
        <a href={'#skills'}>Skills</a>
        <a href={'#experiences'}>Experiences</a>
      </nav>
      <a 
        className={`${styles.linkedin} ${firaCodeFont.className}`} 
        href="https://www.linkedin.com/in/matheus-alves-pereira/" 
        target="_blank"
      >
        <button>
          <IoLogoLinkedin /> 
          Linkedin
        </button>
      </a>
    </header>
  )
}