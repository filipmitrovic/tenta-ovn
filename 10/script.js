let rubrik = document.querySelectorAll('.tabs-selector');
let underRubrik = document.querySelectorAll('.tabs-single-content');
for (let i = 0; i < rubrik.length; i++) {
    let element = rubrik[i];
    element.addEventListener('click', fn);
};
function fn(e) {
    let eventRubrik = e.target;
    let eventAttr = eventRubrik.getAttribute('data-tab');
    for (let i of rubrik) {
        if (i === eventRubrik) {
            i.classList.add('selected');
        } else {
            i.classList.remove('selected');
        }
    }
    for (let i of underRubrik) {
        let iAttr = i.getAttribute('data-tabid');
        if (eventAttr !== iAttr) {
            i.style.display = "none";
            eventRubrik.classList.remove('selected')
        } else if (eventAttr === iAttr) {
            i.style.display = "block";
        }
    } 
};

