/*
182. Duplicate Emails
https://leetcode.com/problems/duplicate-emails/
*/

SELECT DISTINCT a.Email FROM (
SELECT email AS Email, DENSE_RANK() OVER (PARTITION BY email ORDER BY id) AS RNK
FROM [Person]
) a WHERE a.RNK > 1

/*
Input:
{"headers": {"Person": ["id", "email"]}, "rows": {"Person": [[1, "jacky@yahoo.com"], [2, "jacky@yahoo.com"], [3, "jacky@yahoo.com"]]}}

Output:
{"headers": ["Email"], "values": [["jacky@yahoo.com"]]}
*/