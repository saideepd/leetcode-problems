/**
 * 1672. Richest Customer Wealth
 * https://leetcode.com/problems/richest-customer-wealth/
 * Category: Array, Matrix
 * 
 * @param {number[]} accounts
 * @returns {number}
 */

var maximumWealth = function (accounts) {
    // Iterative approach
    // let sum = 0, maxWealth = 0;
    // for (let row = 0; row < accounts.length; row++) {
    //     sum = 0;
    //     for (let col = 0; col < accounts[row].length; col++) {
    //         sum += accounts[row][col];
    //     }
    //     maxWealth = Math.max(maxWealth, sum);
    // }
    // return maxWealth;

    // Simple Reduce approach
    let maxWealth = 0;
    for (let users = 0; users < accounts.length; users++) {
        maxWealth = Math.max(maxWealth, accounts[users].reduce((a, b) => a + b));
    }
    return maxWealth;
}

console.log('Richest Customer Wealth');
console.log(`[[1,2,3],[3,2,1]]: ${maximumWealth([[1,2,3],[3,2,1]])}`);
console.log(`[[1,5],[7,3],[3,5]]: ${maximumWealth([[1,5],[7,3],[3,5]])}`);
console.log(`[[2,8,7],[7,1,3],[1,9,5]]: ${maximumWealth([[2,8,7],[7,1,3],[1,9,5]])}`);

/**
 * Output:
 * 
 * Richest Customer Wealth
 * [[1,2,3],[3,2,1]]: 6
 * [[1,5],[7,3],[3,5]]: 10
 * [[2,8,7],[7,1,3],[1,9,5]]: 17
 */