/**
 * 1351. Count Negative Numbers in Sorted Matrix
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * Category: Array, Binary Search, Matrix
 * 
 * @param {number[][]} grid
 * @return {number}
 */

var countNegative = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        count += countOfNegativesInEachRow(grid[i]);
    }
    return count;
}

const countOfNegativesInEachRow = (row) => {
    let count = 0;
    let start = 0, end = row.length - 1;
    while (start <= end) {
        let mid = Math.trunc(start + (end - start) / 2);

        if (row[mid] >= 0)
            start = mid + 1;
        else {
            count += end - mid + 1;
            end = mid - 1;
        }
    }
    return count;
}

console.log('Count Negative Numbers in a Sorted Array');
console.log(`[[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]] = ${countNegative([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])}`);
console.log(`[[3,2],[1,0]] = ${countNegative([[3,2],[1,0]])}`);

/**
 * Output:
 * 
 * Count Negative Numbers in a Sorted Array
 * [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]] = 8
 * [[3,2],[1,0]] = 0
 */