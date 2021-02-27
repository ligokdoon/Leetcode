// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre - order traversal of the binary tree.

var flatten = function (root) {
    if (!root) return null;

    const stack = [root];
    let linkedList;
    let result;

    while (stack.length) {
        let node = stack.pop();

        if (node.right) {
            stack.push(node.right);
        }

        if (node.left) {
            stack.push(node.left);
        }

        node.left = null;

        if (linkedList) {
            linkedList.right = node;
        } else {
            result = node;
        }

        linkedList = node;
    }

    return result;
};