/**
 * 1095. Find In Mountain Array
 * https://leetcode.com/problems/find-in-mountain-array/
 * Category: Array, Binary Search
 * 
 * @param {number} target
 * @param {number[]} mountainArr
 * @returns {number}
 */

var findInMountainArray = function (mountainArr, target) {
    // First find the Peak Index from Mountain Array
    let peak = peakIndexInMountainArray(mountainArr);

    // Then try applying Order Agnostic Binary Search Algorithm on 1st/left part of array
    let firstTry = orderAgnosticBinarySearchAlgorithm(mountainArr, target, 0, peak);
    // If the target element in found in 1st/left part of array, return the result index of target
    if (firstTry !== -1)
        return firstTry;
    // Else search for the target element in 2nd/right part of the array & return the result index of target
    return orderAgnosticBinarySearchAlgorithm(mountainArr, target, peak + 1, mountainArr.length - 1);
};

// Finding Peak Index in Mountain Array
const peakIndexInMountainArray = (arr) => {
    let start = 0, end = arr.length - 1;
    // Not having <= condition as we want to compare in 2 parts of array
    while (start < end) {
        // Calculate mid value
        let mid = Math.trunc(start + (end - start) / 2);

        // If mid element > mid+1 element
        // It means you're in decreasing part of array
        // This could be the possible answer, but look to the left side of array
        // This is why end != mid - 1 like regular binary search
        if (arr[mid] > arr[mid + 1])
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
};

// Finding target by applying Order Agnostic Binary Search Algorithm
// to search both sides of array (0 to peak & peak+1 to end)
const orderAgnosticBinarySearchAlgorithm = (arr, target, start, end) => {
    // Find whether the array is in Ascending or Descending Order
    let isAscending = arr[start] < arr[end];

    while (start < end) {
        // Calculate middle value
        let mid = Math.trunc(start + (end - start) / 2);

        // If target matches mid element, return mid element of array
        if (target == arr[mid])
            return mid;

        // Select the logic based on array sorting order
        if (isAscending) {
            // Update end value if target is less than calculated mid
            if (target < arr[mid])
                end = mid - 1;
            // Update start value if target is greater than calculated mid
            else
                start = mid + 1;
        }
        else {
            // Update end value if target is greater than calculated mid
            if (target > arr[mid])
                end = mid - 1;
            // Update start value if target is less than calculated mid
            else
                start = mid + 1;
        }
    }
    // Return -1 if target does not exist
    return -1;
};

console.log('Find In Mountain Array');
console.log(`[1, 2, 3, 4, 5, 3, 1], 3 = ${findInMountainArray([1, 2, 3, 4, 5, 3, 1], 3)}`);
console.log(`[28, 20, 16, 11, 9, 5, 2, 0, -3, -7], 11 = ${findInMountainArray([28, 20, 16, 11, 9, 5, 2, 0, -3, -7], 11)}`);
console.log(`[0, 1, 2, 4, 2, 1], 3 = ${findInMountainArray([0, 1, 2, 4, 2, 1], 3)}`);

/**
 * Output:
 * 
 * Find In Mountain Array
 * [1, 2, 3, 4, 5, 3, 1], 3 = 2
 * [28, 20, 16, 11, 9, 5, 2, 0, -3, -7], 11 = 3
 * [0, 1, 2, 4, 2, 1], 3 = -1
 */