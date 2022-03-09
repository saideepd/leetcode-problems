/*
196. Delete Duplicate Emails
https://leetcode.com/problems/delete-duplicate-emails/
*/

DELETE FROM Person WHERE id IN (
    SELECT id FROM (
        SELECT id, DENSE_RANK() OVER (PARTITION BY email ORDER BY id) AS RNK
        FROM Person
    ) a WHERE RNK > 1
)

/*
Input:
{"headers": {"Person": ["id", "email"]}, "rows": {"Person": [[1, "john@example.com"], [2, "bob@example.com"], [3, "john@example.com"]]}}

Output:
{"headers": ["id", "email"], "values": [[1, "john@example.com"], [2, "bob@example.com"]]}
*/