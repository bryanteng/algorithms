// 4 kyu kata
// https://www.codewars.com/kata/5324945e2ece5e1f32000370
// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a,b) { 
    a = `${a ? a : 0}`.split("").reverse()
    b = `${ b ? b : 0}`.split("").reverse()
    let total = []
    let shortest = a.length < b.length ? a : b
    let longest = a.length > b.length ? a : b
    while (shortest.length < longest.length){
      shortest.push("0")
    }
    let index = 0
  
    while (index < a.length){
      temp = Number(a[index])+Number(b[index])+Number(total[index] ? total[index] : 0)
      if (temp >= 10){
        total[index] = temp%10
        total[index+1] = 1
      }else total[index] = temp
     
      index+=1
    }
    
    return total.reverse().join("").replace(/^0+/, '')
  }