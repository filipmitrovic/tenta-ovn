/* Implement your solution here */
function rollDice(size) {
    let lower = 1;   
    let res = Math.floor(Math.random() * (size - lower + 1) + lower); //.floor tar ner till närmsta heltal
    //                   0.1-0.9999    *      ex11     +      ex10
    console.log(res);
}                      
rollDice(6);
