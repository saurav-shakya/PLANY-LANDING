import type { Transition } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function fadeUpTransition(delay = 0, reduceMotion = false): Transition {
  if (reduceMotion) {
    return { duration: 0 };
  }

  return {
    duration: 0.5,
    delay,
    ease: easeOut,
  };
}

export function fadeUpProps(reduceMotion: boolean | null, delay = 0) {
  if (reduceMotion) {
    return {
      initial: false as const,
      animate: { opacity: 1, y: 0 },
      transition: fadeUpTransition(0, true),
    };
  }

  return {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: fadeUpTransition(delay),
  };
}
