// //Arrays and string

// const recursiveFunction = (val) => {
//   if (val > 3) {
//     return;
//   }
//   console.log(val);
//   recursiveFunction(val + 1);
//   console.log("End of call", val);
//   return;
// };

// recursiveFunction(1);

//Single Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

(function main() {
  // Write your code here
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.prev = list;
  list.next.next = new ListNode(3);
  list.next.next.prev = list.next;
  console.log(list);
})();
