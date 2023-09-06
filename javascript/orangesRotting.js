// difficulty: medium
// https://leetcode.com/problems/rotting-oranges/
//
// You are given an m x n grid where each cell can have one of three values:
//
// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
//
// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
//
// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

var orangesRotting = function(grid) {
    const fresh = new Set()
    const rotten = new Set()

    for(let  i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === 1) fresh.add(`${i},${j}`)
            else if(grid[i][j] === 2) rotten.add(`${i},${j}`)
        }
    }
    function getNeighbors(key){
        const [x,y] = key.split(",")

        return [
            `${x},${+y + 1}`,
            `${+x+1},${y}`,
            `${+x-1},${y}`,
            `${x},${+y - 1}`
        ]
    }
    let minutes =  0
    while( rotten.size > 0 ){
        const neighbors = Array.from(rotten.keys()).flatMap(key => getNeighbors(key))
        rotten.clear()
        if(fresh.size === 0) return minutes
        const currSize = fresh.size

        for( neighbor of neighbors ){
            if(fresh.has(neighbor)){
                fresh.delete(neighbor)
                rotten.add(neighbor)
            }
        }
        if(fresh.size > currSize) return -1
        minutes++

    }

    return fresh.size > 0 ? -1 : minutes
};
