"use client"
import { useRef } from "react";
import { CanvaRoot } from "./components/CanvaRoot";
import { ApresentationSection } from "./components/Layout/Sections/ApresentationSection";
import { SkillsSection } from "./components/Layout/Sections/SkillsSection";
import { ScrollImage } from "./components/ScrollImage";
import { useInView } from "framer-motion";
import { CareerSection } from "./components/Layout/Sections/CareerSection";
import { AnimationContextProvider } from "./contexts/AnimationContext";
import { CreditsSection } from "./components/Layout/Sections/Credits";
import { ResumeSection } from "./components/Layout/Sections/ResumeSection";
import { RecomendationSection } from "./components/Layout/Sections/RecomendationsSection";

export default function Home() {
  const skillsSectionRef = useRef(null)
  const isSkillsInView = useInView(skillsSectionRef)

  const careerSectionRef = useRef(null)
  const isCarrerInView = useInView(careerSectionRef)

  const creditsSectionRef = useRef(null)
  const isCreditsInView = useInView(creditsSectionRef)

  const resumeSectionRef = useRef(null)
  const isResumeInView = useInView(resumeSectionRef)

  const recommensationsSectionRef = useRef(null)
  const isRecommensationsInView = useInView(recommensationsSectionRef)

  return (
    <AnimationContextProvider>
      <main>
        <CanvaRoot 
          isCreditsSection={isCreditsInView}
          isCareerSection={isCarrerInView}
          isSkillSection={isSkillsInView}
          isResumeSection={isResumeInView}
          isRecommensationsInView={isRecommensationsInView}
        />
        <ApresentationSection />
        <SkillsSection ref={skillsSectionRef} />
        <CareerSection ref={careerSectionRef} />
        <ResumeSection ref={resumeSectionRef} />
        <RecomendationSection ref={recommensationsSectionRef} />
        <CreditsSection ref={creditsSectionRef}/>
      </main>
      <ScrollImage />
    </AnimationContextProvider>
  )
}
