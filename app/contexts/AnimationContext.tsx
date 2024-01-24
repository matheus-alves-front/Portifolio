import { ReactNode, createContext, useRef, useState } from "react";
import { AnimationAction, AnimationClip, AnimationMixer } from "three";
import { AnimationKey } from "../utils/AnimationsPositionsRef";

type AnimationContextType = {
  animationKey: AnimationKey,
  updateAnimationKey: (animation: AnimationKey) => void
}

export const AnimationContext = createContext({} as AnimationContextType)

export function AnimationContextProvider({
  children
}: {
  children: ReactNode
}) {
  const [animationKey, setAnimationKey] = useState<AnimationKey>('Typing')

  function updateAnimationKey(animation: AnimationKey) {
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