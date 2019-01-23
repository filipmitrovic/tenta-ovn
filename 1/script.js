/* Implement your solution here */
function min(arr) {    
    let num = arr[0];// vi anväder dess värde för att jämföra men arr värdena
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i].value;
        if (val < num.value) {
            num.value = val; // vi uppdaterar värdet num varje gång och jämför med den nya interationens värdet
        }
    }
    return num;
};

/* Do not touch the code below this line, but make sure the examples work */

if (min([{value: 3}, {value: 7}, {value: -1}, {value: 5}, {value: 100}]).value !== -1) console.error('Invalid solution');
else console.log('Solved!');
