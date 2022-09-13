const accordions = [
  {
    summary: document.querySelector<HTMLElement>(".custom-accord_left"),
    arrow: document.querySelector<HTMLElement>("#arrow-acc-left"),
    content: document.querySelector<HTMLElement>(
      ".custom-accord__content_left"
    ),
    isOpened: false,
  },
  {
    summary: document.querySelector<HTMLElement>(".custom-accord_right"),
    arrow: document.querySelector<HTMLElement>("#arrow-acc-right"),
    content: document.querySelector<HTMLElement>(
      ".custom-accord__content_right"
    ),
    isOpened: false,
  },
];

accordions.forEach((acrd) => {
  let test = "test text";
  const test2 = "test tesdfsdfe";
  console.log(test, test2);
  if (acrd.summary) {
    acrd.summary.addEventListener("click", () => {
      const state = acrd.isOpened;
      closeAll();
      acrd.isOpened = !state;
      renderAccordions();
    });
  }
});

function renderAccordions() {
  accordions.forEach((acrd) => {
    if (acrd.content && acrd.summary && acrd.arrow) {
      acrd.content.style.display = acrd.isOpened ? "flex" : "none";
      acrd.summary.style.color = acrd.isOpened ? "#ce2127" : "#000";
      acrd.arrow.style.stroke = acrd.isOpened ? "#ce2127" : "#000";
    }
  });
}

function closeAll() {
  accordions[0].isOpened = false;
  accordions[1].isOpened = false;
}
