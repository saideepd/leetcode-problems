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

    let start = search(nums, target, true);
    let end = search(nums, target, false);

    ans[0] = start;
    ans[1] = end;

    return ans;
}

const search = (nums, target, findStartIndex) => {
    let start = 0, end = nums.length - 1, ans = -1;

    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);

        if (target < nums[mid])
            end = mid - 1;
        else if (target > nums[mid])
            start = mid + 1;
        else {
            ans = mid;
            if (findStartIndex)
                end = mid - 1;
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