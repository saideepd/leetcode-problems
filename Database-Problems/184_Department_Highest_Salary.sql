/*
184. Department Highest Salary
https://leetcode.com/problems/department-highest-salary/
*/

SELECT Department, Employee, Salary FROM (
    SELECT d.name AS [Department], e.name AS [Employee], e.Salary AS [Salary]
    , DENSE_RANK() OVER(PARITION BY e.departmentId ORDER BY e.Salary DESC) RNK
    FROM [Employee] e LEFT JOIN [Department] d
    ON e.departmentId = d.id
) a WHERE RNK = 1

/*
Input:
{"headers": {"Employee": ["id", "name", "salary", "departmentId"], "Department": ["id", "name"]}, "rows": {"Employee": [[1, "Joe", 70000, 1], [2, "Jim", 90000, 1], [3, "Henry", 80000, 2], [4, "Sam", 60000, 2], [5, "Max", 90000, 1]], "Department": [[1, "IT"], [2, "Sales"]]}}

Output:
{"headers": ["Department", "Employee", "Salary"], "values": [["IT", "Jim", 90000], ["IT", "Max", 90000], ["Sales", "Henry", 80000]]}
*/