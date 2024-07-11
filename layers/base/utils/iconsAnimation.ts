export function playIconAnimation(ref: { playAnimation: () => void }) {
  ref?.playAnimation();
}

export function stopIconAnimation(ref: { stopAnimation: () => void }) {
  ref?.stopAnimation();
}
