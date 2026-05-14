export const fadeInUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeInLeft = {
  hidden:  { opacity: 0, x: -44 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeInRight = {
  hidden:  { opacity: 0, x: 44 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export const stagger = (children = 0.13, delay = 0) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: children, delayChildren: delay } },
})

export const viewport = { once: true, margin: '-60px' }
