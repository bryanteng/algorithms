// difficulty: medium
// https://leetcode.com/problems/binary-tree-level-order-traversal/
//
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
//
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

var levelOrder = function(root) {
    let ret = []
    let level = 0
    helper(root, ret, level)
    return ret
};

function helper(node, ret, level){
    if(node === null) return null;
    if(ret[level]) ret[level].push(node.val)
    else ret.push([node.val])
    if(node.left) helper(node.left, ret, level+1)
    if(node.right) helper(node.right, ret, level+1)
}
