class ListNode {
  constructor(val) {
    this.head = val;
    this.next = null;
  }
}

var middleNode = function (head) {
  let slow = head;
  let fast = head;
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
  console.log(JSON.stringify(list));
  console.log(middleNode(list));
})();
