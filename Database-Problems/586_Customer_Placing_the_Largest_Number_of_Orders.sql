/*
586. Customer Placing the Largest Number of Orders
https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/
*/

SELECT TOP 1 customer_number
FROM Orders
GROUP BY customer_number
ORDER BY COUNT(customer_number) DESC

/*
Input:
{"headers":{"orders":["order_number","customer_number"]},"rows":{"orders":[[1,1],[2,2],[3,3],[4,3]]}}

Output:
{"headers": ["customer_number"], "values": [[3]]}
*/