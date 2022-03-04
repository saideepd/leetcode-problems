/**
 * 2022. Convert 1D Array to 2D Array
 * https://leetcode.com/problems/convert-1d-array-into-2d-array/
 * Category: Array
 * 
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @returns {number[][]}
 */

var construct2DArray = function(original, m, n) {
    if (m * n !== original.length)
        return [];
    let array = [];
    for (let row = 0; row < m; row++) {
        array.push(original.slice(n*row, n*(row+1)));
    }
    return array;
}

console.log('Convert 1D Array to 2D Array');
console.log(`[1,2,3,4],2,2: [${construct2DArray([1,2,3,4],2,2)}]`);
console.log(`[1,2,3],1,3: [${construct2DArray([1,2,3],1,3)}]`);
console.log(`[1,2],1,1: [${construct2DArray([1,2],1,1)}]`);

/**
 * Output:
 * 
 * Convert 1D Array to 2D Array
 * [1,2,3,4],2,2: [1,2,3,4]
 * [1,2,3],1,3: [1,2,3]
 * [1,2],1,1: []
 */