/**
 * 278. First Bad Version
 * https://leetcode.com/problems/first-bad-version/
 * Category: Binary Search, Interactive
 * 
 * @param {number} n
 * @returns {number}
 */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

var solution = function (n, version) {
    // Start from 1 till n as per the condition
    let start = 1, end = n;
    while (start <= end) {
        // Calculate mid value
        let mid = Math.trunc(start + (end - start) / 2);

        // If the mid value is bad, check towards left of mid for possible badVersions
        // Update the end pointer
        if (isBadVersion(mid, version))
            end = mid - 1;
        // Else look towards right array of mid
        else
            start = mid + 1;
    }
    // Return start as that is the possible answer
    return start;
};

const isBadVersion = (mid, version) => {
    return mid >= version
}

console.log('First Bad Version');
console.log(`5, 4 = ${solution(5, 4)}`);
console.log(`1, 1 = ${solution(1, 1)}`);
console.log(`3, 1 = ${solution(3, 1)}`);

/**
 * Output:
 * 
 * First Bad Version
 * 5, 4 = 4
 * 1, 1 = 1
 * 3, 1 = 1
 */