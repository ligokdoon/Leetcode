// You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list.These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

// Flatten the list so that all the nodes appear in a single - level, doubly linked list.You are given the head of the first level of the list.

// Example 1:
// Input: head = [1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10, null, null, 11, 12]
// Output: [1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]

// Example 2:

// Input: head = [1, 2, null, 3]
// Output: [1, 3, 2]

function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
};

var flatten = function (head) {
    let dummyNode = new Node(0, null, null, null)
    let pointer = dummyNode;

    const traverse = (node) => {
        if (node) {
            let newNode = new Node(node.val, null, null, null);
            pointer.next = newNode;
            newNode.prev = pointer;
            pointer = pointer.next
            if (node.child) {
                traverse(node.child);
            }
            traverse(node.next);
        }
    }

    traverse(head);
    return dummyNode.next;
};
