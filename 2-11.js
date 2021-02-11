// Given a linked list, swap every two adjacent nodes and return its head.
// Example 1:

// Input: head = [1, 2, 3, 4]
// Output: [2, 1, 4, 3]

// Example 2:

// Input: head = []
// Output: []

// Example 3:

// Input: head = [1]
// Output: [1]

// Constraints:
// The number of nodes in the list is in the range[0, 100].
// 0 <= Node.val <= 100

var swapPairs = function (head) {
    if (head === null || !head.next) return head;
    let count = 0;
    let currNode = head
    let nextNode = head.next

    while (nextNode) {
        if (count % 2 === 0) {
            let tempVal = currNode.val;
            currNode.val = nextNode.val
            nextNode.val = tempVal;
        }
        currNode = nextNode;
        nextNode = currNode.next
        count += 1;
    }

    return head;
}

// Given a sorted array of distinct integers and a target value, return the index if the target is found.If not, return the index where it would be if it were inserted in order.

// Example 1:

// Input: nums = [1, 3, 5, 6], target = 5
// Output: 2

var searchInsert = function (nums, target) {
    let result = nums.length;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target || nums[i] > target) {
            result = i;
            break;
        }
    }

    return result;
};