const refs = {
  btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
};
let timerId = null;
refs.btnStart.addEventListener('click', onClickStart);
refs.btnStop.addEventListener('click', onClickStop);
function onClickStart() {
    if (timerId !== null) {
return
    };
    timerId = setInterval(callback, 1000);

};
function onClickStop() {
    clearInterval(timerId);
    timerId = null;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function callback() {
    document.body.style.backgroundColor = getRandomHexColor();
}


