// difficulty: easy
// https://leetcode.com/problems/count-items-matching-a-rule/
//
// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.
//
// The ith item is said to match the rule if one of the following is true:
//
// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.
//
//
//
// Example 1:
//
// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].


var countMatches = function(items, ruleKey, ruleValue) {
    let index
    let count = 0
    switch(ruleKey){
      case("type"):
        index = 0
        break;
      case("color"):
        index = 1
        break
      case("name"):
        index = 2
        break
      default:
        index = -1
        break
    }
    for(i of items){
      if( i[index] == ruleValue ) count++
    }
    return count
};
