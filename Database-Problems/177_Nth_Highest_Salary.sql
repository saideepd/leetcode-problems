/*
177. Nth Highest Salary
https://leetcode.com/problems/nth-highest-salary/
*/

CREATE FUNCTION getNthHighestSalary(@N INT) RETURNS INT AS
BEGIN
    RETURN (
        SELECT TOP 1 a.salary FROM (
            SELECT salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS RNK FROM Employee 
        ) a WHERE a.RNK = @N
    );
END

/*
Input:
{"headers": {"Employee": ["id", "salary"]}, "argument": 2, "rows": {"Employee": [[1, 100], [2, 200], [3, 300]]}}

Output:
{"headers": ["getNthHighestSalary(2)"], "values": [[200]]}
*/