const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'helper'
});

connection.connect((err) => {
  if (!err) { 
    console.log('SUCESS')
  }
  else {
  console.log(err)
}})

module.exports = connection;









