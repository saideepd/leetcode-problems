/**
 * 1832. Check if the Sentence is Pangram
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 * Category: Hash Table, String
 * 
 * @param {string} sentence
 * @returns {boolean}
 */

var checkIfPangram = function(sentence) {
    if (sentence.length < 26)
        return false
    
    let alphabets = "abcdefghijklmnopqrstuvwxyz".split('');

    return alphabets.every(x => sentence.includes(x));
}

console.log('Check if the Sentence is Pangram');
console.log(`"thequickbrownfoxjumpsoverthelazydog" : ${checkIfPangram("thequickbrownfoxjumpsoverthelazydog")}`);
console.log(`"leetcode" : ${checkIfPangram("leetcode")}`);
console.log(`"Saideep" : ${checkIfPangram("Saideep")}`);

/**
 * Output:
 * 
 * Check if the Sentence is Pangram
 * "thequickbrownfoxjumpsoverthelazydog" : true
 * "leetcode" : false
 * "Saideep" : false
 */