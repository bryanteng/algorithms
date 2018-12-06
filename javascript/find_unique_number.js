// 6 kyu kata
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// https://www.codewars.com/kata/find-the-unique-number-1/train/javascript

function findUniq(arr) {
  let num_hash={}
  for (let i = 0 ; i< arr.length; i++){
    if (num_hash[arr[i]]){
        num_hash[arr[i]] +=1
    }else{
        num_hash[arr[i]] =1
    }
  }
  let retVal = Object.entries(num_hash)[0][1] == 1 ? Number(Object.entries(num_hash)[0][0]) : Number(Object.entries(num_hash)[1][0])
  return retVal
}

console.log(findUniq([ 0, 1, 0 ]) === 1)
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]) === 10);
