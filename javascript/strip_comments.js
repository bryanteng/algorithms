// 4 kyu kata
// https://www.codewars.com/kata/strip-comments/train/ruby

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas

function solution(input, markers) {
    return input.split("\n").map(input =>{
      let index = 0
      let temp =""
      while (index < input.length){
        if (markers.includes(input[index])) break
        temp+=input[index] 
        index+=1
      }
      return temp.trim()
    }).join("\n")
  };