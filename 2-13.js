function solution(N) {
    const numString = N.toString().split('');
    let inserted = false;

    if (numString[0] === '-') {
        for (let i = 1; i < numString.length; i++) {
            let currDigit = numString[i];

            if (parseInt(currDigit) > 5) {
                numString[i] = '5' + currDigit;
                inserted = true;
                break;
            }
        }

        
    } else {
        for (let i = 0; i < numString.length; i++) {
            let currDigit = numString[i];

            if (parseInt(currDigit) <= 5) {
                numString[i] = '5' + currDigit
                inserted = true;
                break;
            }
        }

    }
    
    if (!inserted) numString.push('5');
    return parseInt(numString.join(''), 10);
}

// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)

//     let shortestFragment;

//     for (let i = 0; i < S.length; i++) {
//         for (let j = i; j < S.length; j++) {
//             let fragment = S.slice(i, j + 1);
//             console.log(fragment);
//             console.log(isBalanced(fragment));
//             if (isBalanced(fragment)) {
//                 if (!shortestFragment || fragment.length < shortestFragment.length) {
//                     shortestFragment = fragment;

//                 }
//             }
//         }
//     }

//     if (shortestFragment) {
//         return shortestFragment.length;
//     } else {
//         return -1;
//     }
// }

// function isBalanced(string) {

//     let charCount = {};

//     for (let i = 0; i < string.length; i++) {
//         const currChar = string[i];
//         charCount[currChar] = true;
//     }

//     for (let i = 0; i < string.length; i++) {
//         const currChar = string[i];
//         if (!(charCount[currChar.toUpperCase()] && charCount[currChar.toLowerCase()])) {
//             return false;
//         }
//     }

//     return true;
// }

// function solution(S, K) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//     const inputIndex = days.indexOf(S);

//     return days[(inputIndex + K) % 7];

// }

console.log(solution(-1))
console.log(solution(1))
console.log(solution(0))
console.log(solution(7))
console.log(solution(-7))
console.log(solution(515))
console.log(solution(-515))
console.log(solution(414))
console.log(solution(-414))
console.log(solution(474))
console.log(solution(-474))