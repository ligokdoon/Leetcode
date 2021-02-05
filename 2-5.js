// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.
// Input: root = [3, 1, 4, 3, null, 1, 5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node(3) is always a good node.
//     Node 4 -> (3, 4) is the maximum value in the path starting from the root.
//         Node 5 -> (3, 4, 5) is the maximum value in the path
// Node 3 -> (3, 1, 3) is the maximum value in the path.

var goodNodes = function (root) {

    let count = 1;
    const path = [];
    let stack = [root];
    const explored = new Set();

    while (stack.length) {
        let top = stack.pop();
        if (!top) {
            //a leaf has been reached
            count += goodNodeCountInPath(path);
            while (explored.has(path[path.length - 1]) && path[path.length - 1] != root) {
                path.pop();
            }
        } else {
            explored.add(top);
            path.push(top);
            stack.push(top.right);
            stack.push(top.left);
        }

    }

    return count;

};

const goodNodeCountInPath = path => {

    let count = -1;
    let pathMax = 0;

    for (let i = 0; i < path.length; i++) {
        let node = path[i];
        if (node.val >= pathMax) {
            count += 1;
            pathMax = node.val;
        }
    }

    return count;
}