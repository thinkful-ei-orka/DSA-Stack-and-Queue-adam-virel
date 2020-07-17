const { _Node, Stack, Queue } = require('./Stack');

let starTrek = new Stack;
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

const peek = (stack) => console.log(stack.top.data);
// peek(starTrek);

const isEmpty = stack => stack.top === null;
// console.log(isEmpty(starTrek))
// console.log(isEmpty(new Stack))

function display(stack) {
  if (stack.top) {
    console.log(stack.top.data);
    display(stack.top.next);
  } else {
    console.log(stack.data);
    if (stack.next !== null) {
      display(stack.next);
    }
  }
}
// display(starTrek);

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let stack = new Stack;
  let stack2 = new Stack;
  s.split('').forEach(char => stack.push(char));
  s.split('').reverse().forEach(char => stack2.push(char));
  while (stack.top !== null) {
    if (stack.top.data === stack2.top.data) {
      stack.top = stack.top.next;
      stack2.top = stack2.top.next;
    } else {
      return false;
    }
  }
  return true;
}

// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function matchingParentheses(string) {
  let stack = new Stack;
  string = string.split('');
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (/[([{]/.test(char)) { stack.push(char); }
    else if (/[)\]}]/.test(char)) {
      if (stack.top === null) { return `You have an extra ${char}`; } { stack.pop(); }

    }
  }
  if (stack.top !== null) { return `You have an extra ${stack.top.data}`; }
  return `You've got matching brackets!`;
}

// console.log(matchingParentheses(`('"[{`));
// console.log(matchingParentheses(`([{""}])`));
// console.log(matchingParentheses(`}]'")`));
let numberStack = new Stack;
numberStack.push(5);
numberStack.push(2);
numberStack.push(10);
numberStack.push(3);
numberStack.push(1);
numberStack.push(4);

function sortStack(stack) {
  let result = new Stack;
  let temp = null;
  while (stack.top !== null || temp !== null) {
    if (temp === null) {
      if (result.top === null || stack.top.data > result.top.data) {
        result.push(stack.pop());
      } else {
        temp = result.pop();
      }
    } else {
      while (temp !== null) {
        if (temp > stack.top.data) {
          result.push(stack.pop());
          stack.push(temp);
          stack.push(result.pop());
          temp = null;
        } else {
          result.push(stack.pop());
        }
      }
    }
  }
  return result;
}
// display(sortStack(numberStack));

////Queue
let starTrekQ = new Queue;

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

const peekQ = (queue) => queue.first.data;
// console.log(peekQ(starTrekQ))

const isEmptyQ = (queue) => this.first === null;
// console.log(isEmptyQ(starTrekQ))

function displayQ(queue) {
  let current = queue.first;
  while (current !== undefined && current !== null) {
    console.log(current.data);
    current = current.next;
  }
}
// displayQ(starTrekQ);

////7
// First in queue is Kirk

////8


////9
dancers = ['F Jane', 'M Frank', 'M John', 'M Sherlock', 'F Madonna', 'M David', 'M Christopher', 'F Beyonce'];

function dancePairing(array) {
  let men = new Queue;
  let mancount = 0;
  let women = new Queue;
  let womancount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].startsWith('M')) {
      men.enqueue(array[i].split(' ')[1]);
      mancount++;
    } else {
      women.enqueue(array[i].split(' ')[1]);
      womancount++;
    }
  }
  let currentM = men.first;
  let currentW = women.first;
  while (currentM !== undefined && currentW !== undefined) {
    console.log(`Female dancer is ${currentW.data}, and the male dancer is ${currentM.data}`);
    currentM = currentM.next;
    currentW = currentW.next;
    mancount--;
    womancount--;
  }
  if (currentM !== undefined) { console.log(`There are ${mancount} male dancers waiting to dance`); }
  if (currentW !== undefined) { console.log(`There are ${womancount} female dancers waiting to dance`); }
}

// dancePairing(dancers);

////10

const customers = ['Alfred', 'Betty', 'Candice', 'David', 'Earl', 'Francine', 'Gerald', 'Hannah', 'Indiana', 'John', 'Kelsie', 'Lauren', 'Mathew', 'Nancy', 'Ophelia', 'Peggy', 'Quoff', 'Randall', 'Sandie', 'Terry', 'Unice', 'Veronica', 'Winfred', 'Xanaphia', 'Yurik', 'Zoltair'];

function ophidianBank(arr) {
  let queue = new Queue;

  for (let i = 0; i < arr.length; i++) {
    queue.enqueue(arr[i]);
    console.log('*** New Customer ***');
    let paperwork = Math.random() * 100 > 75;
    if (!paperwork) {
      let temp = queue.dequeue();
      temp === undefined ? null : queue.enqueue(temp);
    } else { queue.dequeue(); }
    displayQ(queue);
  }
}

// ophidianBank(customers);