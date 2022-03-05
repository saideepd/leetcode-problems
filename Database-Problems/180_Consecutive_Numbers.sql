/*
180. Consecutive Numbers
https://leetcode.com/problems/consecutive-numbers/
*/

SELECT DISTINCT l1.nums AS ConsecutiveNums
FROM Logs l1, Logs l2, Logs l3
WHERE l1.id = l2.id + 1 AND l2.id = l3.id + 1
AND l1.num = l2.num AND l1.num = l3.num AND l2.num = l3.num

/*
Input:
{"headers": {"Logs": ["id", "num"]}, "rows": {"Logs": [[1, 1], [2, 1], [3, 1], [4, 2], [5, 1], [6, 2], [7, 2]]}}

Output:
{"headers": ["ConsecutiveNums"], "values": [[1]]}
*/