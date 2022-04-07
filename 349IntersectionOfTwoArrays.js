/**
 * 349. Intersection of Two Arrays
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * Category: Array, Hash Table, Two Pointers, Binary Search, Sorting
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */

const intersection = function(nums1, nums2) {
    let intersection = new Set();

    // Sort the 1st array nums1 for performing binarySearch
    nums1.sort((a, b) => a - b);

    // Loop through the 2nd array nums2
    // and add them to intersection Set
    // by searching using Binary Search if the num is present in nums1 array
    for (let num of nums2) {
        if (binarySearch(nums1, num))
            intersection.add(num);
    }

    // Loop through the intersection Set & add them to result array
    let result = [];
    for (let num of intersection)
        result.push(num);

    return result;
};

// Regular Binary Search
const binarySearch = (nums, target) => {
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        let mid = Math.trunc(start + (end - start) / 2);

        if (target === nums[mid])
            return true;
        else if (target < nums[mid])
            end = mid - 1;
        else
            start = mid + 1;
    }
    return false;
};

console.log('Intersection of Two Arrays');
console.log(`[1, 2, 2, 1], [2, 2] = [${intersection([1, 2, 2, 1], [2, 2])}]`);
console.log(`[4, 9, 5], [9, 4, 9, 8, 4] = [${intersection([4, 9, 5], [9, 4, 9, 8, 4])}]`);
console.log(`[2, 1], [1, 1] = [${intersection([2, 1], [1, 1])}]`);

/**
 * Output:
 * 
 * Intersection of Two Arrays
 * [1, 2, 2, 1], [2, 2] = [2]
 * [4, 9, 5], [9, 4, 9, 8, 4] = [9,4]
 * [2, 1], [1, 1] = [1]
 */