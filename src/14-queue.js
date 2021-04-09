const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.head = null;
  }

  get size() {
    let count = 0;
    let cur = this.head;
    while (cur) {
      cur = cur.next;
      count++;
    }
    return count;
  }

  enqueue(element) {
    const node = new ListNode(element);
    let cur;
    if (!this.head) {
      this.head = node;
    } else {
      cur = this.head;

      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
  }

  dequeue() {
    if (!this.head) return null;
    const node = this.head;
    this.head = node.next;
    return node.value;
  }
}

module.exports = Queue;
