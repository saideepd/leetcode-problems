/**
 * 929. Add to Array-Form of Integer
 * https://leetcode.com/problems/add-to-array-form-of-integer/
 * Category: Array, Math
 * 
 * @param {number[]} num
 * @param {number} k
 * @returns {number[]}
 */

var addToArrayForm = function (num, k) {
    // let n = num.length - 1, sum = [];

    // while (n >= 0 || k > 0) {
    //     if (n >= 0) {
    //         sum.push((num[n] + k) % 10);
    //         k = Math.trunc((num[n] + k) / 10);
    //         n--;
    //     }
    //     else {
    //         sum.push(k % 10);
    //         k = Math.trunc(k / 10);
    //     }
    // }
    
    // return sum.reverse();

    // Simple Approach
    let sum = BigInt(num.join('')) + BigInt(k);
    return sum.toString().split('');
}

console.log('Add to Array-Form of Integer');
console.log(`[1,2,0,0], 34 = ${addToArrayForm([1,2,0,0], 34)}`);
console.log(`[2,7,4], 181 = ${addToArrayForm([2,7,4], 181)}`);
console.log(`[2,1,5], 806 = ${addToArrayForm([2,1,5], 806)}`);
console.log(`[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516 = ${addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516)}`);

/**
 * Output:
 * 
 * Add to Array-Form of Integer
 * [1,2,0,0], 34 = 1,2,3,4
 * [2,7,4], 181 = 4,5,5
 * [2,1,5], 806 = 1,0,2,1
 * [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516 = 1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9
 */