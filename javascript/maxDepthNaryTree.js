// difficulty: easy
// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
// Given a n-ary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

var maxDepth = function(root) {
    if(!root) return 0
    let t = 0
    let max = 0
    root.children.forEach(x=>{
      t = maxDepth(x)
      if(t > max) max = t
    })
    return max+1
};
