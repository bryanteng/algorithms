// difficulty:medium
// https://leetcode.com/problems/decode-string/
// Given an encoded string, return its decoded string.
//
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].
//
// Examples:
// s = "3[a]2[bc]", return "aaabcbc".
// s = "3[a2[c]]", return "accaccacc".
// s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

var decodeString = function (s) {
  let i = 0
  while (i < s.length) {
    if (s[i] == "]") {
      let i2 = i - 1
      while (s[i2] != "[") {
        i2 -= 1
      }
      let t = s.slice(i2 + 1, i)
      i3 = i2 - 1
      while (typeof +s[i3 - 1] == "number" && !Number.isNaN(+s[i3 - 1]) && i3 > 0) i3 -= 1
      let ret = t.repeat(s.slice(i3, i2))
      s = s.slice(0, i3) + ret + s.slice(i + 1, s.length)
      i = i3 - 1
    }
    i += 1
  }
  return s
};
