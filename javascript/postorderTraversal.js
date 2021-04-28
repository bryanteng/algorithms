// difficulty: medium
// https://leetcode.com/problems/binary-tree-postorder-traversal/
//
// Given the root of a binary tree, return the postorder traversal of its nodes' values.
//
// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]

var postorderTraversal = function(root) {
    let ret = []
    helper(root, ret)
    return ret
};

function helper(node, ret){
    if(node === null) return null;
    if(node.left) helper(node.left,ret)
    if(node.right) helper(node.right, ret)
    ret.push(node.val)
}
