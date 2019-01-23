// let w = window.innerWidth;
// let h = window.innerHeight;
// let ow = window.outerWidth; //including toolbars and status bar etc.
// let oh = window.outerHeight;

window.addEventListener("resize", x);
function x() {
    let main = document.querySelector('main');
    let w = window.innerWidth; 
    let h = window.innerHeight;
    let box = document.querySelector('#box');
    main.style.display = 'flex';
    main.style.justifyContent = 'center';
    main.style.alignItems = 'center';
    main.style.height = 100 + 'vh';
    box.style.width = w/2 + 'px';
    box.style.height =  h/2 + 'px';   
}
x();

