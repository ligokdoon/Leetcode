// STDIN   Function
// ----- -------------------
// 8    →  height[] size n = 8
// 1    →  height = [1, 2, 3, 4, 8, 7, 6, 5]
// 2
// 3
// 4
// 8
// 7
// 6
// 5

// 2

// From the left: ([1, 2, 3, 4], [8], [7], [6], [5])
// From the right: ([5, 6, 7, 8], [4], [3], [2], [1])

// Best case is from the left: ([1, 2, 3, 4]) and from the right: ([5, 6, 7, 8])

function getMinimumBlows(height) {
    // Write your code here
    let start = 0;
    let end = height.length - 1;
    let leftSeq = [];
    let rightSeq = [];
    const minSequence = [];

    while (start < end) {

        if (!leftSeq.length) {
            while (height[start] < height[start + 1]) {
                leftSeq.push(height[start]);
                start += 1;
            }

            
            leftSeq.push(height[start]);
            start += 1;
        }

        if(!rightSeq.length) {
            while (height[end] < height[end - 1]) {
                rightSeq.push(height[end]);
                end -= 1;
            }

            
            rightSeq.push(height[end]);
            end -= 1;
        }

        if (leftSeq.length >= rightSeq.length) {
            minSequence.push(leftSeq);
            leftSeq = [];
        } else {
            minSequence.push(rightSeq);
            rightSeq = [];
        }
    }

    if (leftSeq.length) {
        minSequence.push(leftSeq);
    } else if (rightSeq.length) {
        minSequence.push(rightSeq);
    }

    console.log(minSequence);
    return minSequence.length;

}

console.log(getMinimumBlows([22,75,26,45,72,81,47,29,97,2,75,25,82,84,17,56,32,2,28,37,57,39,18,11,79,6,40,68,68,16,40,63,93,49,91,10,55,68,31,80,57,19,34,28,76,55,21,80,22,45])); // => 22

// STDIN    Function
// ----- -------
// 4    →   arr[] size n = 4
// 13   →   arr = [13, 10, 21, 20]
// 10
// 21
// 20

function moves(arr) {
    // Write your code here
    let moves = 0;

    for (let i = 0; i < arr.length / 2; i++) {
        let num = arr[i];

        if (num % 2 !== 0) {
            for (let j = arr.length - 1; j > i; j--) {
                if (arr[j] % 2 === 0) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    moves += 1;
                    break;
                }
            }
        }
    }

    return moves;
}