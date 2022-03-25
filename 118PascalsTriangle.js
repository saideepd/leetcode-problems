/**
 * 118. Pascal's Triangle
 * https://leetcode.com/problems/pascals-triangle/
 * Category: Array, Dynamic Programming
 * 
 * @param {number} numRows
 * @returns {number[][]}
 */

var generate = function (numRows) {
    let pascal = [];
    for (let i = 0; i < numRows; i++) {
        // Add an Array after each iteration
        pascal[i] = [];
        // Set the first element to 1
        pascal[i][0] = 1;
        // Sum of previous & previous right
        for (let j = 1; j < i; j++) {
            pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
        }
        // Set the last element to 1
        pascal[i][i] = 1;
    }

    // Print the array in Pascal's Triangle format
    console.log();
    for (let i = 0; i < pascal.length; i++) {
        process.stdout.write(`${" ".repeat(pascal.length - i)}[${pascal[i].join(',')}]${" ".repeat(pascal.length - i)}\n`);
    }
    console.log();

    return pascal;
}

console.log(`Pascal's Triangle`);
console.log(`5 = ${generate(5)}`);
console.log(`3 = ${generate(3)}`);
console.log(`1 = ${generate(1)}`);

/**
 * Output:
 *
 * Pascal's Triangle
 *
 *      [1]
 *     [1,1]
 *    [1,2,1]
 *   [1,3,3,1]
 *  [1,4,6,4,1]
 *
 * 5 = 1,1,1,1,2,1,1,3,3,1,1,4,6,4,1
 *
 *    [1]
 *   [1,1]
 *  [1,2,1]
 *
 * 3 = 1,1,1,1,2,1
 *
 *  [1]
 *
 * 1 = 1
 *  */