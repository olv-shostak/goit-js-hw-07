const input = document.querySelector('input');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const divBoxes = document.querySelector('#boxes');

renderBtn.addEventListener('click', onRenderBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);
let a = 0
function onRenderBtnClick() {
    for (let i = 0; i < input.value; i += 1) {
        const createBox = document.createElement('div');
        a += 30;
        createBox.style.width = a + 'px';
        createBox.style.height = a + 'px';
        createBox.style.backgroundColor = createBox.style.height = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        createBox.style.border = 'solid black 1px'
        divBoxes.appendChild(createBox);
        // createBox.style.width = Number.parseInt(createBox.style.width) + 30 + 'px';
        // createBox.style.height = Number.parseInt(createBox.style.height) + 30 + 'px';
    }
}

function onDestroyBtnClick() {
    divBoxes.innerHTML = '';
    a = 0;
};
