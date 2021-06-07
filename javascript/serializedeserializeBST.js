// difficulty: medium
// https://leetcode.com/problems/serialize-and-deserialize-bst/
//
// Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
// Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.
// The encoded string should be as compact as possible.
//
// Example 1:
// Input: root = [2,1,3]
// Output: [2,1,3]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let preorder = []
    helper(root)

    function helper(node){
        if(node == null) return preorder.push("#")

        preorder.push(node.val)
        helper(node.left)
        helper(node.right)
    }
    return preorder.join("$")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let preorder = data.split("$")
    let i = 0

    function deserializeHelper(){
        if(i == preorder.length) return null
        let val = preorder[i++]
        if(val == "#") return null
        let node = new TreeNode(val)

        node.left = deserializeHelper()
        node.right = deserializeHelper()

        return node
    }


    return deserializeHelper()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
