const requiredPages = [
  "header",
  "01_intro",
  "02_plan",
  "03_info",
  "04_entertain",
  "05_emotions",
  "06_events",
  "07_impressions",
  "08_reviews",
  "09_discounts",
  "10_questions",
  "11_news",
  "12_fin-slider",
  "footer",
  "modal",
].map((page) => require("../html/" + page + ".html").default);

(function insertHTML() {
  const body = document.querySelector("body");

  requiredPages.forEach((page) => {
    body.innerHTML += page;
  });
})();
