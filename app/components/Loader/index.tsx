"use client"
import { AnimationContext } from '@/app/contexts/AnimationContext';
import styles from './styles.module.scss'
import { useContext } from 'react';
import Image from 'next/image';
import { color, motion } from "framer-motion"
const variants = {
  active: {
      opacity: 1
  },
  inactive: {
    opacity: 0,
    zIndex: 0
  }
}

export function Loader() {
  const {isLoader} = useContext(AnimationContext)
  
  return (
    <>
      {isLoader ? 
        <motion.section 
          transition={{
            type: 'spring',
            damping: 10,
            stiffness: 100
          }} 
          variants={variants} 
          animate={!isLoader ? 'active' : 'inactive'} 
          className={styles.Dialog}
        >
          <Image
            alt='Loading' 
            width={200} 
            height={200} 
            src={'/assets/loadingGif.gif'} 
          />
        </motion.section>
      : null}
    </>
  )
}