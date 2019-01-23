let button = document.querySelector('button');
let div = document.querySelector('div');
let p = document.querySelector('p');
button.addEventListener('click', showText);
div.addEventListener('click', showText);

function showText(e) {
    if (e.target === button) { 
        p.textContent = 'button click';
        e.stopPropagation() 
    } else if (e.target === div) {
        p.textContent = 'box click';
    }
}