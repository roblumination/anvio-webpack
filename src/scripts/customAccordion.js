const accordions = [
  {
    summary: document.querySelector(".custom-accord_left"),
    arrow: document.querySelector("#arrow-acc-left"),
    content: document.querySelector(".custom-accord__content_left"),
    isOpened: false,
  },
  {
    summary: document.querySelector(".custom-accord_right"),
    arrow: document.querySelector("#arrow-acc-right"),
    content: document.querySelector(".custom-accord__content_right"),
    isOpened: false,
  },
];

accordions.forEach((acrd) => {
  acrd.summary.addEventListener("click", () => {
    const state = acrd.isOpened;
    closeAll();
    acrd.isOpened = !state;
    renderAccordions();
  });
});

function renderAccordions() {
  accordions.forEach((acrd) => {
    acrd.content.style.display = acrd.isOpened ? "flex" : "none";
    acrd.summary.style.color = acrd.isOpened ? "#ce2127" : "#000";
    acrd.arrow.style.stroke = acrd.isOpened ? "#ce2127" : "#000";
  });
}

function closeAll() {
  accordions[0].isOpened = false;
  accordions[1].isOpened = false;
}
