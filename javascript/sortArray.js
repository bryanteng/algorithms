// 6 kyu kata
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

function sortArray(array) {
    let index = 0
    let sorted = array.filter((x,i)=>x%2==1).sort((a,b)=> a>b)
    return array.map((x,i) => x%2==1 ? sorted[index++] : x)
  }