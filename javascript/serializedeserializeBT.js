// difficulty: hard
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
//
// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
//
// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
//
// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
//
// Example 1:
// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]

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
