/* Implement your solution here */
// function mostCommonWord(str) { // LÖSNING 3
//     let arrWords = str.split(" ");    
//     var mf = 1;
//     var m = 0;
//     var item;
//     for (var i = 0; i < arrWords.length; i++) {
//         for (var j = i; j < arrWords.length; j++) {
//             if (arrWords[i] == arrWords[j]) {
//                 m++;
//             }
//             if (mf < m) {
//                 mf = m; 
//                 item = arrWords[i];
//             }
//         }
//         m = 0;
//     }
//     console.log(item + " ( " + mf + " times ) ") ;
//}
function mostCommonWord(str) { // LÖSNING 1, GENOM ATT AVNÄNDA OBJEKT!
    let arrWords = str.split(" ");    
    let freq = {};
    for (let item of arrWords) {
        if (freq[item] === undefined) { // vi kollar om item finns i freq genom att kolla om den är undefined
            freq[item] = 1 // om den den är undefined lägger vi till item: 1 ex is: 1 i freq obj
        } else {
            freq[item] += 1 // om den inte är undefined dvs att den finns plusar vi den value med 1.
        }
    }
    let frequency = 0;
    let element = "";
    console.log(freq);
    
    for (let i in freq) { // loopa igenom freq obj
        if (freq[i] > frequency) { // kolla vilket value som är stört i freq obj. 
            frequency = freq[i];  //frequency kmr få den värde som har stört värde.
            element = i; // element kmr få det ord som har störst value
        }
    }
    console.log(element + "(" + frequency + " times)") ;
}
/* Dålig lösning för den tar längre tid än övre.
function mostCommonWord(str) { 
    let arrWords = str.split(" ");    
    arrWords.sort((x, y) => arrWords.filter(e => e === x).length - arrWords.filter(e => e === y).length).pop();
}*/

/* Do not touch anything below this line */
if (mostCommonWord('Hello this is a text that is cool and stuff') !== 'is') console.error('Invalid solution');
else console.log('Solved!');
