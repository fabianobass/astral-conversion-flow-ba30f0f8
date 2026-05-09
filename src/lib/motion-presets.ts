/**
 * Shared Framer Motion presets for hero/header entrance animations.
 *
 * Defined at module scope so the same object reference is reused across renders.
 * This prevents Framer Motion from re-evaluating animation props on every render
 * and avoids recreating transition objects that could trigger redundant updates.
 *
 * All presets share the same easing/duration/delay so the hero, header and
 * sections above the hero feel perfectly in sync (desktop + mobile).
 */

const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.7;
const DELAY = 0.15;

export const heroTransition = {
  duration: DURATION,
  delay: DELAY,
  ease: EASE,
} as const;

export const fadeUpInitial = { opacity: 0, y: 24 } as const;
export const fadeUpAnimate = { opacity: 1, y: 0 } as const;

export const fadeScaleInitial = { opacity: 0, scale: 0.95 } as const;
export const fadeScaleAnimate = { opacity: 1, scale: 1 } as const;

export const fadeDownInitial = { opacity: 0, y: -16 } as const;
export const fadeDownAnimate = { opacity: 1, y: 0 } as const;

/**
 * Inline style hint that promotes the element to its own GPU layer for the
 * duration of the entrance. Pair with `onAnimationComplete` to reset it so
 * we don't keep extra layers alive on mobile after the animation finishes.
 */
export const willChangeStyle = { willChange: "transform, opacity" } as const;
export const willChangeReset = { willChange: "auto" } as const;
