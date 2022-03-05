/*
175. Combine Two Tables
https://leetcode.com/problems/combine-two-tables/
*/

SELECT p.firstName, p.lastName, a.city, a.state
FROM Person p LEFT JOIN Address a
ON p.personId = a.personId

/*
Input:
{"headers":{"Person":["personId","lastName","firstName"],"Address":["addressId","personId","city","state"]},"rows":{"Person":[[1,"Wang","Allen"],[2,"Alice","Bob"]],"Address":[[1,2,"New York City","New York"],[2,3,"Leetcode","California"]]}}

Output:
{"headers": ["firstName", "lastName", "city", "state"], "values": [["Allen", "Wang", null, null], ["Bob", "Alice", "New York City", "New York"]]}
*/