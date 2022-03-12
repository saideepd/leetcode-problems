/**
 * 1929. Concatenation of Array
 * https://leetcode.com/problems/concatenation-of-array/
 * 
 * @params {number[]} nums
 * @returns {number[]}
 */

var getConcatenation = function (nums) {
    // Array Concat approach
    return nums.concat(nums);

    // Iterative approach
    // let ans = nums, n = nums.length;
    // for (let i = 0; i < n; i++) {
    //     ans[i + n] = nums[i];
    // }
    // return ans;
}

console.log('Concatenation of Array');
console.log(`[1,2,1]: ${getConcatenation([1,2,1])}`);
console.log(`[1,3,2,1]: ${getConcatenation([1,3,2,1])}`);

/**
 * Output:
 * 
 * Concatenation of Array
 * [1,2,1]: 1,2,1,1,2,1
 * [1,3,2,1]: 1,3,2,1,1,3,2,1
 */