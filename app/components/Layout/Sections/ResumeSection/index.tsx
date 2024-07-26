import Image from "next/image";
import { forwardRef } from "react";

import styles from './styles.module.scss';
import Link from "next/link";

const COMPANIES = [
  {
    name: 'Kubikware',
    title: 'Backend',
    url: 'https://speaky.com/'
  },
  {
    name: 'Speaky',
    title: 'Front-end',
    url: 'https://speaky.com/'
  }, 
  {
    name: 'Overdose Digital',
    title: 'Front-end',
    url: 'https://overdose.digital/'
  }, 
  {
    name: 'TREZO',
    title: 'Front-end',
    url: 'https://trezo.com.br/en/'
  }, 
  {
    name: 'FCamara',
    title: 'Front-end',
    url: 'https://fcamara.com/'
  }, 
  {
    name: 'Tatix',
    title: 'Front-end',
    url: 'https://www.tatix.com.br/'
  }, 
  {
    name: 'WEBJUMP',
    title: 'Front-end Jr',
    url: 'https://webjump.ai/en/'
  }, 
  {
    name: 'Perfect Pay',
  title: 'Front-end Jr',
    url: 'https://perfectpay.com.br/'
  }

]

export const ResumeSection = forwardRef<HTMLDivElement>(function ResumeSection(props, ref) {
  return (
    <section 
      className={styles.ResumeSection}
    >
      <figure>
        <Image 
          width={200}
          height={200}
          src={'/assets/foto-perfil.jpg'}
          alt="Foto Perfil LinkedIn"
        />
        <figcaption><Link target="_blank" href={'https://www.linkedin.com/in/matheus-alves-pereira/details/experience/'}> 
          Show Linkedin Profile
        </Link></figcaption>
      </figure>
      <div ref={ref} className={styles.resumeContent}>
        <h3>Companies I've worked on...</h3>
        <ul className={styles.ul}>
          {COMPANIES.map((company) => (
            <li key={company.name} className={styles.li}>
              <a target="_blank" href={company.url}>
                {company.name} - {company.title} 
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
})