/**
 * 1252. Cells with Odd Values in a Matrix
 * https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
 * Category: Array, Math, Simulation
 * 
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @returns {number}
 */

var oddCells = function (m, n, indices) {
    let matrix = [], count = 0;

    // Fill Array
    for (let i = 0; i < m; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = 0;
        }
    }

    for (const [row, col] of indices) {
        // Update Row
        for (let i = 0; i < n; i++) {
            matrix[row][i]++;
        }
        // Update Column
        for (let i = 0; i < m; i++) {
            matrix[i][col]++;
        }
    }

    matrix.forEach(arr => {
        arr.forEach(current => (current % 2 !== 0 ? count++ : null));
    });

    return count;
}

console.log('Cells with Odd Values in a Matrix');
console.log(`2, 3, [[0,1],[1,1]] = ${oddCells(2, 3, [[0, 1], [1, 1]])}`);
console.log(`2, 2, [[1,1],[0,0]] = ${oddCells(2, 2, [[1, 1], [0, 0]])}`);

/**
 * Output:
 * 
 * Cells with Odd Values in a Matrix
 * 2, 3, [[0,1],[1,1]] = 6
 * 2, 2, [[1,1],[0,0]] = 0
 */