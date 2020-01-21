const etch = document.querySelector('#etch');

const button = document.querySelector('#reset');
button.addEventListener('click', createGrid);

function createGrid(input) {
    if (Number.isInteger(input) && input > 0) {
        for (let x = 0; x < (input * input); x++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.style.flexBasis = `${(1 / input) * 100}%`;
            square.addEventListener('mouseover', changeColor);
            etch.appendChild(square);
        }
    } else {
        etch.innerHTML = '';
        const string = prompt('Enter a number between 16 and 99:');
        createGrid(Number(string));
    }
}
window.onload = createGrid(16);

function changeColor(e) {
    e.target.style.background = '#333333';
}
