// you can write js here

console.log('exo-5');

const input = 'Turpentine and turtles';

const vowels = ['a','e','i','o','u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
   console.log(input[i]);
}

for (let i = 0; i < input.length; i++) {
    if (vowels.indexOf(input[i].toLowerCase()) !== -1) {
        resultArray.push(input[i]);
    }
}

for (let i = 0; i < input.length; i++) {
    // Vérifier si la lettre courante est une voyelle
    if (input[i].toLowerCase() === vowels[i]) {
        resultArray.push(input[i]);
    }
}
//
// for (let i = 0; i < input.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//         if (input[i].toLowerCase() === vowels[j]) {
//             if (input[i].toLowerCase() === 'e' || input[i].toLowerCase() === 'u') {
//                 resultArray.push(input[i], input[i]); // Double les 'e' et 'u'
//             } else {
//                 resultArray.push(input[i]);
//             }
//         }
//     }
// }


const resultString = resultArray.join('').toUpperCase();
console.log(resultString);