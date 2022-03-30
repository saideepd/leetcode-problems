/**
 * Find Position of an Element in a Sorted Array of Infinite Numbers
 * https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/
 * Category: Array, Binary Search
 * 
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

const findPositionOfElement = (arr, target) => {
    let start = 0, end = 1;

    while (target > arr[end]) {
        let tempStart = end + 1;
        end = end + (end - start + 1) * 2;
        start = tempStart;
    }

    return binarySearch(arr, target, start, end);
}

const binarySearch = (arr, target, start, end) => {
    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);

        if (target < arr[mid])
            end = mid - 1;
        else if (target > arr[mid])
            start = mid + 1;
        else
            return mid;
    }
    return -1;
}

console.log('Find Position of an Element in a Sorted Array of Infinite Numbers');
console.log(`[3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170], 10 = ${findPositionOfElement([3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170], 10)}`);
console.log(`[3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170, 210, 350, 502, 552, 600, 649, 720], 502 = ${findPositionOfElement([3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170, 210, 350, 502, 552, 600, 649, 720], 502)}`);

/**
 * Output:
 * 
 * Find Position of an Element in a Sorted Array of Infinite Numbers
 * [3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170], 10 = 4
 * [3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170, 210, 350, 502, 552, 600, 649, 720], 502 = 13
 */