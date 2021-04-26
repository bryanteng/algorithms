// difficulty: easy
// https://leetcode.com/problems/reverse-linked-list/
//
// Given the head of a singly linked list, reverse the list, and return the reversed list.
//
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

var reverseList = function(head) {
    let prev = null
    let curr = head
    let temp
    while(curr != null ){
        temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
};
