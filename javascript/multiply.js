// 4 kyu kata
// https://www.codewars.com/kata/multiplying-numbers-as-strings/train/javascript

// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid

function multiply(a,b){
    if(a == 0 || b == 0) return '0'
    let ret = new Array(a.length + b.length).fill(0)
  
    for(let i = a.length-1; i>=0;i--){
      let temp =0
      for(let j = b.length-1; j>=0;j--){
        let index = i+j+1
        let res = a[i]*b[j] + ret[index] + temp
        ret[index] = res%10
        temp = ~~(res / 10)
      }
      ret[i] += temp
    }
    return ret.join("").replace(/^0+/, '')
  }