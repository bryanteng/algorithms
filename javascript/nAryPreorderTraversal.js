// difficulty: easy
// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
//
// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
// Example 1:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]

var preorder = function(root) {
    let ret = []
    helper(root,ret)
    return ret
};

function helper(node, ret){
    if(node === null) return null;
    ret.push(node.val)
    for(child of node.children){
        helper(child, ret)
    }
}
