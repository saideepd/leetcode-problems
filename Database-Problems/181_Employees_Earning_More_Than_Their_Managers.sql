/*
181. Employeed Earning more than their Managers
https://leetcode.com/problems/employees-earning-more-than-their-managers/
*/

SELECT e.name AS Employee FROM [Employee] e
JOIN [Employee] m
ON e.managerId = m.id
WHERE e.salary > m.salary

/*
Input:
{"headers": {"Employee": ["id", "name", "salary", "managerId"]}, "rows": {"Employee": [[1, "Joe", 70000, 3], [2, "Henry", 80000, 4], [3, "Sam", 60000, null], [4, "Max", 90000, null]]}}

Output:
{"headers": ["Employee"], "values": [["Joe"]]}
*/