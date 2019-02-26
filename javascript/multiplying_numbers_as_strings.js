// 4kyu kata
// https://www.codewars.com/kata/multiplying-numbers-as-strings/train/javascript

// Multiply two strings to give a non-truncated version of the answer

function multiply(a, b){
    if (a == '0' || b =='0') return '0' 
    a = a.split("").reverse().join("")
    b = b.split("").reverse().join("")
    let total,index = 0
    let totes=[]
    let temp = ''
    while (index < a.length){
      let index2=0   
        if(a[index] == "0"){
          index+=1
          continue
        }
        while(index2 < b.length){
          if(b[index2]== "0"){
            index2+=1
            continue
          } 
          let temp = `${b[index2]*a[index]}`
            temp += "0".repeat(index2+index)
            totes.push(temp)
            index2+=1
        }
      index+=1
    }
    return totes.reduce(((a,b) => stringSum(a,b)),"0") 
  }
  
  function stringSum(a,b){
    a = a.split("").reverse()
    b = b.split("").reverse()
    let total = []
    let shortest = a.length < b.length ? a : b
    let longest = a.length > b.length ? a : b
    while (shortest.length < longest.length) shortest.push("0")
    let index = 0
    while (index < a.length){
      let temp = ~~a[index] + ~~b[index] + ~~total[index]
      if (temp >= 10){
        total[index] = temp%10
        total[index+1] = 1
      }else total[index] = temp
      index+=1
    }
    return total.reverse().join("")
  }