"use client"
import { ReactNode, createContext, useState } from "react";
import { AnimationKey } from "../utils/AnimationsPositionsRef";

type AnimationContextType = {
  animationKey: AnimationKey,
  updateAnimationKey: (animation: AnimationKey) => void,
  isLoader: boolean,
  updateLoader: (isLoading: boolean) => void
}

export const AnimationContext = createContext({} as AnimationContextType)

export function AnimationContextProvider({
  children
}: {
  children: ReactNode
}) {
  const [isLoader, setIsLoader] = useState(true)
  const [animationKey, setAnimationKey] = useState<AnimationKey>('Typing')

  function updateAnimationKey(animation: AnimationKey) {
    setAnimationKey(animation)
  }

  function updateLoader(isLoading: boolean) {
    setIsLoader(isLoading)
  }

  return (
    <AnimationContext.Provider value={{
      animationKey,
      updateAnimationKey,
      isLoader,
      updateLoader
    }}>
      {children}
    </AnimationContext.Provider>
  )
}