const input1 = process.argv[2];

// function multiples(input) {
//     if (!parseInt(input)) {
//         console.log(`Enter a number, ya dingus. ${input} is not a number.`);
//     } else {
//         const actuallyANumber = input;
//         const multiplesOfSix = [];

//         if (actuallyANumber <= 6) {
//             console.log('There are no multiples of 6 that are less than 6.');
//         } else {
//             for (let i = 5; i < actuallyANumber; i++) {
//                 if (i % 6 === 0) {
//                     multiplesOfSix.push(i);
//                 }
//             }

//             console.log(`Multiples of 6 less than ${input} are: ${multiplesOfSix.join(', ')}`);
//         }
//     }
// }

// multiples(input1);

// function calc(op, num1, num2) {
//     let res;

//     const n1 = parseInt(num1);
//     const n2 = parseInt(num2);

//     switch (op) {
//         case 'add':
//             res = n1 + n2;
//             break;

//         case 'sub':
//             res = n1 - n2;
//             break;

//         case 'mult':
//             res = n1 * n2;
//             break;

//         case 'div':
//             res = n1 / n2;
//             break;

//         case 'rem':
//             res = n1 % n2;
//             break;

//         default:
//             res = 'The operators are "add", "sub", "mult", "div", or "rem".';
//     }

//     console.log(res);
// }

// calc(process.argv[2], process.argv[3], process.argv[4]);
