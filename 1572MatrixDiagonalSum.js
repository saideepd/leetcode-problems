/**
 * 1572. Matrix Diagonal Sum
 * https://leetcode.com/problems/matrix-diagonal-sum/
 * Category: Array, Matrix
 * 
 * @param {number[][]} mat
 * @returns {number}
 */

var diagonalSum = function (mat) {
    let n = mat.length, sum = 0;

    // Sum the primary diagonal if i == j
    // Sum the secondary diagonal by subtracting length - 1 - current iterator
    for (let i = 0; i < n; i++) {
        sum += mat[i][i] + mat[i][n - 1 - i];
    }

    // For matrix of odd length, subtract the center item of matrix
    if (n % 2 != 0)
        sum -= mat[Math.trunc(n / 2)][Math.trunc(n / 2)];
    // Math.trunc removes the fractional part & returns only integer part of result

    return sum;
}

console.log('Matrix Diagonal Sum');
console.log(`[[1,2,3],[4,5,6],[7,8,9]] = ${diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])}`);
console.log(`[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]] = ${diagonalSum([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]])}`);
console.log(`[[5]] = ${diagonalSum([[5]])}`);

/**
 * Output:
 *
 * Matrix Diagonal Sum
 * [[1,2,3],[4,5,6],[7,8,9]] = 25
 * [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]] = 8
 * [[5]] = 5
 */