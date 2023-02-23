# linked-lists

This is a simple implementation of a linked list in JavaScript. The implementation includes two functions: 
`LinkedList` and `Node`.

### LinkedList Function
The `LinkedList` function creates a new linked list. 
It contains several functions to manipulate the list, including:

* `append(value)`: Adds a new node with the given value to the end of the list.
* `prepend(value)`: Adds a new node with the given value to the beginning of the list.
* `size()`: Returns the number of nodes in the list.
* `head()`: Returns the first node in the list.
* `tail()`: Returns the last node in the list.
* `at(index)`: Returns the node at the given index.
* `pop()`: Removes the last node from the list.
* `contains(value)`: Returns true if the list contains a node with the given value, false otherwise.
* `find(value)`: Returns the index of the first node with the given value, or null if the value is not found in the list.
* `toString()`: Prints a string representation of the list in the form "( value ) -> ( value ) -> ... -> null".

### Node Function
The `Node` function creates a new node with a given value. 
Each node has a `value` property that stores its value, and a `nextNode` property that points to the next node in the list.

## Example Usage
```javascript
const list = LinkedList();

list.append(1);
list.append(2);
list.prepend(0);
list.toString(); // ( 0 ) -> ( 1 ) -> ( 2 ) -> null

list.pop();
list.toString(); // ( 0 ) -> ( 1 ) -> null

list.contains(2); // true
list.contains(3); // false

list.find(1); // 1
list.find(3); // null

const node = Node(3);
node.nextNode = Node(4);
```