/**
 * 1773. Count Items Matching A Rule
 * https://leetcode.com/problems/count-items-matching-a-rule/
 * Category: Array, String
 * 
 * @param {number[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @returns {number} 
 */

var countMatches = function (items, ruleKey, ruleValue) {
    // // Hash Table approach
    // let ruleHash = {
    //     'type': 0,
    //     'color': 1,
    //     'name': 2
    // };

    // let ruleIndex = ruleHash[ruleKey];

    // return items.map((count, item) => {
    //     if (item[ruleIndex] === ruleValue)
    //         count++;
    //     return count;
    // }, 0);

    // Simple switch case approach
    let ruleIndex = 0, count = 0;
    switch(ruleKey) {
        case 'type': ruleIndex = 0; break;
        case 'color': ruleIndex = 1; break;
        case 'name': ruleIndex = 2; break;
        default: ruleIndex = -1; break;
    }

    items.filter((item) => {
        if(item[ruleIndex] === ruleValue)
            count++;
    });

    return count;
}

console.log('Count Items Matching A Rule');
console.log(`[["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver" = ${countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver")}`);
console.log(`[["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone" = ${countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone")}`);

/**
 * Output:
 * 
 * Count Items Matching A Rule
 * [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver" = 1
 * [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone" = 2
 */