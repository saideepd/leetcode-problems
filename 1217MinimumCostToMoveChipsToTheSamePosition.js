/**
 * 1217. Minimum Cost to Move Chips to the Same Position
 * https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
 * Category: Array, Math, Greedy
 * 
 * @param {number[]} positon
 * @returns {number}
 */

var minCostToMoveChips = function (position) {
    let even = 0;
    position.forEach(chip => {
        chip % 2 === 0 ? even++ : even
    });

    return Math.min(even, position.length - even);
}

console.log('Minimum Cost to Move Chips to the Same Position');
console.log(`[1,2,3] = ` + minCostToMoveChips([1, 2, 3]));
console.log(`[2,2,2,3,3] = ` + minCostToMoveChips([2, 2, 2, 3, 3]));
console.log(`[1,1000000000] = ` + minCostToMoveChips([1, 1000000000]));

/**
 * Output:
 * 
 * Minimum Cost to Move Chips to the Same Position
 * [1,2,3] = 1
 * [2,2,2,3,3] = 2
 * [1,1000000000] = 1
 */