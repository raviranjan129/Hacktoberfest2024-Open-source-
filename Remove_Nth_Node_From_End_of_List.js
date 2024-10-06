/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head ;
    let i = 0;
    while(i<n && fast != null){
        i++;
        fast = fast.next;
    }
    if(fast == null){
        // remove head
        let newHead = head.next;
        head.next = null;
        return newHead;
    }
    let slow = head;
    while(fast.next !=null){

        slow = slow.next;
        fast =fast.next;
    }
    let tobedel=slow.next;
    slow.next = tobedel.next;
    tobedel.next=null;
    return head;
};
