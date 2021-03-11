function twoNumberSum(array, targetSum) {
    const set = new Set();

    for (let i = 0; i < array.length; i++) {
        if (set.has(targetSum - array[i])) {
            return [targetSum - array[i], array[i]]
        }

        set.add(array[i]);
    }

    return [];
}

function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const currentSum = array[left] + array[right];

        if (currentSum === targetSum) {
            return [array[left], array[right]];
        } else if (currentSum < targetSum) {
            left++;
        } else if (currentSum > targetSum) {
            right--;
        }
    }

    return [];

}

function moveElementToEnd(array, toMove) {
    let left = 0;
    let right = array.length - 1;
    
    while (left < right) {
        while (array[right] === toMove && left < right) {
            right--;
        }

        if (array[left] === toMove) {
            array[left] = array[right];
            array[right] = toMove;
        }
        left++;
        console.log(array);
    }

    return array;
}

//recursive Nth Fib using memoization Time: O(n) Space: O(n)
function getNthFib(n, cache = { 1: 0, 2: 1 }) {
    if (n in cache) return cache[n];
    cache[n] = getNthFib(n - 1, cache) + getNthFib(n - 2, cache);
    return cache[n];
}

//iterative fibs Time: O(n) Space: O(1)
function getNthFib(n) {
    const fibs = [0, 1];
    let count = 3;

    while (count <= n) {
        const nextFib = fibs[0] + fibs[1];
        fibs[0] = fibs[1];
        fibs[1] = nextFib;
        count++
    }

    return n > 1 ? fibs[1] : fibs[0];

}

