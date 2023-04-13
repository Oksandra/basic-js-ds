const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface

 */

class ListNode {
     constructor(x) {
      this.value = x;
      this.next = null;
    }
   }

function removeKFromList(list, k) {
  if(list === null) return null;
let newNode = new ListNode();
newNode.next = list;

let currElement = newNode;

while(currElement.next) {
  if(currElement.next.value === k) {
    currElement.next = currElement.next.next;
  } else {
    currElement = currElement.next;
  }
}

return newNode.next
}

module.exports = {
  removeKFromList
};
