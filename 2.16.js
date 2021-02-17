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


// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1, 2, 3, 4, 5], n = 2
// Output: [1, 2, 3, 5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1, 2], n = 1
// Output: [1]

var removeNthFromEnd = function (head, n) {
    const visited = [head];

    while (visited[visited.length - 1].next) {
        let currNode = visited[visited.length - 1];
        visited.push(currNode.next);
    }

    visited.splice(-n, 1);

    if (!visited.length) return null;

    console.log(visited);

    for (let i = 0; i < visited.length; i++) {
        let currNode = visited[i];
        if (i === visited.length - 1) {
            currNode.next = null;
        } else {
            currNode.next = visited[i + 1];
        }
    }

    return visited[0];
};