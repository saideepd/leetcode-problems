/**
 * 367. Valid Perfect Square
 * https://leetcode.com/problems/valid-perfect-square/
 * Category: Math, Binary Search
 * @param {number} x
 * @return {boolean}
 */

var isPerfectSquare = function (x) {
    if (x <= 1)
        return true;
    else {
        let sqrt = x / 2;
        let temp = 0;

        while (sqrt != temp) {
            temp = sqrt;

            sqrt = ((x / temp) + temp) / 2;
        }

        return Math.trunc(sqrt) == sqrt;
    }
};

console.log("Valid Perfect Square");
console.log(`16 = ${isPerfectSquare(16)}`);
console.log(`14 = ${isPerfectSquare(14)}`);

/**
 * Output:
 * 
 * Valid Perfect Square
 * 16 = true
 * 14 = false
 */