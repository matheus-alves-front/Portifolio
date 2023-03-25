"use client"

import { createContext, useEffect, useRef, useState } from "react"

export const PageContext = createContext({})

export function PageContextProvider({children}) {
  const [step, setStep] = useState('home')
  const skillsRef = useRef(null)
  let lastScrollPosition = useRef(0)
  
  function scrollAnimations() {
    skillsRef.current = document.getElementById('skills')
    const skillSection = skillsRef.current.getBoundingClientRect()

    let scrollTop = document.documentElement.scrollTop

    if (scrollTop === 0) {
      return
    }

    // o usuário rolou para baixo
    if (scrollTop > lastScrollPosition.current) {
      if (skillSection.top < 200 && skillSection.top > 0 && step !== 'skills') {
        skillsRef.current.scrollIntoView()
        setStep('skills')
      }
    } 

    // o usuário rolou para cima
    if (scrollTop < lastScrollPosition.current) {
      if (skillSection.top > 100) {
        window.scrollTo({top: 0})
        setStep('home')
      }
    }
    
    lastScrollPosition.current = scrollTop
  }

  useEffect(() => {
    window.addEventListener('scroll',  scrollAnimations)

    return () => window.removeEventListener('resize', () => {});
  }, [])

  return (
    <PageContext.Provider value={{
      step
    }}>
      {children}
    </PageContext.Provider>
 )
}