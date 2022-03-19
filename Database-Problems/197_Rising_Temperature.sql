/*
197. Rising Temperature
https://leetcode.com/problems/rising-temperature/
*/

SELECT w2.id
FROM Weather w1 JOIN Weather w2
ON DATEDIFF(dd, w1.recordDate, w2.recordDate) = 1
WHERE w2.temperature > w1.temperature

/*
Input:
{"headers": {"Weather": ["id", "recordDate", "temperature"]}, "rows": {"Weather": [[1, "2015-01-01", 10], [2, "2015-01-02", 25], [3, "2015-01-03", 20], [4, "2015-01-04", 30]]}}

Output:
{"headers": ["id"], "values": [[2], [4]]}
*/