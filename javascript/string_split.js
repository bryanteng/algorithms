 // 6 kyu kata
 // https://www.codewars.com/kata/split-strings/train/javascript
 //
 // Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
 //
 // Examples:
 //
 // solution('abc') # should return ['ab', 'c_']
 // solution('abcdef') # should return ['ab', 'cd', 'ef']

 function solution(str){
   let res = []
     if(str.length % 2 == 1) str += "_"
     index = 0
     while(index < str.length){
       res.push(str.slice(index, index+2))
       index+=2
     }
   return res
 }
