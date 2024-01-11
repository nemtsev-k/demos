const pixels = document.querySelectorAll('.pixel');
const chosenColor = document.querySelector('.chosen-color');
const eraser = document.querySelector('.eraser');

for (let pixel of pixels) {
    pixel.addEventListener('click', () => {
        if (!eraser.checked) {
            pixel.style.backgroundColor = chosenColor.value;
        } else {
            pixel.style.backgroundColor = 'white';
        }
    });
}