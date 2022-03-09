/*
183. Customers Who Never Order
https://leetcode.com/problems/customers-who-never-order/
*/

SELECT c.name AS Customers FROM [Customer] c
LEFT JOIN [Orders] o
ON c.id = o.customerId
WHERE o.id IS NULL

/*
Input:
{"headers": {"Customers": ["id", "name"], "Orders": ["id", "customerId"]}, "rows": {"Customers": [[1, "Joe"], [2, "Henry"], [3, "Sam"], [4, "Max"]], "Orders": [[1, 3], [2, 1]]}}

Output:
{"headers": ["Customers"], "values": [["Henry"], ["Max"]]}

*/