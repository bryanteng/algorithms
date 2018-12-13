function moveTen(s){
  s = s.split("")
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  return s.map( letter => {
    temp = alphabet.indexOf(letter)+10
    return temp >= 26 ? alphabet[temp-26] : alphabet[temp]
  }).join("")
}
