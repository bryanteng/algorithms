// recursively reverse a string

function recursiveReverse(s){
    return s.length == 0 ?  "" : s[s.length-1]+recursiveReverse(s.substr(0,s.length-1))
}