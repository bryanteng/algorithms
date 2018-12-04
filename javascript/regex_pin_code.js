// 7 kyu kata
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
  if (pin.length !== 4 && pin.length !== 6){
    return false
  }else{
    let tpin = pin.match(/[0-9]/g)
    if(tpin.length !== 4 && tpin.length !== 6){
      return false
    }
  }
  return true
}

console.log( validatePIN("1234") === true)
console.log( validatePIN("12345") === false)
console.log(validatePIN("a234") === false)
