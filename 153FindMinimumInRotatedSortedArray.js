/**
 * 153. Find Minimum in Rotated Sorted Array
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * Category: Array, Binary Search
 * 
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function(nums) {
    let pivot = findPivotWithDuplicates(nums);

    // Pivot is our point in array which points to the largetst value from array
    // Pivot + 1 will be the count of rotations in array
    // as all elements prior to pivot have been placed there after rotations
    return nums[pivot + 1];
};

const findPivotWithDuplicates = (nums) => {
    let start = 0, end = nums.length - 1;

    while (start <= end) {
        let mid = Math.trunc(start + (end - start) / 2);

        // 4 cases

        // Check if mid element is greater than next element of mid
        // meaning that the next part is ascending sorted & all elements < mid
        // Also, make sure that we don't go out of array index range
        // by checking if mid < end index
        if (mid < end && nums[mid] > nums[mid + 1])
            return mid;
        
        // If mid element is less than previous element of mid
        // meaning that we're currently in ascending part of array
        // and the previous element is the peak / max of array
        // Also, make sure that we don't go out of array index
        // by checking if mid > start
        if (mid > start && nums[mid] < nums[mid - 1])
            return mid - 1;

        // If mid element is less than or equal to start element
        // it means that all the elements after mid are less than start
        // So, update the end pointer to be previous of mid & ignore elements after mid
        if (nums[mid] <= nums[start])
            end = mid - 1;
        // If mid element is greater than start element
        // it means that there could be some elements which are greater than mid towards its right
        // So, update the start pointer to be next of mid elememt & ignore elements before mid
        else
            start = mid + 1;
    }

    return -1;
}

console.log('Find Minimum in Rotated Sorted Array');
console.log(`[3,4,5,1,2] = ${findMin([3,4,5,1,2])}`);
console.log(`[4,5,6,7,0,1,2] = ${findMin([4,5,6,7,0,1,2])}`);
console.log(`[11,13,15,17] = ${findMin([11,13,15,17])}`);

/**
 * Output:
 * 
 * Find Minimum in Rotated Sorted Array
 * [3,4,5,1,2] = 1
 * [4,5,6,7,0,1,2] = 0
 * [11,13,15,17] = 11
 */