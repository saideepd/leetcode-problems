/**
 * 852. Peak Index In A Mountain Array
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * Category: Array, Binary Search
 * 
 * @param {number[]} arr
 * @returns {number}
 */

var peakIndexInMountainArray = function (arr) {
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
}

console.log('Peak Index in a Mountain Array');
console.log(`[0,1,0] = ${peakIndexInMountainArray([0,1,0])}`);
console.log(`[0,2,1,0] = ${peakIndexInMountainArray([0,2,1,0])}`);
console.log(`[0,10,5,2] = ${peakIndexInMountainArray([0,10,5,2])}`);
console.log(`[0,10,15,23,19,13,8,5,2] = ${peakIndexInMountainArray([0,10,15,23,19,13,8,5,2])}`);

/**
 * Output:
 * 
 * Peak Index in a Mountain Array
 * [0,1,0] = 1
 * [0,2,1,0] = 1
 * [0,10,5,2] = 1
 * [0,10,15,23,19,13,8,5,2] = 3
 */