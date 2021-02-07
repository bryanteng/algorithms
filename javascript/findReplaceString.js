// difficulty: medium
// https://leetcode.com/problems/find-and-replace-in-string/
//
// To some string S, we will perform some replacement operations that replace groups of letters with new ones (not necessarily the same size).
//
// Each replacement operation has 3 parameters: a starting index i, a source word x and a target word y.  The rule is that if x starts at position i in the original string S, then we will replace that occurrence of x with y.  If not, we do nothing.
//
// For example, if we have S = "abcd" and we have some replacement operation i = 2, x = "cd", y = "ffff", then because "cd" starts at position 2 in the original string S, we will replace it with "ffff".
//
// Using another example on S = "abcd", if we have both the replacement operation i = 0, x = "ab", y = "eee", as well as another replacement operation i = 2, x = "ec", y = "ffff", this second operation does nothing because in the original string S[2] = 'c', which doesn't match x[0] = 'e'.
//
// All these operations occur simultaneously.  It's guaranteed that there won't be any overlap in replacement: for example, S = "abc", indexes = [0, 1], sources = ["ab","bc"] is not a valid test case.
//
// Example:
// Input: S = "abcd", indexes = [0, 2], sources = ["a", "cd"], targets = ["eee", "ffff"]
// Output: "eeebffff"
// Explanation:
// "a" starts at index 0 in S, so it's replaced by "eee".
// "cd" starts at index 2 in S, so it's replaced by "ffff".

var findReplaceString = function(S, indexes, sources, targets) {
  let indices = {}
  for( i in indexes ){
    indices[indexes[i]] = i
  }

  let keys = Object.keys(indices)
  keys = keys.sort((a,b)=> a - b)

  for(let j = indexes.length - 1; j >= 0; j--){
    let i = indices[keys[j]]
    let source = sources[i]
    let temp = S.slice(indexes[i], indexes[i]+ source.length)
    if(temp == sources[i]){
      S = S.slice(0,indexes[i]) + targets[i] + S.slice(indexes[i]+ source.length, S.length)
    }
  }
  return S
};
