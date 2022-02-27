/**
 * 1281. Subtract the Product and Sum of Digits of an Integer
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 * Category: Math
 * 
 * @param {number} n
 * @returns {number}
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var subtractProductAndSum = function(n) {
    let product = 1, sum = 0;
    while (n > 0) {
        let temp = n % 10;
        n = parseInt(n / 10);
        product *= temp;
        sum += temp;
    }
    return product - sum;
}

console.log('Subtract Product and Sum of the Digits of an Integer');
rl.question(`Enter number: `, input => {
    console.log(`Difference of Product & Sum of Digits of Number ${input}: ${subtractProductAndSum(input)}`);
    rl.close();
});

/**
 * Output:
 * 
 * Subtract Product and Sum of the Digits of an Integer
 * Enter number: 234
 * Difference of Product & Sum of Digits of Number 234: 15
 */