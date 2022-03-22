/**
 * 566. Reshape the Matrix
 * https://leetcode.com/problems/reshape-the-matrix/
 * Category: Array, Matrix, Simulation
 * 
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @returns {number[][]}
 */

var matrixReshape = function (mat, r, c) {
    let m = mat.length, n = mat[0].length;
    let result = [];

    // Return mat if size of matrix can't be mapped
    if (r*c !== m*n)
        return mat;
    
    // Return mat if rows & cols of matrix matches exactly
    if (m === r && n === c)
        return mat;

    // Pointers to track original matrix
    let pR = 0, pC = 0;

    for (let row = 0; row < r; row++) {
        
        // Add a row to store col values
        let targetRow = [];
        result.push(targetRow);

        for (let col = 0; col < c; col++) {
            targetRow.push(mat[pR][pC]);

            // Increment col pointer to check next col value
            pC++;

            // If next col is undefined, then the array will overflow
            // So move to the next row & reset col
            if (mat[pR][pC] === undefined) {
                pR++;
                pC = 0;
            }
        }
    }

    return result;
}

console.log('Reshape the Matrix');
console.log(`[[1,2],[3,4]], 1, 4  =  ${matrixReshape([[1,2],[3,4]], 1, 4)}`);
console.log(`[[1,2],[3,4]], 2, 4  =  ${matrixReshape([[1,2],[3,4]], 2, 4)}`);

/**
 * Output:
 * 
 * Reshape the Matrix
 * [[1,2],[3,4]], 1, 4  =  1,2,3,4
 * [[1,2],[3,4]], 2, 4  =  1,2,3,4
 */