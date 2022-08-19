export function clamp(min, val, max) {
  return Math.min(Math.max(val, min), max);
}

export function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}
