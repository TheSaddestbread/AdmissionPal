var mysql = require('mysql');
require('dotenv').config();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.REACT_APP_SQL_PASS,
  port:"3300"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});