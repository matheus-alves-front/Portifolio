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

export const ANIMATIONS_POSITIONS_DESKTOP: {
  [key in AnimationKey]: {
    x: number;
    y: number;
    z: number;
    rotationY: number;
  };
} = {
  Defeat: {
    y: -1,
    x: 0,
    z: 0,
    rotationY: 0
  },
  FallingForever: {
    y: -.5,
    x: 0,
    z: -.6,
    rotationY: .3
  },
  FightingIdle: {
    y: -1,
    x: 0,
    z: -0.4,
    rotationY: 0.7
  },
  Trippin: {
    y: -1,
    x: 0,
    z: 0,
    rotationY: 0
  },
  Typing: {
    y: -.6,
    x: 0,
    z: 0,
    rotationY: .25
  },
  Breakdance: {
    y: -.48,
    x: 0,
    z: -.8,
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
    y: -.9,
    x: 0,
    z: -.4,
    rotationY: 1
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
    z: -.6,
    rotationY: 1
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
