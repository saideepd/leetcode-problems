/**
 * 1380. Lucky Numbers in a Matrix
 * https://leetcode.com/problems/lucky-numbers-in-a-matrix/
 * Category: Array, Matrix
 * 
 * @param {number[][]} matrix
 * @returns {number[]}
 */

var luckyNumbers = function (matrix) {
    // Loop through each array row
    for (let i = 0; i < matrix.length; i++) {
        // Store the min of each row & index of the min value
        let min = Math.min(...matrix[i]),
            index = matrix[i].indexOf(min);

        // Check if each array row in the matrix is less than equal to current minimum
        // if found reutn the min value
        if (matrix.every(arr => arr[index] <= min))
            return [min];
    }

    return [];
}

console.log('Lucky Numbers in a Matrix');
console.log(`[[3,7,8],[9,11,13],[15,16,17]] = [${luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]])}]`);
console.log(`[[1,10,4,2],[9,3,8,7],[15,16,17,12]] = [${luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]])}]`);
console.log(`[[7,8],[1,2]] = [${luckyNumbers([[7, 8], [1, 2]])}]`);
console.log(`[[3,6],[7,1],[5,2],[4,8]] = [${luckyNumbers([[3, 6], [7, 1], [5, 2], [4, 8]])}]`);

/**
 * Output:
 * 
 * Lucky Numbers in a Matrix
 * [[3,7,8],[9,11,13],[15,16,17]] = [15]
 * [[1,10,4,2],[9,3,8,7],[15,16,17,12]] = [12]
 * [[7,8],[1,2]] = [7]
 * [[3,6],[7,1],[5,2],[4,8]] = []
 */