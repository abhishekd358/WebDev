You must always specify the columns names in an insert statement. (FALSE)
NULL is the same as 0 for integer fields and '' (space) for string fields.(FALSE)

3) What happens if you forget the WHERE clause in a DELETE statement?
-------->All records int the table will be deleted


--- in MYSQL DEAFULT value of column or field is NULL

----------------------------------------------- String operations
---- CONCAT() & CONCAT_WS()
---- SUBSTRING()
---- REPLACE(str, from_str, to_str)
---- REVERSE()
---- UPPER 
---- LOWER
---- CHAR_LENGTH
---- TRIM
---- REPEAT
---- LEFT 
---- RIGHT
---- INSERT
---------------------------------------------------------------Data Types
DECIMAL
FLOAT -> take 4 byte memeroy, upto 7 digit precision
DOUBLE -> take 8 byte , upto 15 digit precision 
INT

--------------------- DATE, TIME , DATETIME, CURDATE, CURTIME, NOW, DATE_FORMAT()

-------- CASE STATEMENT

-------- CHECK / UNIQUE /CONSTRAINT (on Mobile no filed)


-------- ALTER

<!-- ADD COLUMN -->
ALTER TABLE <table_name>
ADD COLUMN <col_name> <Schema>

<!-- REMOVE COLUMN -->
ALTER TABLE <table_name>
DROP COLUMN <col_name>

<!-- Rename column -->
ALTER TABLE <table_name>
RENAME COLUMN <curr_col_name> <new_col_name>

<!-- Rename table -->
ALTER TABLE <table_name>
RENAME TO <new_table_name> 

<!-- Modify column  -->
ALTER TABLE <table_name>
MODIFY <col_name> <pass_your _modification>



----------- REALTION SHIP 
one - one -> one id realted to 1 record in another table
one - many -> one id realted to many record in another table
many - many -> many id realted to many record in another table





--------------------- WITH ROLLUP 
--------------------- CREATE VIEW <view_name> AS <query>

--------------------- STORED PROCEDURE




______________________________________________________________________________________________________

-  without FROM we can use SELECT. to do general operation or calculation 

- GROUP BY works with AGGREATION FUNCTION , if not used with aggregation it behave as DISTINCT

- HAVING use when we want to Filtering while using with GROUP BY. becuase WHERE filter does not work with GROUP BY and we can't use the AGGREGATION with the WHERE

- HAVING  ->	After grouping/aggregation/with aggreagation.
- WHERE -> 	Before grouping/aggregation.



- FOREGIN KEY (col_name) REFERENCE (table_name(which_col_name))

- CONSTRAINT (name_it_any) CHECK (condition) ---->>>>> see about it 


----------------------------------------- DML

- ON DELETE CASCADE -> delete the data from children table which reference of parent
- ON DELETE SET NULL -> children table FOREGIN KEY key became a NULL

- Q) Can foreging key be null ? -> yes foregin key can be null in ON DELETE SET NULL


- REPLACE -> if data present already then REPLACE , if not present then INSERT

REPLACE INTO <table-name>
VALUES



- MySql dont have FULL JOIN , So we have to emmulate as follow :=> LEFT JOIN UNION RIGHT JOIN

- CROSS JOIN -> is cartesian producat, all combination from both table

- SELF JOIN -> emmulate using INNER JOIN and AS

```
SELECT e1.id , e1.name 
FROM employee as e1
INNER JOIN employee as e2
ON e1.id=e2.id
```

- Q2) Can we JOIN table without JOIN Keyword?
- yes, we can using : select * from <table-1>, <table-2>
- or : select * from <table-1>, <table-2> where <table1>.id = <table2>.id


-------------------set operations
- only done when same column in both table
- number of rows increase in set operaton , while in JOIN column increases
- UINON
- INTERSECTION -> emmaluate with help of INNER JOIN
- MINUS

----------------------- sub query
- is a alternative of join
- outer query depend on inner query 



__________________________________ARCHITECTURE____________________________________________________

## abstraction - hidding fucntionality









____________________________________________________________________________________-





show databases
use <databases_name>

create databases <name_database>


------ TABLE ---------

<!-- TABLE -->

CREATE TABLE <table-name> (
    <col_name_1> <data-type> <constraint....>,
    <col_name_2> <data-type>
);


<!-- Table description  -->
DESC <table-name>



<!--  Add data into table -->
INSERT INTO <table-name>
VALUES <specify-values>


<!-- Reading data from table -->
SELECT <col1>, <col2> FROM <table-name>




--------------- WHERE ----------------------






_________________NORMALIZATION
- to remove reduandacy from db





















-----------------------------------------------------------------------------------------------------------

