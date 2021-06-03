// difficulty: medium
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
//
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
//
// Example 1:
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]


var buildTree = function(preorder, inorder) {
    let map = new Map()
    inorder.forEach((x, i) => map.set(x,i))

    function buildTreeHelper( preStart, preEnd ){
        if(preStart > preEnd) return null
        let value = preorder.shift()
        let index = map.get(value)
        let node = new TreeNode(value)

        node.left = buildTreeHelper(preStart, index - 1)
        node.right = buildTreeHelper(index+1, preEnd)

        return node
    }
    
    return buildTreeHelper(0, preorder.length - 1)
};
