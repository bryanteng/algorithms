// difficulty: easy
// https://leetcode.com/problems/last-stone-weight/
// We have a collection of rocks, each rock has a positive integer weight.
//
// Each turn, we choose the two heaviest rocks and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:
//
// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

var lastStoneWeight = function(stones) {
  if (stones.length == 1) return stones[0]
  while(stones.length != 1){
    stones.sort((a,b)=> a-b)
    let t = stones[stones.length-1]-stones[stones.length-2]
    if(t){
      stones[stones.length-2] = t
    }else{
      stones.pop()
    }
    stones.pop()
    if(stones.length == 0 ) return 0
  }
 return stones
};
