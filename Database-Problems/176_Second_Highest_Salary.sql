/*
176. Second Highest Salary
https://leetcode.com/problems/second-highest-salary/
*/

SELECT MAX(Salary) AS [SecondHighestSalary] FROM Employee
WHERE Salary < (SELECT MAX(Salary) FROM Employee)

/*
Input:
{"headers":{"Employee":["id","salary"]},"rows":{"Employee":[[1,100],[2,200],[3,300]]}}

Output:
{"headers": ["SecondHighestSalary"], "values": [[200]]}
*/