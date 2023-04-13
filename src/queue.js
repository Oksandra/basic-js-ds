const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
   return this.head;
  }
  
  enqueue(value) {
    if (this.length === 0) {
      this.head = new Node(value);
    } else {
      let currElement = this.head;
      while(currElement.next) {
        currElement = currElement.next;
      }
      currElement.next = new Node(value);

    }
    this.length++;
  }

  dequeue() {
    let currElement = this.head;
    this.head = currElement.next;
    this.length--;
    return currElement.value;
  }
}




module.exports = {
  Queue
};
