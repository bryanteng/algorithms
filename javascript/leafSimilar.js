// difficulty: easy
// https://leetcode.com/problems/leaf-similar-trees/
//
// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
//
// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
// Two binary trees are considered leaf-similar if their leaf value sequence is the same.
// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
//
// Example 1:
// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true

var leafSimilar = function(root1, root2) {
    let leaf1 = []
    let leaf2 = []
    helper(root1, leaf1)
    helper(root2, leaf2)
    return JSON.stringify(leaf1) == JSON.stringify(leaf2)
};

function helper(node,ret){
    if(node === null) return;
    if(node.left === null && node.right === null) ret.push(node.val)
    else{
        if( node.left ) helper(node.left, ret)
        if( node.right ) helper(node.right, ret)
    }
}
