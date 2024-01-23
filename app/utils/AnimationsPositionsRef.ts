// Definindo um tipo para as chaves possíveis
type AnimationKey = 
  'Defeat' 
  | 'FallingForever' 
  | 'Porrada' 
  | 'falling' 
  | 'sitting';

export const ANIMATIONS_TRANSITIONS: {
  [key in AnimationKey]: {
    x: number;
    y: number;
    z: number;
    rotationY: number;
  };
} = {
  Defeat: {
    y: 0,
    x: 0,
    z: 0,
    rotationY: 0
  },
  FallingForever: {
    y: 0,
    x: 0,
    z: 0,
    rotationY: 0
  },
  Porrada: {
    y: -.9,
    x: 0,
    z: -0,
    rotationY: 0
  },
  falling: {
    y: 0,
    x: 0,
    z: 0,
    rotationY: 0
  },
  sitting: {
    y: -.48,
    x: 0,
    z: 0,
    rotationY: 0
  }
};
