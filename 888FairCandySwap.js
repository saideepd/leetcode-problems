/**
 * 888. Fair Candy Swap
 * https://leetcode.com/problems/fair-candy-swap/
 * Category: Array, Hash Table, Binary Search, Sorting
 * 
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @returns {number[]}
 */

var fairCandySwap = function (aliceSizes, bobSizes) {
    let sumA = 0, sumB = 0;

    // Sum boxSizes of both Alice and Bob
    for (let a of aliceSizes)
        sumA += a;
    for (let b of bobSizes)
        sumB += b;

    // Calculate difference / 2 between aliceSizes and bobSizes
    let diff = Math.trunc((sumA - sumB) / 2);

    for (let i = 0; i < aliceSizes.length; i++) {
        for (let j = 0; j < bobSizes.length; j++) {

            // Find pair where difference of sizes is equal to diff
            if (aliceSizes[i] - bobSizes[j] === diff)
                return [aliceSizes[i], bobSizes[j]];
        }
    }

    return [-1, -1];
}

console.log('Fair Candy Swap');
console.log(`[1,1], [2,2] = [${fairCandySwap([1, 1], [2, 2])}]`);
console.log(`[1,2], [2,3] = [${fairCandySwap([1, 2], [2, 3])}]`);
console.log(`[2], [1,3] = [${fairCandySwap([2], [1, 3])}]`);

/**
 * Output:
 * 
 * Fair Candy Swap
 * [1,1], [2,2] = [1,2]
 * [1,2], [2,3] = [1,2]
 * [2], [1,3] = [2,3]
 */