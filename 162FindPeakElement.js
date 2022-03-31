/**
 * 162. Find Peak Element
 * https://leetcode.com/problems/find-peak-element/
 * Category: Array, Binary Search
 * 
 * @param {number[]} nums
 * @returns {number}
 */

var findPeakElement = function (nums) {
    let start = 0, end = nums.length - 1;

    // Not having <= condition as we want to compare in 2 parts of array
    while (start < end) {
        // Calculate mid value
        let mid = Math.trunc(start + (end - start) / 2);

        // If mid element > mid+1 element
        // It means you're in decreasing part of array
        // This could be the possible answer, but look to the left side of array
        // This is why end != mid - 1 like regular binary search
        if (nums[mid] > nums[mid + 1])
            end = mid;
        // If mid element < mid+1 element
        // It means you're in increasing part of array
        else
            start = mid + 1;
    }
    // In the end, start == end and pointing to the largest number because of the 2 checks above
    // start & end are always trying to find the largest number in above 2 checks
    // hence they are pointing to just one element, that is the max element because that is what the checks do
    // Elaborated : At every point of start & end, they have the best possible answer till that time
    // and if we're saying that only one items is remaining, hence because of above line that is the best possible answer
    return start;
}

console.log('Find Peak Element');
console.log(`[1, 2, 3, 1] = ${findPeakElement([1, 2, 3, 1])}`);
console.log(`[1, 2, 1, 3, 5, 6, 4] = ${findPeakElement([1, 2, 1, 3, 5, 6, 4])}`);

/**
 * Output:
 * 
 * Find Peak Element
 * [1, 2, 3, 1] = 2
 * [1, 2, 1, 3, 5, 6, 4] = 5
 */