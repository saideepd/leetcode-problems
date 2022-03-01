/**
 * 53. Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 * Category: Array, Divide and Conquer, Dynamic Programming, Sliding Window
 * 
 * Video: https://www.youtube.com/watch?v=86CQq3pKSUw
 */
var maxSubArray = function (nums) {
    // Sliding Window Apporach
    let maxCurrent = maxGlobal = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if (maxCurrent > maxGlobal)
            maxGlobal = maxCurrent;
    }
    return maxGlobal;
}

console.log('Maximum Subarray');
console.log(`[-2,1,-3,4,-1,2,1,-5,4]: ${maxSubArray([-2,1,-3,4,-1,2,1,-5,4])}`);
console.log(`[1]: ${maxSubArray([1])}`);
console.log(`[5,4,-1,7,8]: ${maxSubArray([5,4,-1,7,8])}`);

/**
 * Output:
 * 
 * Maximum Subarray
 * [-2,1,-3,4,-1,2,1,-5,4]: 6
 * [1]: 1
 * [5,4,-1,7,8]: 23
 */