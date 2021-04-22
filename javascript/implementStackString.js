//codility code challenge for in rhythm
//difficulty: probably easy
function implementStackString(S) {
    let commands = S.split(" ")
    let stack = []

    for(let i = 0; i < commands.length; i++){
        if( commands[i] == "+" ){
            if( stack.length < 2) return -1
            let first = stack.pop()
            let second = stack.pop()
            let sum = first + second
            if( sum > 1048575 ) return -1
            stack.push( sum )
        }
        else if( commands[i] == "-" ){
            if( stack.length < 2 ) return -1
            let first = stack.pop()
            let second = stack.pop()
            let sum = first - second
            if( sum < 0 ) return -1
            stack.push( sum )
        }
        else if( commands[i] == "POP" ){
            if( stack.length == 0 ) return -1
            stack.pop()
        }
        else if( commands[i] == "DUP" ){
            if( stack.length == 0 ) return -1
            stack.push( stack[ stack.length - 1 ])

        }
        else {
            let num = parseInt(commands[i])
            if( num < 0 || num > 1048575 ) return -1
            stack.push( num )
        }
    }
    if( stack.length == 0) return -1

    return stack.pop()
}
