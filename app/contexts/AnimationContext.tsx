import { ReactNode, createContext, useRef, useState } from "react";
import { AnimationAction, AnimationClip, AnimationMixer } from "three";

type AnimationContextType = {
  animationKey: string,
  updateAnimationKey: (animation: string) => void
}

export const AnimationContext = createContext({} as AnimationContextType)

export function AnimationContextProvider({
  children
}: {
  children: ReactNode
}) {
  const [animationKey, setAnimationKey] = useState('sitting')

  function updateAnimationKey(animation: string) {
    setAnimationKey(animation)
  }

  return (
    <AnimationContext.Provider value={{
      animationKey,
      updateAnimationKey,
    }}>
      {children}
    </AnimationContext.Provider>
  )
}