const mysql = require('mysql');


const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || "LeoMilano21",
  database: process.env.DB_NAME || 'helper'
});

connection.connect((err) => {
  if (!err) { 
    console.log('SUCESS')
  }
  else {
  console.log(err)
}})

module.exports = connection;









