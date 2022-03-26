/**
 * 69. Square Root (x)
 * https://leetcode.com/problems/sqrtx/
 * Category: Math, Binary Search
 * 
 * The main problem is to solve the problem 
 * without using the built-in functions
 * 
 * @param {number} x
 * @returns {number}
 */

var mySqrt = function (x) {
    // Store half of given number
    let sqrt = x / 2;
    let temp = 0;

    // Iterate till sqrt is different than temp
    while (sqrt != temp) {
        temp = sqrt;

        sqrt = ((x / temp) + temp) / 2;
    }

    return Math.trunc(sqrt);
}

console.log('Square Root (x)');
console.log(`4 = ${mySqrt(4)}`);
console.log(`3 = ${mySqrt(3)}`);
console.log(`8 = ${mySqrt(8)}`);

/**
 * Output:
 * 
 * Square Root (x)
 * 4 = 2
 * 3 = 1
 * 8 = 2
 */