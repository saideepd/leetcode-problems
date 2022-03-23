/**
 * 66. Plus One
 * https://leetcode.com/problems/plus-one/
 * Category: Array, Math
 * 
 * @param {number[]} digits
 * @returns {number[]}
 */

var plusOne = function(digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (carry === 0)
            break;
        let sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = Math.floor(sum / 10);
    }
    if (carry)
        digits = [1].concat(digits);

    return digits;
}

console.log('Plus One');
console.log(`[1,2,3]: ${plusOne([1,2,3])}`);
console.log(`[1,2,4]: ${plusOne([1,2,4])}`);
console.log(`[4,3,2,1]: ${plusOne([4,3,2,1])}`);
console.log(`[4,3,2,9]: ${plusOne([4,3,2,9])}`);
console.log(`[9]: ${plusOne([9])}`);
console.log(`[1, 9]: ${plusOne([1, 9])}`);

/**
 * Output:
 * 
 * [1,2,3]: 1,2,4
 * [1,2,4]: 1,2,5
 * [4,3,2,1]: 4,3,2,2
 * [4,3,2,9]: 4,3,3,0
 * [9]: 1,0
 * [1, 9]: 2,0
 */