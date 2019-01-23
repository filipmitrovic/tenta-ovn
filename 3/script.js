/* Implement your solution here */
function renderOrderedList(arr) {
    let main = document.querySelector('main');
    let ul = document.createElement('ul');
    for (let str of arr) {
        let li = document.createElement('li');
        li.textContent = str
        ul.appendChild(li);
        main.appendChild(ul);
    }
}
/* Do not touch the code below */
renderOrderedList(["Alpha", "Beta", "Gamma", "Delta", "Epsilon"]);
