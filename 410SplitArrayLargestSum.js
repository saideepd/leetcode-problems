/**
 * 410. Split Array Largest Sum
 * https://leetcode.com/problems/split-array-largest-sum/
 * Category: Array, Binary Search, Dynamic Programming, Greedy
 */

var splitArray = function (nums, m) {
    let start = 0, end = 0;
    for (let i = 0; i < nums.length; i++) {
        // In the end, this loop will contain the max item from the array
        start = Math.max(start, nums[i]);
        end += nums[i];
    }

    // Apply Binary Search
    while (start < end) {
        // Try for mid element as the potential answer
        let mid = Math.trunc(start + (end - start) / 2);

        // Calculate how many pieces the array can be divided into with the max sum
        let sum = 0; // initially the sum will be 0
        let pieces = 1; // initially the pieces will be 1 as the array needs to be divided into some parts

        for (let num of nums) {
            if (sum + num > mid) {
                // If sum of current sum & num exceeds the allowed pieces
                // then the num cannot be added to subarray, make a new subarray
                // When you add the num to new subarray, then update sum as sum = num
                sum = num;
                pieces++;
            }
            else {
                // If sum of current sum & num does not exceed the allowed pieces
                // then add the num to current sum
                sum += num;
            }
        }

        // If count of pieces is greater than m (allowed pieces)
        // then update start pointer
        if (pieces > m)
            start = mid + 1;
        // Else we cam stop at mid & update end pointer
        else
            end = mid;
    }
    // At this point, start == end
    return end;
}

console.log('Split Array Largest Sum');
console.log(`[7,2,5,10,8], 2 = ${splitArray([7,2,5,10,8], 2)}`);
console.log(`[1,2,3,4,5], 2 = ${splitArray([1,2,3,4,5], 2)}`);
console.log(`[1,4,4], 3 = ${splitArray([1,4,4], 3)}`);

/**
 * Output:
 * 
 * Split Array Largest Sum
 * [7,2,5,10,8], 2 = 18
 * [1,2,3,4,5], 2 = 9
 * [1,4,4], 3 = 4
 */