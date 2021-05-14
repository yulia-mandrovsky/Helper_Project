const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const bcrypt = require('bcrypt');
app.use(cors())
const db = require('./db')

function getRandomString() {
    let resString = '';
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const length = 200;
    for (let i = 0; i < length; i++){
      resString += letters[Math.floor(Math.random() * (letters.length - 1))];
    }
    return resString;
  }

// TOKENS 

// Registration get TOKEN!!!!
app.post('/register', (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newToken = getRandomString();
    let values = [req.body.username, req.body.email, salt, hash, newToken, req.body.numberID, 
        req.body.telephone, req.body.city, req.body.isPerformer, req.body.languages, 
        req.body.categories, req.body.workCities, req.body.pricePerHour]

    db.query(`
        INSERT INTO users 
            (username, email, salt, hash, token, numberID, telephone, city, 
                is_performer, languages, categories, work_cities, price_per_hour)
        VALUES ?
    `, [values], 
        (err, data) => {
            if (err) {
                res.status(400).json(err)
                return;
            }
            res.status(200).json({email: req.body.email, token: newToken})
})
})   

//  PUT TOKEN!!!!
app.put('/users', (req, res) => {
    const { email, password } = req.body;

    db.query(`
        SELECT * FROM users
        WHERE email = ${email}
    `, (err, data) => {
        if (err) {
            res.status(400).json(err)
            return;
        }
        let user = data[0];

        if (!user) {
            res.status(401).json({ error: 'The user does not exist' });
            return;
          } 
          const hash = bcrypt.hashSync(password, user.salt);
          if (user.hash === hash) {
      // db
      const newToken = getRandomString();
      db.query(`
        UPDATE users SET token = "${newToken}"
        WHERE id = ${user.id}
      `, (err) => {
          if (err) {
            res.status(400).json(err)
            return;
          }
          res.status(200).json({email: req.body.email, token: newToken})
      })
    } else {
        res.status(401).send()
    }
    });
  })

// USERS


// get TOKEN by ID

// get TOKEN by password and email

// get USER by UserId


// get List of Users 
app.get('/users', function (req, res) {
    res.json(users);
});


// Post New USER to List, get TOKEN
let NEXT_ID = 1;

app.post('/users', function (req, res) {
    console.log(req.body)
    const newUser = { ...req.body, id: NEXT_ID };
    NEXT_ID += 1
    users.push(newUser);
    res.json(newUser)
});

// PUT user

app.put("/users/:id", function (req, res) {
    const idOfUser = parseInt(req.body.userId);
    const userIdx = users.findIndex((user) => user.userId === idOfUser);
  
    if (userIdx !== -1) {
      const oldUser = users[userIdx];
      users[userIdx] = { ...oldUser, ...req.body };
      res.json(users[userIdx]);
    } else {
      res.status(404).json();
    }
  });


// delete USER ??? пока не используется
app.delete('/users/:id', (req, res) => {
    const idOfUser = Number(req.params.id);
    console.log(idOfUser)
    users = users.filter((el) => el.userId !== idOfUser);
    console.log(users)
    res.json(users)
})

// TASKS

let tasks = [
    {
        "taskId": 0,
        "taskName": "Kichen Cleaning",
        "categorie": "cleaning",
        "frequency": "one time only",
        "city": "Rishon leZion",
        "price": 50,
        "description": "sooooomeeeeeeeee textttttttt",
        "ownerId": "1",
        "performerId": null
    }
]

// get TASKS LIST fiter??

app.get('/tasks', function (req, res) {
    res.json(tasks);
});

// add TASK


// PUT TASK



// Delete TASK добавить кнопку удаления

app.listen(2121, function () {
    console.log('Server works');
});