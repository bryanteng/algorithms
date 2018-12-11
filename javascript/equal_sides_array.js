// 6 kyu kata
// https://www.codewars.com/kata/equal-sides-of-an-array/train/javascript
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr)
{
  let left = 0
  let right = 0
  let index = 0
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  while(index < arr.length){
    if (index == 0){
        left = 0
        right = arr.reduce(reducer)
        if (left == right) return index
    }else if(index == arr.length-1){
        right = 0
        left = arr.reduce(reducer)
        if (left == right) return index
    }else{
        left = arr.slice(0,index).reduce(reducer)
		    right = arr.slice(index+1).reduce(reducer)
        if (left == right) return index
    }
    index+=1
  }
  return -1
}
