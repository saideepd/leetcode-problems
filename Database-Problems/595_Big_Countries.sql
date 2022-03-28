/*
595. Big Countries
https://leetcode.com/problems/big-countries/
*/

SELECT name, population, area
FROM World
WHERE area >= 3000000 OR population >= 25000000

/*
Input:
{"headers": {"World": ["name", "continent",	"area",	"population", "gdp"]}, "rows": {"World": [["Afghanistan", "Asia", 652230, 25500100, 20343000000], ["Albania", "Europe", 28748, 2831741, 12960000000], ["Algeria", "Africa", 2381741, 37100000, 188681000000], ["Andorra", "Europe", 468, 78115,	3712000000], ["Angola", "Africa", 1246700, 20609294, 100990000000]]}}

Output:
{"headers": ["name", "population", "area"], "values": [["Afghanistan", 25500100, 652230], ["Algeria", 37100000, 2381741]]}
*/