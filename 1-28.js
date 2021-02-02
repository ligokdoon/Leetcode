// There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:

// In each step, you will choose any 3 piles of coins(not necessarily consecutive).
// Of your choice, Alice will pick the pile with the maximum number of coins.
// You will pick the next pile with maximum number of coins.
// Your friend Bob will pick the last pile.
// Repeat until there are no more piles of coins.
// Given an array of integers piles where piles[i] is the number of coins in the ith pile.

// Return the maximum number of coins which you can have.

const piles = [2, 4, 1, 2, 7, 8] //Output: 9

function pilePick(piles) {
    let sortedPiles = quickSort(piles).slice(piles.length / 3);
    let result = 0;

    console.log(sortedPiles);

    for(let i = 0; i < sortedPiles.length; i++) {
        if (i % 2 === 0) result += sortedPiles[i];
    }

    return result;
}

const quickSort = arr => {
    if(arr.length < 2) return arr;

    const pivot = arr[0];
    arr = arr.slice(1);

    const left = arr.filter(ele => ele <= pivot);
    const right = arr.filter(ele => ele > pivot);

    return quickSort(left).concat([pivot]).concat(quickSort(right));
}

// Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses('(' or ')', and in any positions) so that the resulting parentheses string is valid.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

var minAddToMakeValid = function (S) {
    let result = 0;
    let balance = 0;

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            balance += 1;
        } else {
            balance += -1;
        }

        if (balance == -1) {
            result += 1;
            balance += 1;
        }
    }

    return result + balance;

};

const mergeSort = arr => {
    if (arr.length < 2) return arr;
    const mid = arr.length / 2

    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    const result = [];
    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left).concat(right);
}


const bubbleSort = arr => {
    let swapped = true;

    while(swapped) {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }
        }
    }

    return arr;
}

let string = 'asd';

function subStrings(string){
    const result = [];

    for(let i = 0; i < string.length; i++) {
        for(let j = i; j < string.length; j++) {
            let sub = string.substring(i, i + j + 1);
            if (sub) result.push(sub);
        }
    }

    return result;
}

console.log(subStrings(string));

