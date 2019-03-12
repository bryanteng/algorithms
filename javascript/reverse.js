// 6 kyu kata
// https://www.codewars.com/kata/55de9c184bb732a87f000055

// function reverse(arr)
// that will take in any array and reverse it. 

// Sounds simple doesn't it? 

// NOTE: Array should be reversed in place!

function reverse(arr) {
    let index = 0
    while(index < arr.length/2){
      temp = arr[index]
      temp2= arr[arr.length-1-index]
      arr[arr.length-1-index] = temp
      arr[index] = temp2
      index+=1
    }
    return arr
 }