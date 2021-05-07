// difficulty:medium
// https://leetcode.com/problems/swap-nodes-in-pairs/
//
// Given a linked list, swap every two adjacent nodes and return its head.
//
// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

var swapPairs = function(head) {
    let node = head
    let temp
    while(node && node.next){
        temp = node.next.val
        node.next.val = node.val
        node.val = temp
        node = node.next.next
    }
    return head
};
