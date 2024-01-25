import { forwardRef } from 'react'
import styles from './credits.module.scss'

export const CreditsSection = forwardRef<HTMLDivElement>(function CreditsSection(props, ref) {
  return (
    <footer className={styles.Footer}>
      <h3 ref={ref}>Contributors:</h3>
      <p>Created and Developed by: <a href="https://www.linkedin.com/in/matheus-alves-pereira/">Matheus Alves</a></p>
      <p>Ui/Ux Envolved: <a href="https://www.linkedin.com/in/lucaslopesrp/">Lucas Lopes</a></p>
      <p>3D Model Envolved: <a href="https://www.instagram.com/rhopsis/">Lucas Alves</a></p>
    </footer>
  )
})