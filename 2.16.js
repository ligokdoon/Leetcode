// Given n non - negative integers a1, a2, ..., an, where each represents a point at coordinate(i, ai).n vertical lines are drawn such that the two endpoints of the line i is at(i, ai) and(i, 0).Find two lines, which, together with the x - axis forms a container, such that the container contains the most water.
// Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49
// Explanation: The above vertical lines are represented by array[1, 8, 6, 2, 5, 4, 8, 3, 7].In this case, the max area of water(blue section) the container can contain is 49.

//O(n^2) space, O(1) memory brute force solution
var maxArea = function (height) {

    let result = 0;

    for (let i = 0; i < height.length; i++) {
        let left = height[i];
        for (let j = i + 1; j < height.length; j++) {
            let right = height[j];
            let area = findArea(left, right, j - i);
            if (area > result) result = area;
        }
    }

    return result;
};

const findArea = (left, right, width) => {
    if (left > right) {
        return right * width;
    } else {
        return left * width;
    }
}

//O(n) time, O(1) space 2 pointers

var maxArea = function (height) {
    let start = 0;
    let end = height.length - 1;
    let max = 0;

    while (start < end) {
        let w = end - start;
        let h = Math.min(height[start], height[end]);

        max = Math.max(max, w * h);

        if (height[end] > height[start]) {
            start++;
        } else {
            end--;
        }
    }

    return max;
}

// Given a string containing digits from 2 - 9 inclusive, return all possible letter combinations that the number could represent.Return the answer in any order.

// A mapping of digit to letters(just like on the telephone buttons) is given below.Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]