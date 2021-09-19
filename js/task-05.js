const inputEl = document.querySelector('#name-input');
const spanNameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onNameInput);

function onNameInput(event) {
    if (event.currentTarget.value !== "") {
        spanNameEl.textContent = event.currentTarget.value;
    } else {
        spanNameEl.textContent = 'незнакомец';
    }
}