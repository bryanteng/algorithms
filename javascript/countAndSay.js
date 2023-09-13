// difficulty: medium
// https://leetcode.com/problems/count-and-say
// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
//
// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.
//
// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

var countAndSay = function(n) {
    let ret = "1"
    let index = 1
    while(index < n){
        let temp = ""
        let queue = [ret[0]]
        for(let i = 1; i < ret.length; i++){
            let curr = ret[i]
            let prev = queue[0]
            if(curr == prev) queue.push(curr)
            else {
                temp += `${queue.length}${prev}`
                queue = [curr]
            }
        }
        if(queue.length) temp += `${queue.length}${queue[0]}`
        ret = temp
        index++
    }
    return ret
};
