class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const C = this.top;
    this.top = C.next;
    return C.data;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  
}

module.exports = {
  _Node,
  Stack,
  Queue
};