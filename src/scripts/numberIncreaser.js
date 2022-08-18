const infoNum1 = document.getElementById('info-number-1');
const infoNum2 = document.getElementById('info-number-2');
const infoScrollPos = infoNum1.offsetTop;
let isInfoCountStarted = false;

window.addEventListener('scroll', (e) => {
  // console.log(window.scrollY, infoScrollPos);
  if (!isInfoCountStarted && window.scrollY > infoScrollPos - 600) {
    // console.log('should increase here');
    isInfoCountStarted = true;
    startInfoCount();
  }
});

console.log('loaded!');

async function startInfoCount() {
  const num1Max = 12;
  const num2Max = 26;

  for (let i = 0; i < num2Max; i++) {
    if (i <= num1Max) infoNum1.innerText = i;
    if (i <= num2Max) infoNum2.innerText = i;
    await delay(40);
  }
}

function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}
