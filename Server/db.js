const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'helper-db.czeyex3idb1y.us-east-2.rds.amazonaws.com',
  port: 3306,
  user: 'Yulia_Solo',
  password: "LeoMilano21!",
  database: 'helper_db'
});

connection.connect((err) => {
  if (!err) { 
    console.log('SUCESS')
  }
  else {
  console.log(err)
}})

module.exports = connection;









