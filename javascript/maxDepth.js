// difficulty: easy
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

var maxDepth = function(root) {
    if(!root) return 0
    let max = -Infinity

    function traverse(root,length=0){
      if(!root.left && !root.right){
        if(length > max) max = length
      }
      if(root.left) traverse(root.left,length+1)
      if(root.right) traverse(root.right, length+1)
    }
  traverse(root,0)
  return max+1
};
