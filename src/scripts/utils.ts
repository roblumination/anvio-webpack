export function clamp(min: number, val: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

export function delay(delayInms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

export function adjustSmoothScrollForAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const attribute = anchor.getAttribute("href");
      if (attribute) {
        const elementScrollTo = document.querySelector<HTMLElement>(attribute);
        if (elementScrollTo) {
          elementScrollTo.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });
}
