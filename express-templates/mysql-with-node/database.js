var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'nodeapp',
});
conn.connect(function (err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;

// const express = require('express');
// const mysql = require('mysql');
// const app = express();
// const PORT = 2000;

// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'mysql_with_node_db'
// });
// conn.connect(function(err) {
//   if (err) throw err;
//   console.log('Database is connected successfully !');
// });
// module.exports = conn;

// // set the app to listen on the port
// app.listen(PORT, () => {
//     console.log(`Server running on port: http://localhost:${PORT}`);
// });
