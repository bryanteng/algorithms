// fb coding prep

// One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.
// For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.
// Given a string and a rotation factor, return an encrypted string.

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
