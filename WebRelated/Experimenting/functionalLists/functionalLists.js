const pair = (head) => (tail) => ({ head: head, tail: tail });
const head = (pair) => pair.head;
const tail = (pair) => pair.tail;
const notEqual = (head, tail) => (head !== tail ? [head, tail] : null);
