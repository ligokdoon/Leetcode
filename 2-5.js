var goodNodes = function (root, path = [], count = 1) {

    let stack = [root];
    let explored = new Set();

    while (stack.length) {
        let top = stack.pop();
        if (!top) {
            console.log(path);
            path = [];
            continue;
        }
        path.push(top);

        if (!explored.has(top)) {
            explored.add(top);
            stack.push(top.right);
            stack.push(top.left);
        }

    }

};