/**
 * 867. Transpose Matrix
 * https://leetcode.com/problems/transpose-matrix/
 * Category: Array, Matrix, Simulation
 * 
 * @param {number[][]} matrix
 * @returns {number[][]}
 */

var transpose = function (matrix) {
    let transposedMatrix = [];

    for (let i = 0; i < matrix[0].length; i++) {
        let temp = [];
        for (let j = 0; j < matrix.length; j++) {
            temp.push(matrix[j][i]);
        }
        transposedMatrix.push(temp);
    }

    return transposedMatrix;
}

console.log('Transpose Matrix');

console.log(`[[1,2,3],[4,5,6],[7,8,9]] = ${transpose([[1,2,3],[4,5,6],[7,8,9]])}`);
console.log(`[[1,2,3],[4,5,6]] = ${transpose([[1,2,3],[4,5,6]])}`);

/**
 * Output:
 * 
 * Transpose Matrix
 * [[1,2,3],[4,5,6],[7,8,9]] = 1,4,7,2,5,8,3,6,9
 * [[1,2,3],[4,5,6]] = 1,4,2,5,3,6
 */