// difficulty: medium
// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.
//
// Example 1:
//
// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]

var buildTree = function(inorder, postorder) {
    let map = new Map()
    inorder.forEach((x,i) => map.set(x,i))
    function buildTreeHelper(pStart, pEnd){
        if(pStart > pEnd) return null
        let value = postorder.pop()
        let index = map.get(value)
        let node = new TreeNode(value)

        node.right = buildTreeHelper(index + 1, pEnd)
        node.left = buildTreeHelper(pStart, index - 1)

        return node
    }

    return buildTreeHelper(0, inorder.length - 1)
};
