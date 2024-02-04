"use client"
import { useRef } from "react";
import { CanvaRoot } from "./components/CanvaRoot";
import { ApresentationSection } from "./components/Layout/Sections/ApresentationSection";
import { SkillsSection } from "./components/Layout/Sections/SkillsSection";
import { ScrollImage } from "./components/ScrollImage";
import { useInView } from "framer-motion";
import { CareerSection } from "./components/Layout/Sections/CareerSection";
import { AnimationContextProvider } from "./contexts/AnimationContext";
import { Loader } from "./components/Loader";
import { CreditsSection } from "./components/Layout/Sections/Credits";

export default function Home() {
  const skillsSectionRef = useRef(null)
  const isSkillsInView = useInView(skillsSectionRef)

  const careerSectionRef = useRef(null)
  const isCarrerInView = useInView(careerSectionRef)

  const creditsSectionRef = useRef(null)
  const isCreditsInView = useInView(creditsSectionRef)

  return (
    <AnimationContextProvider>
      <main>
        <CanvaRoot 
          isCreditsSection={isCreditsInView}
          isCareerSection={isCarrerInView}
          isSkillSection={isSkillsInView}
        />
        <ApresentationSection />
        <SkillsSection ref={skillsSectionRef} />
        <CareerSection ref={careerSectionRef} />
        <CreditsSection ref={creditsSectionRef}/>
      </main>
      <ScrollImage />
    </AnimationContextProvider>
  )
}
