import type { Transition, Variants } from 'framer-motion';

/* Motion tokens — keep every duration short enough for a live pitch. */
export const EASE = [0.22, 1, 0.36, 1] as const;
export const T = {
  fast: { duration: 0.35, ease: EASE } as Transition,
  base: { duration: 0.6, ease: EASE } as Transition,
  slow: { duration: 0.9, ease: EASE } as Transition,
  spring: { type: 'spring', stiffness: 220, damping: 26 } as Transition,
};

export const stagger = (step = 0.08, delay = 0.15): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: step, delayChildren: delay } },
});

export const rise: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: T.base },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: T.base },
};

export const pop: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: T.base },
};

/* Slide-level cinematic transition: depth push. dir = +1 next, -1 previous. */
export const slideVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, scale: dir > 0 ? 0.94 : 1.05, y: dir > 0 ? 36 : -36, rotateX: dir > 0 ? 4 : -4 }),
  center: { opacity: 1, scale: 1, y: 0, rotateX: 0, transition: { duration: 0.75, ease: EASE } },
  exit: (dir: number) => ({ opacity: 0, scale: dir > 0 ? 1.05 : 0.94, y: dir > 0 ? -28 : 28, transition: { duration: 0.45, ease: EASE } }),
};
