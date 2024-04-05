import Image from "next/image";
import { delay, motion, useAnimation } from "framer-motion";
import { RecommendationsType } from "./AnimatedRecommendations"
import { archivoFont } from "@/app/utils/nextFonts";
import styles from '../Recomendations.module.scss'
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

export const CardDeck = ({
  item
}: {
  item: RecommendationsType
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [windowWidth, setWindowWidth] = useState(0);

  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  const animationVariants = {
    visible: {
      opacity: 1,
      transform: `translateX(0) translateZ(0) rotateY(0)`,
      transformOrigin: "center left",
      transition: {
        duration: 0.3,
        delay: 0.3,
        ease: "easeInOut"
      }
    },
    hidden: {
      opacity: 0,
      transform: `translateX(180px) translateZ(180px) rotateY(90deg)`,
      transformOrigin: "center center",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  useEffect(() => {
    if (windowWidth >= 768) {
      controls.start("visible");
      return
    }
    if (inView) {
      controls.start("visible");
      return
    }

    controls.start("hidden");
  }, [controls, inView, windowWidth]);


  return (
    <motion.a
      href='https://www.linkedin.com/in/matheus-alves-pereira/details/recommendations/' 
      target="__blank"
      className={`
        ${styles.recommendation} 
        ${archivoFont.className}
      `}
      ref={ref}
      animate={controls}
      variants={animationVariants}
      // onAnimationComplete={() => setIsAnimating(false)}
    >
      <header>
        <Image 
          alt={item.occupation}
          src={item.profilePic}
          width={70}
          height={70}
        />
        <article>
          <h5>{item.name}</h5>
          <h6>{item.occupation}</h6>
        </article>
      </header>
      <p>{item.recommendation}</p>
    </motion.a>
  )
}