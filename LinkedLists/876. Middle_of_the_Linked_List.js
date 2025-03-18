/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// In a singly linked list, the last node's .next is always explicitly set to null
// let node1 = { val: 1, next: null};
// let head = node1;

// console.log(head.next);  // node1.next → null
// console.log(head.next.next.val); // TypeError: Cannot read property 'next' of null

var middleNode = function (head) {
  let currentNode = head;
  let middleNode = head;
  while (currentNode !== null && currentNode.next !== null) {
    console.log("currentNode", currentNode);
    middleNode = middleNode.next;
    currentNode = currentNode.next.next;
  }
  return middleNode;
};

// time complexity O(n)
// space complexity constant O(1)
// if we wanted to use an array, we could do this but it defeats the purpose of the question and increases space complexity

var middleNode = function (head) {
  const myArr = [];
  currentNode = head;

  while (currentNode !== null) {
    myArr.push(currentNode);
    currentNode = currentNode.next;
  }
  console.log("myArr", myArr);

  const midIndex = Math.floor(myArr.length / 2);

  return myArr[midIndex];
};

// time complexity O(n)
// space complexity  O(n)
