// difficulty: easy
// https://leetcode.com/problems/minimum-depth-of-binary-tree/
//
// Given a binary tree, find its minimum depth.
//
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
//
var minDepth = function(root) {
  if(!root) return 0
  let min = Infinity
  function traverse(root,length){
    if(!root.left && !root.right){
      if(length < min) min = length
    }
    if(root.left && length < min) traverse(root.left, length+1)
    if(root.right && length < min) traverse(root.right, length+1)
  }
  traverse(root,0)
  return min+1

};
