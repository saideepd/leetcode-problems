/**
 * 136. Single Number
 * https://leetcode.com/problems/single-number/
 * Category: Array, Bit Manipulation
 * 
 * @params {number[]} nums
 * @returns {number}
 */

var singleNumber = function (nums) {
    // // Array approach
    // let hash = {};
    // for(let item of nums) {
    //     hash[item] = (hash[item] || 0) + 1;
    // }
    // for(let hashItem in hash) {
    //     if(hash[hashItem] === 1)
    //     return hashItem;
    // }

    // Bit Manipulation approach
    let result = 0;
    for (let item = 0; item < nums.length; item++) {
        result ^= nums[item];
    }
    return result;
}

console.log('Single Number');
console.log(`[2,2,1]: ${singleNumber([2, 2, 1])}`);
console.log(`[1]: ${singleNumber([1])}`);
console.log(`[4,1,2,1,2]: ${singleNumber([4, 1, 2, 1, 2])}`);

/**
 * Output:
 *
 * Single Number
 * [2,2,1]: 1
 * [1]: 1
 * [4,1,2,1,2]: 4
 */