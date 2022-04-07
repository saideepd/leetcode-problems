/**
 * 350. Intersection of Two Arrays 2
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * Category: Array, Hash Table, Two Pointers, Binary Search, Sorting
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */

var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let result = [];
    let i = 0, j = 0;

    // Use 2 pointers i & j to track nums1 & nums2 array
    while (i < nums1.length && j < nums2.length) {
        // If elements in both nums1 & nums2 at given position match
        // then push the nums1 element in result array
        // and increment both the pointers
        if (nums1[i] == nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        }
        // If element of nums1 array is less than element of nums2 array
        // increment pointer of nums1 i.e. i
        else if (nums1[i] < nums2[j])
            i++;
        // If element of nums1 array is greater than element of nums2 array
        // increment pointer of nums2 i.e. j
        else
            j++;
    }

    return result;
};

console.log('Intersection of Two Arrays 2');
console.log(`[1,2,2,1], [2,2] = [${intersect([1,2,2,1], [2,2])}]`);
console.log(`[4,9,5], [9,4,9,8,4] = [${intersect([4,9,5], [9,4,9,8,4])}]`);

/**
 * Output:
 * 
 * Intersection of Two Arrays 2
 * [1,2,2,1], [2,2] = [2,2]
 * [4,9,5], [9,4,9,8,4] = [4,9]
 */