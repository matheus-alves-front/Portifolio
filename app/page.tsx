"use client"
import { useEffect, useRef } from "react";
import { CanvaRoot } from "./components/CanvaRoot";
import { ApresentationSection } from "./components/Layout/Sections/ApresentationSection";
import { SkillsSection } from "./components/Layout/Sections/SkillsSection";
import { ScrollImage } from "./components/ScrollImage";
import { useInView } from "framer-motion";
import { CareerSection } from "./components/Layout/Sections/CareerSection";
import { AnimationContextProvider } from "./contexts/AnimationContext";

export default function Home() {
  const skillsSectionRef = useRef(null)
  const isSkillsInView = useInView(skillsSectionRef)

  const careerSectionRef = useRef(null)
  const isCarrerInView = useInView(careerSectionRef)

  return (
    <AnimationContextProvider>
      <main>
        <CanvaRoot 
          isCareerSection={isCarrerInView}
          isSkillSection={isSkillsInView}
        />
        <ApresentationSection />
        <SkillsSection ref={skillsSectionRef} />
        <CareerSection ref={careerSectionRef} />
      </main>
      <ScrollImage />
    </AnimationContextProvider>
  )
}
