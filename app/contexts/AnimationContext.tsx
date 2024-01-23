import { ReactNode, createContext, useRef } from "react";
import { AnimationAction, AnimationClip, AnimationMixer } from "three";

type AnimationContextType = {
  animationMixer: AnimationMixer | null,
  animationKey: string,
  updateAnimationKey: (animation: string) => void
}

export const AnimationContext = createContext({} as AnimationContextType)

export function AnimationContextProvider({
  children
}: {
  children: ReactNode
}) {
  const playAnimationRef = useRef('sitting')
  const animationMixer = useRef<AnimationMixer | null>(null)

  function updateAnimationKey(animation: string) {
    playAnimationRef.current = animation
    animationMixer.current?.update(1)
  }

  return (
    <AnimationContext.Provider value={{
      animationKey: playAnimationRef.current,
      updateAnimationKey,
      animationMixer: animationMixer.current
    }}>
      {children}
    </AnimationContext.Provider>
  )
}