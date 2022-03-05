/*
178. Rank Scores
https://leetcode.com/problems/rank-scores/
*/

SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS rank FROM Scores

/*
Input:
{"headers": {"Scores": ["id", "score"]}, "rows": {"Scores": [[1, 3.50], [2, 3.65], [3, 4.00], [4, 3.85], [5, 4.00], [6, 3.65]]}}

Output:
{"headers": ["score", "rank"], "values": [[4.00, 1], [4.00, 1], [3.85, 2], [3.65, 3], [3.65, 3], [3.50, 4]]}
*/