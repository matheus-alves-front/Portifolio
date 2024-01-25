"use client"
import { AnimationContext } from '@/app/contexts/AnimationContext';
import styles from './styles.module.scss'
import { useContext, useState } from 'react';
import Image from 'next/image';
import { color, motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa";
import { TfiGame } from "react-icons/tfi";

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
  const [isEnter, setIsEnter] = useState(false)
  
  return (
    <>
      {/* {!isEnter ?  */}
      <motion.section 
        transition={{
          type: 'spring',
          damping: 10,
          stiffness: 100
        }} 
        variants={variants} 
        animate={!isEnter ? 'active' : 'inactive'} 
        className={styles.Dialog}
      >
          {isLoader ?
            <Image
              alt='Loading' 
              width={200} 
              height={200} 
              src={'/assets/loadingGif.gif'} 
            />
          :
            <div className={styles.ReadySection}>
                <h3>Ready!</h3>
                <p>Welcome to my website. The <TfiGame className={styles.playableIcon} /> elements indicates that has a 3d action when you click! <br /> Hope you enjoy!</p>
                {/* <button>Music <GiSoundOn /></button> */}
                <button 
                  onClick={() => setIsEnter(true)}
                >
                  Enter <FaArrowRight />
                </button>
            </div>
          }
        </motion.section>
      {/* : null } */}
    </>
  )
}