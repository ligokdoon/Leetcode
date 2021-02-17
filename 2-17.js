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
    if (!head || !head.next) return null;

    let fast = head;
    let slow = head;

    for (let i = 1; i < n; i++) {
        fast = fast.next;
    }

    if (!fast.next) {
        head = head.next;
        return head;
    }

    while (fast.next && fast.next.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return head;
}

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Example 1:
// Input: nums = [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]

// Example 2:
// Input: nums = [5, 7, 7, 8, 8, 10], target = 6
// Output: [-1, -1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1, -1]

var searchRange = function (nums, target) {
    let positions = [binarySearch(nums, target)];

    if (positions[0] === -1) {
        return [-1, -1];
    } else {
        let before = positions[0] - 1;
        let after = positions[0] + 1;
        let found = true;
        
        while(found) {
            found = false;
            if (nums[before] === target) {
                positions.push(before);
                before--;
                found = true;
            }
            if (nums[after] === target) {
                positions.push(after);
                after++;
                found = true;
            }
        }
    }

    return [Math.min(...positions), Math.max(...positions)]; //destructuring the positions array using spread operator
};


const binarySearch = (arr, target) => {
    if (!arr.length) return -1;

    let pivot = Math.floor(arr.length / 2);

    let left = arr.slice(0, pivot);
    let right = arr.slice(pivot + 1);

    if (arr[pivot] === target) {
        return pivot;
    } else if (arr[pivot] > target) {
        return binarySearch(left, target);
    } else {
        let searchResult = binarySearch(right, target);
        if (searchResult > -1) return pivot + 1 + searchResult;
    }

    return -1;
}

let a = [2, 2]
let b = [1, 2, 3, 3, 3, 3, 4, 5, 9]
console.log(searchRange(b, 3));
// console.log(searchRange(a, 2));