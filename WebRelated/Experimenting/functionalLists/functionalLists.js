const pair = (head) => (tail) => ({ head: head, tail: tail });
const head = (pair) => pair.head;
const tail = (pair) => pair.tail;
const notEqual = (head) => (tail) => head !== tail ? [head, tail] : null;

const arrayToFunctionalList = (array) =>
  array.reduceRight(
    (previousValue, currentValue) => pair(currentValue)(previousValue),
    null
  );

const functionalListToArray = (functionalList) => {
  const result = [];
  let handle = functionalList;
  while (handle !== null) {
    const { head, tail } = handle;
    result.push(head);
    handle = tail;
  }
  return result;
};

const numbers = arrayToFunctionalList([1, 2, 3]);
console.log("Functional List: ", numbers);
console.log("Array: ", functionalListToArray(numbers));
