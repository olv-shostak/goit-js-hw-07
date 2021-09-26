const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.dir(event.currentTarget);

    const characters = inputEl.dataset.length;

    if (event.currentTarget.value.length != characters) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.replace('invalid', 'valid');
    }
}