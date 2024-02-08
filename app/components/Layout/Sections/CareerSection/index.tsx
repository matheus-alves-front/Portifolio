
import { forwardRef, useState } from "react";
import styles from './Career.module.scss'
import { archivoBlackFont, archivoFont } from "@/app/utils/nextFonts";
import { IconReverse } from "@/app/components/IconReverse";

const CAREER_RESUME = [
  {
    year: 2018,
    stacks: [
      'html',
      'css',
      'javascript',
      'jquery',
      'bootstrap',
      'github',
    ],
    texts: [
      'I started from the bottom, so when I was a junior I studied hard to have good skills to work in a great company',
    ]
  },
  {
    year: 2019,
    stacks: [
      'html',
      'css',
      'javascript',
      'jquery',
      'bootstrap',
      'github',
      'magento',
      'phtml',
      'mysql',
      'git',
      'vitejs',
      'less'
    ],
    texts: [
      'I finally completed 1 year as a developer, so I discovered a lot of tools and frameworks',
      'So It was hard because it`s a lot of stacks to learn and be good',
      'In this year, I was working 8h per day and studying 5h per day',
      'So I can say that this year I didn`t slept.'
    ]
  },
  {
    year: 2020,
    stacks: [
      'html',
      'css',
      'javascript',
      'jquery',
      'bootstrap',
      'github',
      'bitbucket',
      'magento',
      'phtml',
      'mysql',
      'git',
      'vitejs',
      'react',
      'sass',
      'less',
      'nextjs',
      'typescript'
    ],
    texts: [
      'This year was my best, I discovered a lot of new stacks that was the best sellers',
      'So I studied a lot to be great on these stacks!',
      'Working hard, studying hard was normal for me',
      'So I really enjoyed this year because I was not a Junior, I was a mid-level',
      'I was very happy with this evolution.'
    ]
  },
  {
    year: 2021,
    stacks: [
      'html',
      'css',
      'javascript',
      'jquery',
      'bootstrap',
      'github',
      'bitbucket',
      'magento',
      'phtml',
      'mysql',
      'git',
      'vitejs',
      'react',
      'sass',
      'less',
      'nextjs',
      'typescript'
    ],
    texts: [
      ''
    ]
  },
  {
    year: 2022,
    stacks: [
      'html',
      'css',
      'javascript',
      'jquery',
      'bootstrap',
      'github',
      'bitbucket',
      'gitlab',
      'magento',
      'phtml',
      'mysql',
      'git',
      'vitejs',
      'react',
      'sass',
      'less',
      'nextjs',
      'typescript',
      'mongodb',
      'prisma',
    ],
    texts: [
      ''
    ]
  },
  {
    year: 2023,
    stacks: [
      'html',
      'css',
      'javascript',
      'jquery',
      'bootstrap',
      'github',
      'bitbucket',
      'gitlab',
      'magento',
      'phtml',
      'mysql',
      'git',
      'vitejs',
      'react',
      'sass',
      'less',
      'nextjs',
      'typescript',
      'mongodb',
      'prisma',
      'threejs',
      'nestjs'
    ],
    texts: [
      ''
    ]
  },
  {
    year: 2024,
    stacks: [
      'html',
      'css',
      'javascript',
      'jquery',
      'bootstrap',
      'github',
      'bitbucket',
      'gitlab',
      'magento',
      'phtml',
      'mysql',
      'git',
      'vitejs',
      'react',
      'sass',
      'less',
      'nextjs',
      'typescript',
      'mongodb',
      'prisma',
      'threejs',
      'nestjs'
    ],
    texts: [
      ''
    ]
  }
]

export const CareerSection = forwardRef<HTMLDivElement>(function CareerSection(props, ref) {
  const [actualYear, setActualYear] = useState(2024)
  const [yearIndex, setYearIndex] = useState(6)

  return (
    <section id="experiences" className={`${styles.Container}`}>
      <h2 className={archivoBlackFont.className}>EXPERIENCES</h2>
      <nav className={`${styles.yearsButtons}`}>
        {CAREER_RESUME.map((item, index) => (
          <button 
            key={index}
            onClick={() => {
              setActualYear(item.year)
              setYearIndex(index)
            }}
            className={`${actualYear === item.year ? styles.active : ''} ${archivoFont.className}`}
          >
            {item.year}
          </button>
        ))}
      </nav>
      <div ref={ref} className={styles.stacks}>
        {CAREER_RESUME[yearIndex].stacks.map(item => (
          <IconReverse key={item} name={item} alt={item} />
        ))}
      </div>
    </section>
  )
})