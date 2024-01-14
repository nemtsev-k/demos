const key = document.querySelectorAll('.key');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');

for (let k of key) {
    k.onclick = function () {
        display.textContent += k.textContent;
    }
}

clear.onclick = function (event) {
    event.preventDefault();
    display.textContent = '';
}
