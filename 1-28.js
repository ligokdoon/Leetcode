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

// console.log(pilePick(piles));
console.log(pilePick(piles));


