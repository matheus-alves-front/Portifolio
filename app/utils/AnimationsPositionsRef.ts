// Definindo um tipo para as chaves possíveis
export type AnimationKey = 
  'FightingIdle' 
  | 'FallingForever' 
  | 'Trippin' 
  | 'Breakdance' 
  | 'Clapping'
  | 'Counting'
  | 'Defeat'
  | 'HappyIdle'
  | 'LookingDown'
  | 'PunchingBag'
  | 'Run'
  | 'ShootingArrow'
  | 'Typing'
  | 'WalkInCircle'
  | 'Waving'

export const ANIMATIONS_TRANSITIONS: {
  [key in AnimationKey]: {
    x: number;
    y: number;
    z: number;
    rotationY: number;
  };
} = {
  Defeat: {
    y: -.9,
    x: 0,
    z: 0,
    rotationY: 0
  },
  FallingForever: {
    y: -.6,
    x: 0,
    z: -.6,
    rotationY: .44
  },
  FightingIdle: {
    y: -.9,
    x: 0,
    z: -0.2,
    rotationY: 0.7
  },
  Trippin: {
    y: -.9,
    x: 0,
    z: 0,
    rotationY: 0
  },
  Typing: {
    y: -.5,
    x: 0,
    z: 0,
    rotationY: .25
  },
  Breakdance: {
    y: -.48,
    x: 0,
    z: 0,
    rotationY: 0
  },
  Clapping: {
    y: -.9,
    x: 0,
    z: -0,
    rotationY: 0
  },
  Counting: {
    y: -.8,
    x: 0,
    z: -.6,
    rotationY: .7
  },
  HappyIdle: {
    y: -.9,
    x: 0,
    z: -0.2,
    rotationY: 0.25
  },
  LookingDown: {
    y: -.9,
    x: 0,
    z: 0,
    rotationY: 0
  },
  PunchingBag: {
    y: -.8,
    x: 0,
    z: -.2,
    rotationY: 0.25
  },
  Run: {
    y: -.5,
    x: .2,
    z: -.5,
    rotationY: .2
  },
  ShootingArrow: {
    y: -.9,
    x: 0,
    z: 0,
    rotationY: 0
  },
  WalkInCircle: {
    y: -.9,
    x: 0,
    z: 0,
    rotationY: 0
  },
  Waving: {
    y: -.9,
    x: 0,
    z: -.2,
    rotationY: 0
  }
};
