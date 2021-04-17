const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = process.env.port || 8000;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server started on port http://localhost:${PORT}`);
});

// Create Connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  //This is added before creating the table
  database: 'mydb',
});

// //Connection to the localhost of the database
// con.connect(function (err) {
//   if (err) throw err;
//   console.log('Connected!');
// });

// // Query a Database
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
//   });
// });

// // Create database
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// //Create Table : customers
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// // Create Table Primary Key
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// // If the table already exists, use the ALTER TABLE keyword
// con.connect(function (err) {
//   if (err) throw err;
//   console.log('Connected!');
//   var sql =
//     'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log('Table altered');
//   });
// });

// //Insert Into Table
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

// //Insert Multiple Records
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ?";
//   var values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });

// // Get inserted ID
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted, ID: " + result.insertId);
//   });
// });

// // Select all records from the "customers" table, and display The Result Object
// con.connect(function (err) {
//   if (err) throw err;
//   con.query('SELECT * FROM customers', function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// //Selecting Columns
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, address FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// //Return the address of the third record:
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, address FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     //console.log(result);
//     console.log(result[2].address);
//   });
// });

// //Select all records from the "customers" table, and display the Fields Object:
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, address FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(fields);
//   });
// });

// //Return the name of the second field:
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, address FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(fields[1].name);
//   });
// });

// //Select With a Filter ('WHERE') CLAUSE
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

/**
 * Wildcard Characters
You can also select the records that starts, includes, or ends with a given letter or phrase.

Use the '%' wildcard to represent zero, one or multiple characters:
 */

// // Select records where the address starts with the letter 'S'
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

/**
 * Escaping Query Values
When query values are variables provided by the user, you should escape the values.

This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.

The MySQL module has methods to escape query values:

Example
Escape query values by using the mysql.escape() method:
 */

// //Escape query values by using the mysql.escape() method
// const adr = 'Mountain 21';
// const sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// //You can also use a ? as a placeholder for the values you want to escape.
// const adr = 'Mountain 21';
// const sql = 'SELECT * FROM customers WHERE address = ?';
// con.query(sql, [adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// //Multiple placeholders:
// const name = 'Amy';
// const adr = 'Mountain 21';
// const sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
// con.query(sql, [name, adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

/**
 * Sort the Result
Use the ORDER BY statement to sort the result in ascending or descending order.

The ORDER BY keyword sorts the result ascending by default. To sort the result in descending order, use the DESC keyword.
 */

// //Sort the result alphabetically by name:
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

/**
 * ORDER BY DESC
Use the DESC keyword to sort the result in a descending order.
 */

// //Sort the result reverse alphabetically by name
// con.connect(function (err) {
//   if (err) throw err;
//   con.query(
//     'SELECT * FROM customers ORDER BY name DESC',
//     function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     }
//   );
// });

// //Delete Record - Delete any record with the address "Mountain 21":
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//     console.log(result.affectedRows)
//   });
// });

// //Drop a Table
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE customerss";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });

// //Drop the table "customers" if it exists:
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE IF EXISTS customerss";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// //Update Table
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });
// });

/**
 * Limit the Result
You can limit the number of records returned from the query, by using the "LIMIT" statement:
 */

// //Select the 5 first records in the "customers" table:
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 5";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

/**
 * Start From Another Position
If you want to return five records, starting from the third record, you can use the "OFFSET" keyword:
 */

// //Start from position 3, and return the next 5 records:
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

/**
 * Shorter Syntax
You can also write your SQL statement like this "LIMIT 2, 5" which returns the same as the offset example
 */

// //Start from position 3, and return the next 5 records:
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 2, 5";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

/**
 * Join Two or More Tables
You can combine rows from two or more tables, based on a related column between them, by using a JOIN statement.

Consider you have a "users" table and a "products" table:
 */

// //Drop the table "users" if it exists:
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE IF EXISTS products";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });  

// //Insert Multiple Records into users
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   const sql = "INSERT INTO users (name, favorite_product) VALUES ?";
//   const values = [
//         ['John', '154'],
//         ['Peter', '154'],
//         ['Amy', '155'],
//         ['Hannah', ''],
//         ['Michael', '']
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });


// //Insert Multiple Records into products
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   const sql = "INSERT INTO products (name) VALUES ?";
//   const values = [
//         [ 'Chocolate Heaven'],
//         [ 'Tasty Lemons'],
//         [ 'Vanilla Dreams'],
//   ];
//   con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// });

// //Create Table : users
// con.connect(function (err) {
//   if (err) throw err;
//   console.log('Connected!');
//   var sql =
//     'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), favorite_product VARCHAR(255))';
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log('Table created');
//   });
// });

// //Create Table : products
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// //These two tables can be combined by using users' favorite_product field and products' id field.
// //Note: You can use INNER JOIN instead of JOIN. They will both give you the same result.
// con.connect(function (err) {
//   if (err) throw err;
//   var sql =
//     'SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id';
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

/**
 * Left Join
If you want to return all users, no matter if they have a favorite product or not, use the LEFT JOIN statement:
 */

// //Select all users and their favorite product:
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = products.id";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

/**
 * Right Join
If you want to return all products, and the users who have them as their favorite, even if no user have them as their favorite, use the RIGHT JOIN statement:
 */

// //Select all products and the user who have them as their favorite:
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });