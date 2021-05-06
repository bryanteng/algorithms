// difficulty: medium
// https://leetcode.com/problems/find-largest-value-in-each-tree-row/
//
// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
//
// Example 1:
// Input: root = [1,3,2,5,3,null,9]
// Output: [1,3,9]
//
// Example 2:
// Input: root = [1,2,3]
// Output: [1,3]

var largestValues = function(root) {
    let ret = []
    let level = 0
    helper(root,ret, level)
    return ret
};

function helper(node, arr, lvl){
    if(node === null) return;
    if(arr[lvl] === undefined) arr[lvl] = node.val
    if(node.val > arr[lvl]) arr[lvl] = node.val
    if(node.left) helper(node.left,arr,lvl+1)
    if(node.right) helper(node.right,arr, lvl+1)
}
