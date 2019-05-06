// 6 kyu kata
// https://www.codewars.com/kata/next-version/train/javascript

// You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.

// Exercice
// Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.

// For example:

// nextVersion("1.2.3") === "1.2.4";
// nextVersion("0.9.9") === "1.0.0.";
// nextVersion("1") === "2";
// nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9";
// nextVersion("9.9") === "10.0";

function nextVersion(version){
    let temp = version.split(".").reverse()
    if(temp.length ==1) return `${+temp[0]+1}`
    return temp.map((num,index) => {
        if(index == 0){
            if(+num == 9 ){
            temp[index+1] = `${+temp[index+1] +1}`
            return "0"
            }else return `${+num+1}`
        }else if(num == 10 && index != temp.length-1){
            temp[index+1] = `${+temp[index+1] +1}`
            return "0"
        }else return num
        }).reverse().join(".")
    }  