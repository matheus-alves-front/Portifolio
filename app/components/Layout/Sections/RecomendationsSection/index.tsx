import { forwardRef } from "react";
import styles from './Recomendations.module.scss'
import { archivoBlackFont, archivoFont } from "@/app/utils/nextFonts";
import { AnimatedRecommendations } from "./Deck/AnimatedRecommendations";


export const RecomendationSection = forwardRef<HTMLDivElement>(function RecomendationSection(props, ref) {
  return (
    <section ref={ref} className={`${styles.Section} ${archivoFont.className}`}>
      <h2 className={archivoBlackFont.className}>RECOMMENDATIONS:</h2>
      <AnimatedRecommendations />
    </section>
  )
})
