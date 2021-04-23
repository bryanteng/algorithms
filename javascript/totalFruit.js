// difficulty: medium
// https://leetcode.com/problems/fruit-into-baskets/
//
// In a row of trees, the i-th tree produces fruit with type tree[i].
// You start at any tree of your choice, then repeatedly perform the following steps:
// Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
// Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
// Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.
// You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.
// What is the total amount of fruit you can collect with this procedure?
// Example 1:
// Input: [1,2,1]
// Output: 3
// Explanation: We can collect [1,2,1].
//
// Example 2:
// Input: [0,1,2,2]
// Output: 3
// Explanation: We can collect [1,2,2].
// If we started at the first tree, we would only collect [0, 1].
//
// Example 3:
// Input: [1,2,3,2,2]
// Output: 4
// Explanation: We can collect [2,3,2,2].
// If we started at the first tree, we would only collect [1, 2].

var totalFruit = function(tree) {
    let max = -Infinity
    let i = 0
    let first
    let second = null
    let count = 0
    let j
    let last
    while(i < tree.length){
      first = tree[i]
      j = i+1
      count = 1
      last = i
      while( j<tree.length ){
        if(tree[j] !== first && second === null) second = tree[j]
        if(tree[j] !== first && tree[j] !== second) break
        count++
        j++
      }
      if(count > max){
        max = count
      }
      if(second === null) break
      last = j-1
      while(tree[last] == tree[last-1]){
        last-=1
      }
      i=last-1
      i++
      second=null
    }
  return max
};
