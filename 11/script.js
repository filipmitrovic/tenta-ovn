let headerDiv = document.querySelector('.largecontent').scrollHeight; // för att kolla hur mkc scroll height grey div har dvs övre div
let sticky = document.querySelector('.sticky');
sticky.style.position = 'absolute';
document.addEventListener('scroll', scrollFn);

function scrollFn() {
    if (window.scrollY >= 458) {
        sticky.style.top = window.scrollY + 'px';   
    }
    else if (window.scrollY < 458) {
        sticky.style.top = 458 + 'px';  
    }
}




