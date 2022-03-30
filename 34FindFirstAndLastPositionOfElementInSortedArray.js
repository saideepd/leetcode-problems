/**
 * 34. Find First and Last Position of Element in Sorted Array
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * Category: Array, Binary Search
 * 
 * @param {number[]} nums
 * @param {number} Target
 * @returns {number[]}
 */

var searchRange = function (nums, target) {
    let ans = [-1, -1];

    // Find first & last index value of target
    // And set the ans array
    ans[0] = search(nums, target, true);
    // Try finding last index only if start is not -1 which implies the target does not exist in array
    if (ans[0] != -1)
        ans[1] = search(nums, target, false);

    return ans;
}

const search = (nums, target, findStartIndex) => {
    let start = 0, end = nums.length - 1, ans = -1;

    while (start <= end) {
        // Calculate mid value
        let mid = parseInt(start + (end - start) / 2);

        // If target is less than mid element, update end pointer
        if (target < nums[mid])
            end = mid - 1;
        // If target is greater than mid element, update start pointer
        else if (target > nums[mid])
            start = mid + 1;
        // If mid element matches target value, set the ans to mid value
        else {
            ans = mid;
            // If we want to find the start index, update the end pointer
            if (findStartIndex)
                end = mid - 1;
            // If we want to find the end index, update the start pointer
            else
                start = mid + 1;
        }
    }
    return ans;
}

console.log('Find First and Last Position of Element in Sorted Array');
console.log(`[5, 7, 7, 8, 8, 10], 8 = [${searchRange([5, 7, 7, 8, 8, 10], 8)}]`);
console.log(`[5, 7, 7, 8, 8, 10], 6 = [${searchRange([5, 7, 7, 8, 8, 10], 6)}]`);
console.log(`[], 0 = [${searchRange([], 0)}]`);
console.log(`[5, 7, 7, 7, 7, 8, 8, 10], 7 = [${searchRange([5, 7, 7, 7, 7, 8, 8, 10], 7)}]`);

/**
 * Output:
 * 
 * Find First and Last Position of Element in Sorted Array
 * [5, 7, 7, 8, 8, 10], 8 = [3,4]
 * [5, 7, 7, 8, 8, 10], 6 = [-1,-1]
 * [], 0 = [-1,-1]
 * [5, 7, 7, 7, 7, 8, 8, 10], 7 = [1,4]
 */