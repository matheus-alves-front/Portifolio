"use client"

import { createContext, useEffect, useRef, useState } from "react"

export const HomeContext = createContext({})

export function HomeContextProvider({children}) {
  const [step, setStep] = useState('home')

  const skillsRef = useRef(null)

  useEffect(() => {
    skillsRef.current = document.getElementById('skills')

    window.addEventListener('scroll', function() {
      const skillSection = skillsRef.current.getBoundingClientRect()

      if (skillSection.top < 100 && skillSection.top > 0 && step !== 'skills') {
        skillsRef.current.scrollIntoView()
        setStep('skills')
      } 
      if (skillSection.top > 100) {
        setStep('home')
      }
    })
  },[])

  useEffect(() => {
    console.log(step)
  }, [step])

  return (
    <HomeContext.Provider value={{
      step
    }}>
      {children}
    </HomeContext.Provider>
 )
}