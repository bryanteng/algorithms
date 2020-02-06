// difficulty: medium
// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=strings

// Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.


function isValid(s) {
    let hash = {}
    for(let i in s){
      hash[s[i]] ? hash[s[i]] += 1 : hash[s[i]] = 1
    }
    let numValues = Object.values(hash).sort((a,b)=> b-a)
    let uniq = Array.from(new Set(numValues))
    if(uniq.length == 1) return "YES"
    if(uniq.length > 2) return "NO"
    if(numValues[0] - numValues[1] > 1) return "NO"
    let hash2 = {}
    for(let i in numValues){
      hash2[numValues[i]] ? hash2[numValues[i]] += 1 : hash2[numValues[i]] = 1
    }
    let h2values = Object.values(hash2)
    if(h2values.includes(1)) return "YES"
    let h2keys = Object.keys(hash2)
    let most = hash2[h2keys[0]] > hash2[h2keys[1]] ? h2keys[0] : h2keys[1]
    if(hash2[most] > 1) return "NO"
    return "NO"
  }
  isValid("aabbbccc")