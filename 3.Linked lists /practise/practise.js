// Create a Singly Linked List and find the middle value
//1 -> 2 --> 3 --> 4 --> 5 --> 6 -->7

class ListNode {
  constructor(val) {
    this.head = val;
    this.next = null;
  }
}

const findMiddleValue = (list) => {
  let slow = list;
  let fast = list;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.head;
};

(() => {
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(3);
  list.next.next.next = new ListNode(4);
  list.next.next.next.next = new ListNode(5);
  list.next.next.next.next.next = new ListNode(6);
  list.next.next.next.next.next.next = new ListNode(7);
  console.log(findMiddleValue(list));
})();
