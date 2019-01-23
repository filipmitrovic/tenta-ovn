let container = document.querySelector('.container');
let input = document.querySelector('#color');
input.addEventListener('change', colorFn);

function colorFn() {
    let val = input.value;
    container.style.backgroundColor = val;
    console.log(val);
};