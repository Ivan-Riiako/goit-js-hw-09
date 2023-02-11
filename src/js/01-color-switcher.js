const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};
const COLOR_CHANGE_INTERVAL = 50; 
let timerId = null;

refs.btnStart.addEventListener('click', onClickStart);
refs.btnStop.addEventListener('click', onClickStop);

function onClickStart() {
    if (timerId !== null) {
return
    };
    timerId = setInterval(bodyColorRandom, COLOR_CHANGE_INTERVAL);
};
function onClickStop() {
    clearInterval(timerId);
    timerId = null;
}
function bodyColorRandom() {
    document.body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

