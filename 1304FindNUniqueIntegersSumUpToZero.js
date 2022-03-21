/**
 * 1304. Find N Unique Integers Sum up to Zero
 * https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
 * Category: Array, Math
 * 
 * @param {number} n
 * @returns {number[]}
 */

var sumZero = function (n) {
    let result = [];
    let i = 0, j = n - 1, value = 1;

    // Insert +ve & -ve values starting from 1
    // Start from left & right and increment & decrement each respectively
    while (i < j) {
        result.push(value, -value);
        i++;
        j--;
        value++;
    }

    // If n is odd, push an extra 0
    if (n % 2 !== 0) {
        result.push(0)
    }

    return result;
}

console.log('Find N Unique Integers Sum up to Zero');
console.log(`5 = ${sumZero(5)}`);
console.log(`3 = ${sumZero(3)}`);
console.log(`4 = ${sumZero(4)}`);
console.log(`1 = ${sumZero(1)}`);

/**
 * Output:
 * 
 * Find N Unique Integers Sum up to Zero
 * 5 = 1,-1,2,-2,0
 * 3 = 1,-1,0
 * 4 = 1,-1,2,-2
 * 1 = 0
 */