/*
 * LINKED LIST with factories
 */

const createNode = (nodeValue = null, next = null) => {
  const value = nodeValue;
  const nextNode = next;

  return { value, nextNode };
};

const LinkedList = () => {
  let HEAD = null;
  const head = () => HEAD;

  const append = (value) => {
    if (head() === null) {
      HEAD = createNode(value);
      return;
    }

    let node = head();
    while (node.nextNode != null) {
      node = node.nextNode;
    }

    const lastNode = createNode(value);
    node.nextNode = lastNode;
  };

  const prepend = (value) => {
    HEAD = createNode(value, head());
  };

  const size = () => {
    if (head() === null) {
      return 0;
    }

    let counter = 1;
    let node = head();
    while (node.nextNode != null) {
      node = node.nextNode;
      counter++;
    }
    return counter;
  };

  const tail = () => {
    let node = head();
    do {
      node = node.nextNode;
    } while (node.nextNode != null);
    return node;
  };

  const at = (index) => {
    if (head() === null) {
      return 'Empty list.';
    }
    if (!Number.isInteger(index) || index < 0) {
      return 'Index must be an integer bigger or equals then 0.';
    }

    let counter = 0;
    let node = head();

    do {
      if (counter === index) {
        return node.value;
      }
      node = node.nextNode;
      counter++;
    } while (node.nextNode != null);

    return 'Index is bigger then list size.';
  };

  const pop = () => {
    if (head() === null) {
      return 'Empty list.';
    }
    let node = head();
    let previous = head();

    while (node.nextNode != null) {
      previous = node;
      node = node.nextNode;
    }
    previous.nextNode = null;
  };

  const contains = (value) => {
    if (head() === null) {
      return false;
    }

    let node = head();
    do {
      if (node.value === value) {
        return true;
      }
      node = node.nextNode;
    } while (node.nextNode != null);

    return false;
  };

  const find = (value) => {
    if (head() === null) {
      return 'Empty list.';
    }

    let counter = 0;
    let node = head();

    while (node.nextNode != null) {
      if (node.value === value) {
        return counter;
      }
      node = node.nextNode;
      counter++;
    }
  };

  const toString = () => {
    let message = `( ${head().value} ) -> `;
    let node = head();

    while (node.nextNode != null) {
      node = node.nextNode;
      message = message.concat(`( ${node.value} ) -> `);
    }

    message = message.concat(`null`);
    return message;
  };

  const insertAt = (value, index) => {
    if (head() === null) {
      return 'Empty list.';
    }
    if (!Number.isInteger(index) || index < 1) {
      return 'Index must be an integer bigger or equals then 1.';
    }

    let node = head();
    let previous = head();
    let counter = 0;

    while (node.nextNode != null) {
      if (counter === index) {
        newNode = createNode(value, node);
        previous.nextNode = newNode;
        return;
      }

      previous = node;
      node = node.nextNode;
      counter++;
    }
  };

  const removeAt = (index) => {
    if (head() === null) {
      return 'Empty list.';
    }
    if (!Number.isInteger(index) || index <= 0) {
      return 'Index must be an integer bigger or equals then 1.';
    }
    if (index === 0) {
      HEAD = head.nextNode;
      return;
    }

    let node = head();
    let previous;
    let counter = 0;

    do {
        previous = node;
        node = node.nextNode;
        if (counter === index) {
            previous.nextNode = node.nextNode;
            return;
        }
        counter++;
    } while (node.nextNode != null);

    return 'Index is bigger then list size.';
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

/*
 * CREATING SOME LIST
 */
const myLinkedList = LinkedList();

nodes = ['thisOne', 'another', 'yet one more', 'not repeated', 'yeah..'];
nodes.map((i) => myLinkedList.append(i));

myLinkedList.prepend('before');

myLinkedList.append('garbage');
myLinkedList.pop();

myLinkedList.insertAt('second', 2);

/*
 *
 */
console.log(
  `HEAD: ${myLinkedList.head() ? myLinkedList.head().value : 'Empty list'}`
);

console.log(
  `\nTAIL: ${myLinkedList.tail() ? myLinkedList.tail().value : 'Empty list'}`
);

console.log(`\nLIST SIZE: ${myLinkedList.size()}`);

console.log(`\nAT INDEX 3: ${myLinkedList.at(3)}`);
console.log(`AT INDEX 50: ${myLinkedList.at(50)}`);
console.log(`AT INDEX "b": ${myLinkedList.at('b')}`);

const exists = nodes[2];
console.log(`\nLIST CONTAINS "${exists}": ${myLinkedList.contains(exists)}`);
console.log(`LIST CONTAINS "garbage": ${myLinkedList.contains('garbage')}`);

console.log(
  `\nFIND INDEX OF "not repeated": ${myLinkedList.find('not repeated')}`
);

console.log(`\nDIAGRAM: \n${myLinkedList.toString()}`);



myLinkedList.insertAt('garbage2', 3);

myLinkedList.removeAt(2);
console.log(`\nDIAGRAM After insert and remove on index 2: \n${myLinkedList.toString()}`);



