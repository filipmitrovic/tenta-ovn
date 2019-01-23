let box = document.querySelector('#box');
box.style.position = 'absolute';

let left = document.querySelector('#left');
left.addEventListener('click', moveleft);

let right = document.querySelector('#right');
right.addEventListener('click', moveright);

box.style.left = 0;
let count = 0;

function moveright() {
    count += 10;
    box.style.left = count + 'px';
};

function moveleft() {
    count -= 10;
    box.style.left = count + 'px';
};