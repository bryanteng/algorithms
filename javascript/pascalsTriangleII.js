// difficulty:easy
// https://leetcode.com/problems/pascals-triangle-ii/
//
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
//
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

var getRow = function(rowIndex) {
    if(rowIndex == 0) return [1]
    if(rowIndex == 1) return [1,1]
    let index = 1
    let currRow = [1,1]
    while(index < rowIndex){
        let temp = [1]
        for(let i = 1; i <= currRow.length - 1; i++){
            temp.push(currRow[i-1] + currRow[i])
        }
        temp.push(1)
        currRow = temp
        index++
    }
    return currRow
};
