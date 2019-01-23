/* Implement your solution here */

// HAR OLIKA LÖSNINGAR

// function countWord(strSentence, str) {
//     let count = {};
//     let arrWords = strSentence.split(' ');
//     let count;
//     for (let word of arrWords) {
//         if (str === word) {
//             debugger;
//             count[str] = count[str] + 1;
//         } else  if (str !== word) {   
//             count[str] = 1;
//         }
//     }
//     console.log(count);
// }
// function countWord(strSentence, str) {
//     //debugger;
//     let count = {};
//     let arrWords = strSentence.split(' ')
//     for (let i = 0; i < arrWords.length; i++) {
//         let word = arrWords[i];
//         //console.log(word);
//         if (count[word] === undefined) {
//             count[word] = 1;
//         } else {
//             count[word] = count[word] + 1;
//         }
//     }
//     return count[str];
    
    // //loopa igenom count och kolla hur mkt dens value är
    // for (let key in count) {
    //     if (str === key) {
    //         console.log(count[str]);    
    //     }
    // } 
// }
function countWord(sentence, word) {
    let sentenceArr = sentence.split(' ');
    let obj = {};
    for (let words of sentenceArr) {
        if (obj[words] === undefined) {
            obj[words] = 1; 
        } else {
            obj[words]++; 
        }
    }
    for (let i in obj) {
        if (i === word) {
            console.log(obj[i]);
            return obj[i];
        }
    }
    //console.log(obj);
}
/* Do not touch anything below this line */

let text = 'Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. JavaScript enables interactive web pages and thus is an essential part of web applications. The vast majority of websites use it, and all major web browsers have a dedicated JavaScript engine to execute it.'

if (countWord(text, 'HTML') === 1 && countWord(text, 'JavaScript') === 3 && countWord(text, 'web') === 3) console.log('Solved!')
else console.error('Invalid solution');
