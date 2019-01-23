let button = document.querySelector('button');
button.addEventListener('click', count);
let p = document.querySelector('p');

function count() {
    if (p.textContent === '') {
        p.textContent = 0;
    } else p.textContent++
}