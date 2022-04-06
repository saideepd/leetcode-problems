/**
 * 1346. Check If N and its Double Exist
 * https://leetcode.com/problems/check-if-n-and-its-double-exist/
 * Category: Array, Hash Table, Two Pointers, Binary Search, Sorting
 * 
 * @param {number[]} arr
 * @returns {boolean}
 */

var checkIfExist = function (arr) {
    let hash = new Set();

    for (let num of arr) {
        if (hash.has(2 * num) || (num % 2 === 0 && hash.has(num / 2)))
            return true;
        else
            hash.add(num);
    }
    return false;
}

console.log('Check if N and its Double Exist');
console.log(`[10,2,5,3] = ${checkIfExist([10,2,5,3])}`);
console.log(`[7,1,14,11] = ${checkIfExist([7,1,14,11])}`);
console.log(`[3,1,7,11] = ${checkIfExist([3,1,7,11])}`);

/**
 * Output:
 * 
 * Check if N and its Double Exist
 * [10,2,5,3] = true
 * [7,1,14,11] = true
 * [3,1,7,11] = false
 */