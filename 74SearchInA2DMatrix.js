/**
 * 74. Search a 2D Matrix
 * https://leetcode.com/problems/search-a-2d-matrix/
 * Category: Array, Binary Search, Matrix
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */

var searchMatrix = function (matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;

    // Make sure we don't run out of Array bounds
    while (row < matrix.length && col >= 0) {
        // If current element matches target, return true
        if (matrix[row][col] === target)
            return true;
        // If Current element is less than target
        // Then increment the row
        // as all the elements in that row will be less than target
        else if (matrix[row][col] < target)
            row++;
        // If current element is greater than target
        // then decrement the column
        // as all the elements below in the column will be greater than target
        else
            col--;
    }
    // Return false if target not found
    return false;
}

console.log('Search a 2D Array');
console.log(`[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3 = ${searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)}`);
console.log(`[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13 = ${searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)}`);
console.log(`[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 99 = ${searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 99)}`);
console.log(`[[1, 3]], 3 = ${searchMatrix([[1, 3]], 3)}`);

/**
 * Output:
 * 
 * Search a 2D Array
 * [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3 = true
 * [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13 = false
 * [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 99 = false
 * [[1, 3]], 3 = true
 */