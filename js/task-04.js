const targetDecrementBtnEl = document.querySelector('[data-action = "decrement"]');
const targetIncrementBtnEl = document.querySelector('[data-action = "increment"]');
const spanCounterEl = document.querySelector('#value');

let counterValue = 0;

targetDecrementBtnEl.addEventListener('click', onDecrementBtnClick);
targetIncrementBtnEl.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValue -= 1;
    spanCounterEl.textContent = counterValue;
};

function onIncrementBtnClick() {
    counterValue += 1;
    spanCounterEl.textContent = counterValue;
};