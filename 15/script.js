let input = document.querySelector('input');
let keyPressed = document.querySelector('.key');
let allKeyPressed = document.querySelector('.upperCase');

input.addEventListener('change', getVal);

let arr = [];

function allKeyPressedFn() {
    for (let i of arr) {
        let words = arr.join(', ').toUpperCase();
        allKeyPressed.textContent = words;
    }
}

function getVal() {
    let inputValue = input.value
    keyPressed.textContent = inputValue;
    arr.push(inputValue);
    allKeyPressedFn();
}