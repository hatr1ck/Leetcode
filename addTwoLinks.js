/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let top = { val: 0, next: null }
    let head = top;
    let carry = 0;
    while(l1 || l2){
        l1 = l1 || { val: 0, next: null }
        l2 = l2 || { val: 0, next: null }
        let sum = l1.val + l2.val+carry;
        carry=0;
        if(sum>9){
            carry++
            sum-=10
        }
         head.next = { val: sum, next: null }; 
         head = head.next; 
        l1 = l1.next
        l2 = l2.next
    }
    if(carry !== 0){ 
        head.next = { val: carry , next: null }
    }
    return top.next;
};
console.log(addTwoNumbers([2,4,3],
    [5,6,4]))