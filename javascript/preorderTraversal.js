// difficulty: medium
// https://leetcode.com/problems/binary-tree-preorder-traversal/
//
// Given the root of a binary tree, return the preorder traversal of its nodes' values.
//
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,2,3]


function helper(node, ret){
    if(node === null) return null;
    ret.push(node.val)
    helper(node.left, ret)
    helper(node.right, ret)
}

var preorderTraversal = function(root) {
    let ret = []
    helper(root, ret)
    return ret
};
