// 5 kyu kata
// https://www.codewars.com/kata/one-line-task-string-merge/train/javascript

// StringMerge("hello", "world", "l")       ==>  "held"
// StringMerge("coding", "anywhere", "n")   ==>  "codinywhere"
// StringMerge("jason", "samson", "s")      ==>  "jasamson"
// StringMerge("wonderful", "people", "e")  ==>  "wondeople"

// Code Limit
// code.length < 58 characters.

stringMerge=(s,t,l)=>s.split(l)[0]+t.match(`${l}.*`)