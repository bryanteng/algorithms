// 4 kyu kata
// https://www.codewars.com/kata/human-readable-duration-format/train/javascript
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"

function formatDuration (seconds) {
    if(seconds == 0) return "now"
    let year = 31536000
    let day = 86400
    let hour = 3600
    let minute = 60
    let date = []
    if( seconds/year >=1){
      years = seconds/year |0
      date.push(`${years} ${years > 1 ? "years":"year"}`)
      seconds = seconds%year
    }
    if(seconds/day >= 1){
      days = seconds/day |0
      date.push(`${days} ${days > 1 ? "days":"day"}`)
      seconds = seconds%day
    }
    if(seconds/hour >= 1){
      hours = seconds/hour |0
      date.push(`${hours} ${hours > 1 ? "hours":"hour"}`)
      seconds = seconds%hour
    }
    if(seconds/minute >= 1){
      minutes = seconds/minute |0
      date.push(`${minutes} ${minutes > 1 ? "minutes":"minute"}`)
      seconds = seconds%minute
    }
    if(seconds > 0){
      date.push(`${seconds} ${seconds > 1 ? "seconds":"second"}`)
    }
    return date.length > 1 ? joiner(date) : date[0]
  }
  
  function joiner(array){
    let ret = ''
    let index = 0 
    while(index < array.length-1){
      index == array.length - 2 ? ret += `${array[index]} and ${array[index+1]}` : ret+=`${array[index]}, `
      index+=1
    }
    return ret
  }