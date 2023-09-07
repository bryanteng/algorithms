// difficulty: medium
// https://leetcode.com/problems/robot-bounded-in-circle/
// On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that:
//
// The robot can receive one of three instructions:
//
// "G": go straight 1 unit.
// "L": turn 90 degrees to the left (i.e., anti-clockwise direction).
// "R": turn 90 degrees to the right (i.e., clockwise direction).
// The robot performs the instructions given in order, and repeats them forever.
//
// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.
// Example 1:
//
// Input: instructions = "GGLLGG"
// Output: true
// Explanation: The robot is initially at (0, 0) facing the north direction.
// "G": move one step. Position: (0, 1). Direction: North.
// "G": move one step. Position: (0, 2). Direction: North.
// "L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: West.
// "L": turn 90 degrees anti-clockwise. Position: (0, 2). Direction: South.
// "G": move one step. Position: (0, 1). Direction: South.
// "G": move one step. Position: (0, 0). Direction: South.
// Repeating the instructions, the robot goes into the cycle: (0, 0) --> (0, 1) --> (0, 2) --> (0, 1) --> (0, 0).
// Based on that, we return true.
var isRobotBounded = function(instructions) {
    const direction = ["N", "E", "S", "W"]
    let dIndex = 0
    const loc = {x:0, y:0}
    const dMove = {
        "N": {x:0, y:1},
        "E": {x:1, y:0},
        "S": {x:0, y:-1},
        "W": {x:-1, y:0}
    }
    let ins = instructions.repeat(4)
    for(let i = 0; i < ins.length; i++){
        if(ins[i]=== "L"){
            dIndex--
            if(dIndex < 0) dIndex = 3
        } else if(ins[i] === "R"){
            dIndex++
            if(dIndex > 3) dIndex = 0
        } else if(ins[i] === "G"){
            const face = direction[dIndex]
            loc.x += dMove[face].x
            loc.y += dMove[face].y
        }

    }

    return loc.x === 0 && loc.y === 0
};
