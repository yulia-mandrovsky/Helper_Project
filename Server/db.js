const mysql = require('mysql');
// const fs=require('fs');
// const data=JSON.parse(fs.readFileSync('tasks.json', 'utf8'));

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'LeoMilano21',
  database: 'tasks'
});

connection.connect((err) => {
  if (!err) { 
    console.log('SUCESS')
  }
  else {
  console.log(error)
}})

module.exports = connection;

// // const values = data.map((task) => {
// //     return [task.description, task.due, task.employee, task.finished ]
// //   })

// connection.query(`DELETE FROM tasks
// WHERE finished_date > due_date;`, (err, data) => {
//   if (!err) {
//     console.log(data);
//   }
// });

//   connection.query(`UPDATE tasks
// SET finished_date = due_date
// WHERE employee = 'John';`, (err, data) => {
//   if (!err) {
//     console.log(data);
//   }
// });

//   connection.query(`UPDATE tasks
// SET finished_date = now()
// WHERE finished_date IS NULL;`, (err, data) => {
//   if (!err) {
//     console.log(data);
//   }
// });

//   connection.query(`UPDATE tasks
// SET employee = 'John'
// WHERE employee IS NULL;`, (err, data) => {
//   if (!err) {
//     console.log(data);
//   }
// });

//   connection.query(`
// INSERT INTO tasks 
//     (task_description, due_date, employee, finished_date)
// VALUES ?
// `,  [values],
// (err, data) => {
//   if (!err) {
//     console.log(data);
//   }
// });
// });

// const { name, amount, card, date} = client;







