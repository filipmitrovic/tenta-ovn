/* Implement your solution here */
function longestWord(str) {
    var arr = str.split(" ");
    console.log(arr);
    let str1 = arr[0];
    for (let str of arr) {
        if (str.length > str1.length) {
            str1 = str; // vi uppdaterar värdet num varje gång och jämför med den nya interationens värdet
        }
    }
    return str1;   
}
/* Do not touch the code below this line, but make sure the examples work */
if (longestWord("I am a computer and I like to calculate stuff") !== "calculate") console.error('Invalid solution');
else console.log('Solved!');
