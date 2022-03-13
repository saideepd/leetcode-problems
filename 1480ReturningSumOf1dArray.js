/**
 * 1480. Returning Sum of 1d Array
 * https://leetcode.com/problems/running-sum-of-1d-array/
 * Category: Array, Prefix Sum
 * 
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
    let ans = [], sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        ans[i] = sum;
    }
    return ans;
}

console.log('Returning Sum of 1d Array');
console.log(`[1,2,3,4]: ${runningSum([1,2,3,4])}`);
console.log(`[1,1,1,1,1]: ${runningSum([1,1,1,1,1])}`);

/**
 * Output:
 * 
 * Returning Sum of 1d Array
 * [1,2,3,4]: 1,3,6,10
 * [1,1,1,1,1]: 1,2,3,4,5
 */