/**
 * 744. Find Smallest Letter Greater Than Target
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 * Category: Array, Binary Search
 */

var nextGreatestLetter = function (letters, target) {
    let start = 0, end = letters.length - 1;
    while (start <= end) {
        // Calculate mid value
        let mid = start + (end - start) / 2;
        // If target is less than mid element, update end pointer
        if (target < letters[mid])
            end = mid - 1;
        // If target is greater than mid element, update start pointer
        else
            start = mid + 1;
    }
    // Return start modulo array length
    // for any target that violates condition
    // which gives value greater than target
    return letters[start % letters.length];
}

console.log('Find Smallest Letter Greater than Target');
console.log(`['c', 'f', 'j'], 'a' = ${nextGreatestLetter(['c', 'f', 'j'], 'a')}`);
console.log(`['c', 'f', 'j'], 'c' = ${nextGreatestLetter(['c', 'f', 'j'], 'c')}`);
console.log(`['c', 'f', 'j'], 'd' = ${nextGreatestLetter(['c', 'f', 'j'], 'd')}`);
console.log(`['c', 'f', 'j'], 'h' = ${nextGreatestLetter(['c', 'f', 'j'], 'h')}`);
console.log(`['c', 'f', 'j'], 'm' = ${nextGreatestLetter(['c', 'f', 'j'], 'm')}`);

/**
 * Output:
 * 
 * Find Smallest Letter Greater than Target
 * ['c', 'f', 'j'], 'a' = c
 * ['c', 'f', 'j'], 'c' = f
 * ['c', 'f', 'j'], 'd' = f
 * ['c', 'f', 'j'], 'h' = j
 * ['c', 'f', 'j'], 'm' = c
 */