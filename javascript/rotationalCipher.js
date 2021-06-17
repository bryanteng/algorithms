// fb coding prep 
function rotationalCipher(input, rotationFactor) {
  // Write your code here
    let lower = "abcdefghijklmnopqrstuvwxyz" //97 - 122
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //65 - 90
    let nums = "0123456789" //48-57
    let retString =""
    let letterIncrease = rotationFactor % 26
    let numIncrease = rotationFactor % 10
    for(let i = 0; i < input.length; i++){
      let temp = input.charCodeAt(i)
      if(temp >= 97 && temp <= 122){
        temp += letterIncrease
        if(temp > 122) temp = 97 + (temp-123)
        retString += String.fromCharCode(temp)
      }
      else if(temp >= 65 && temp <= 90){
        temp += letterIncrease
        if(temp > 90) temp = 65 + (temp-91)
        retString += String.fromCharCode(temp)
      }
      else if(temp >= 48 && temp <= 57){
        temp = (+input[i] + numIncrease)%10
        retString += temp
      }
      else retString += input[i]
    }
  return retString
}
