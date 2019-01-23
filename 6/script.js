/* Implement your solution here */
let div = document.querySelector('.container');
getData().then(x => {
  let data = JSON.parse(x);
  console.log(data.data);
  let ul = document.createElement('ul');
  div.appendChild(ul);
  for (let i of data.data) {
    console.log(i);
    let li = document.createElement('li');
    li.textContent = i
    ul.appendChild(li)
  }
})


/* Do not touch anything below this line */
 function getData() {
   return new Promise(function(resolve, reject) {
     let t = Math.random() * 2000 + 1000;
     setTimeout(function() {
       resolve(JSON.stringify({
         data: [
           'Sweden',
           'Denmark',
           'Norway',
           'Finland'
         ]
       }));
     }, t);
   });
 }
