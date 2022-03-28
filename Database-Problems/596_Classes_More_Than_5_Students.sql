/*
596. Classes More Than 5 Students
https://leetcode.com/problems/classes-more-than-5-students/
*/

SELECT class
FROM Courses
GROUP BY class
HAVING COUNT(class) >= 5

/*
Input:
{"headers": {"Courses": ["student", "class"]}, "rows": {"Courses": [["A", "Math"], ["B", "English"], ["C", "Math"], ["D", "Biology"], ["E", "Math"], ["F", "Computer"], ["G", "Math"], ["H", "Math"], ["I", "Math"]]}}

Output:
{"headers": ["class"], "values": [["Math"]]}
*/