/**
 * 1886. Determine whether Matrix can be obtained by Rotation
 * https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/
 * Category: Array, Matrix
 * 
 * @param {number[]} mat
 * @param {number[]} target
 * @returns {boolean}
 */

var findRotation = function (mat, target) {
    let width = mat[0].length;
    let height = mat.length;

    let noRotation = true, rotateRightOneTime = true, rotateRightTwoTimes = true, rotateRightThreeTimes = true;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            // Check if target matches without rotation
            if (mat[i][j] != target[i][j])
                noRotation = false;

            // Rotate mat to right 90 degrees one time
            if (mat[i][j] != target[j][width - 1 - i])
                rotateRightOneTime = false;

            // Rotate mat to right 180 degress two times
            if (mat[i][j] != target[height - 1 - i][width - 1 - j])
                rotateRightTwoTimes = false;

            // Rotate mat to right 270 degress three times
            if (mat[i][j] != target[height - 1 - j][i])
                rotateRightThreeTimes = false;

            // If none of the above conditions satisfy, return false
            if (!noRotation && !rotateRightOneTime && !rotateRightTwoTimes && !rotateRightThreeTimes)
                return false;
        }
    }

    return noRotation || rotateRightOneTime || rotateRightTwoTimes || rotateRightThreeTimes;
}

console.log('Determine whether Matrix can be obtained by Rotation');
console.log(`[[0,1],[1,0]], [[1,0],[0,1]] = ${findRotation([[0, 1], [1, 0]], [[1, 0], [0, 1]])}`);
console.log(`[[0,1],[1,1]], [[1,0],[0,1]] = ${findRotation([[0, 1], [1, 1]], [[1, 0], [0, 1]])}`);
console.log(`[[0,0,0],[0,1,0],[1,1,1]], [[1,1,1],[0,1,0],[0,0,0]] = ${findRotation([[0, 0, 0], [0, 1, 0], [1, 1, 1]], [[1, 1, 1], [0, 1, 0], [0, 0, 0]])}`);

/**
 * Output:
 * 
 * Determine whether Matrix can be obtained by Rotation
 * [[0,1],[1,0]], [[1,0],[0,1]] = true
 * [[0,1],[1,1]], [[1,0],[0,1]] = false
 * [[0,0,0],[0,1,0],[1,1,1]], [[1,1,1],[0,1,0],[0,0,0]] = true
 */