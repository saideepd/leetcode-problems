/**
 * 1920. Build Array from Permutation
 * https://leetcode.com/problems/build-array-from-permutation/
 * 
 * @param {number[]} nums
 * @returns {number[]}
 */

var buildArray = function (nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }
    return ans;
}

console.log('Build Array from Permutation');
console.log(`[0,2,1,5,3,4]: ${buildArray([0, 2, 1, 5, 3, 4])}`);
console.log(`[5,0,1,2,3,4]: ${buildArray([5, 0, 1, 2, 3, 4])}`);

/**
 * Output:
 *
 * Build Array from Permutation
 * [0,2,1,5,3,4]: 0,1,2,4,5,3
 * [5,0,1,2,3,4]: 4,5,0,1,2,3
 */