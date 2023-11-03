"use client"
import styles from './Skills.module.scss'
import { motion } from "framer-motion"
import { SkillItem } from './SkillItem'
import { LegacyRef, forwardRef } from 'react'

const Skills = [
  {
    name: 'HTML',
    level: '100%',
    texts: [
      'HTML 5 is the best for code organization and SEO',
      '<header>, <aside>, <main>, <section>, <summary> are the most used',
      'Build a cool HTML structure helps you when doing CSS and cool layouts like that!'
    ]
  },
  {
    name: 'Javascript',
    level: '95%',
    texts: [
      'Javascript is about everything on web, but it`s not only about using libs',
      'Learn the vanilla js will help you when you are using some librarie.',
      'I worked with vanilla js for 3 years and when I started to use the actual libs, I haven`t many trouble because my js basics was updated!'
    ]
  },
  {
    name: 'CSS',
    level: '100%',
    texts: [
      'CSS is CSS, CSS 3 is perfect to build cool layouts like that',
      'Do a cool responsive CSS will provides you a lot of good results in your Front-end applications',
      'Flexbox, Gridbox, animations, Canvas etc'
    ]
  },
  {
    name: 'React.js',
    level: '95%',
    texts: [
      'I have good knowledge and practice with React.js',
      'Good understanding the custom hooks, how to create my own hooks',
      'The Lifecicle of a component is a good way to understand the core of react.'
    ]
  },
  {
    name: 'Typescript',
    level: '80%',
    texts: [
      'I only use Typescript in my projects, the IDE helps me a lot when I`m coding',
      'Undestand the changes between types and interface',
      'How to extend types and common types.'
    ]
  },
  {
    name: 'Sass',
    level: '100%',
    texts: [
      'My main CSS stack, Usually I don`t like to use libs for CSS',
      'I love to build everything from 0 with Sass.',
      'Create themes variables and mixins are a good way to build a beautiful portifolio like that :D'
    ]
  },
  {
    name: 'Next.js',
    level: '100%',
    texts: [
      'My main stack using React.js, I love the Next.js features',
      'Routing, api Routing, data fetching, using Next 12 or 13',
      'This portifolio is using Next.js +13'
    ]
  },
  {
    name: 'Three.js',
    level: '40%',
    texts: [
      'I did the Three.js Journey Course and I love it',
      'I didn`t have many time to study and practice a lot',
      'But still one of my favorites stacks ever! 3D in a website is INSANE!'
    ]
  },
  {
    name: 'Node.js',
    level: '60%',
    texts: [
      'Node.js is about everything',
      'If you are a web developer you MUST learn about Node.js',
      'Everything is about node.js, you can do Backend and Frontend using only Node.js'
    ]
  },
  {
    name: 'Nest.js',
    level: '60%',
    texts: [
      'This is my main stack when I`m building a fullstack application',
      'When I was coding on node.js, I hate because is very ugly',
      'Other backend languages are so beautiful coding then Node.js',
      'But Nest.js IS PERFECT and SO EASY!'
    ]
  },
  {
    name: 'Prisma',
    level: '60%',
    texts: [
      'This is my main stack when I`m coding backend features',
      'I already used Typeorm, GraphQL',
      'But prisma makes things easy',
      'Do relations and Call it using Prisma/client is the best way',
      'The documentation is VERY GOOD!'

    ]
  },
  {
    name: 'Vue.js',
    level: '50%',
    texts: [
      'I read all the documentation of Vue.js, is a good one',
      'Actually is very require by the companies, so it`s good to understand their solutions',
      'I enjoyed a lot learning Vue.js, because having other stack in my knowledge is better for future opportunities'
    ]
  },
]

export const SkillsSection = forwardRef<HTMLDivElement>(function SkillsSection(props, ref) {
  return (
    <section id='skills' className={styles.Container}>
      <div></div>
      <motion.div 
        initial={{
          opacity: 0
        }} 
        whileInView={{
          opacity: 1
        }}
        transition={{ delay: .4 }}
      >
        <h2>SKILLS</h2>
        <div ref={ref} className={styles.skills}>
         {Skills.map((item, index) => (
          <SkillItem 
            key={index}
            level={item.level}
            name={item.name}
            texts={item.texts} 
          />
         ))}
        </div>
      </motion.div>
    </section>
  )
})