// difficulty: hard
// https://leetcode.com/problems/text-justification/
//
// Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
// For the last line of text, it should be left justified and no extra space is inserted between words.
// Note:
// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.
//
// Example 1:
// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

var fullJustify = function(words, maxWidth) {
    let ret = []
    let s = 0
    let temp = []
    for(let i = 0; i < words.length; i++){
      if(s + words[i].length + temp.length <= maxWidth){
        s += words[i].length
        temp.push(words[i])
      }else{
        ret.push(temp)
        s= words[i].length
        temp = [words[i]]
      }

    }
    ret.push(temp)
    for(let i = 0; i < ret.length - 1; i++){
      ret[i] = fixSpacing(ret[i], maxWidth)
    }

    let last = ret[ret.length - 1]
    last = last.join(" ")
    last += " ".repeat(maxWidth - last.length)

    ret[ret.length - 1] = last

    return ret
};

function fixSpacing(words, maxWidth){
  let retString = ""
  if(words.length == 1){
    return words[0] + " ".repeat(maxWidth - words[0].length)
  }
  let wordsLength = 0
  let numSpaces = 0
  words.forEach(x=> wordsLength += x.length)
  numSpaces = maxWidth - wordsLength

  let spacesPer = Math.floor(numSpaces/(words.length - 1))
  let bonus = numSpaces%(words.length - 1)

  for(let i = 0; i < words.length - 1; i++){
    retString += words[i] + " ".repeat(spacesPer + (bonus > 0))
    bonus -= 1
  }

  return retString + words[words.length-1]
}
