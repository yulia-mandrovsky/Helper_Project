const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const bcrypt = require('bcrypt');
app.use(cors());
const db = require('./db');


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
// USERS

// Registration get TOKEN!!!!
// Post New USER to List, get TOKEN
app.post('/register', (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newToken = getRandomString();
    let values = [req.body.username, req.body.email, salt, hash, newToken, req.body.numberID, 
        req.body.telephone, req.body.city, req.body.isPerformer, req.body.languages, 
        req.body.categories, req.body.description, req.body.workCities, req.body.pricePerHour]

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

// get USER by UserId
app.get('/users', function (req, res) {
    let userId = req.body.id;
    db.query(`
        SELECT * FROM users
        WHERE id = ${userId}
    `, (err, data)=> {
        if (err) {
            res.status(400).json(err)
            return;
        }
        let user = data[0];
        if (!user) {
            res.status(401).json({ error: 'The user does not exist' });
            return;
        } 
        res.status(200).json(data)
    })
})


// get List of Users 
app.get('/users', function (req, res) {
    db.query(`
        SELECT * FROM users
    `, (err, data) => {
        if (err) {
            res.status(400).json(err)
            return;
        }
        res.status(200).json(data)
    })
});



// TASKS
// get TASKS LIST
app.get('/tasks', function (req, res) {
    db.query(`
        SELECT * FROM tasks
    `, (err, data) => {
        if (err) {
            res.status(400).json(err)
            return;
        }
        res.status(200).json(data)
    })
});

// get TASK by ID
app.get('/tasks', function (req, res) {
    let id = req.body.id;
    db.query(`
        SELECT * FROM tasks
        WHERE task_id = ${id}
    `, (err, data) => {
        if (err) {
            res.status(400).json(err)
            return; 
        }
        let task = data[0];
        if (!task) {
            res.status(401).json({ error: 'The task does not exist' });
            return;
        }
        res.status(200).json(data)
    })
})

// add TASK
app.post('/tasks', function (req, res) {
    let values = [req.body.task_name, req.body.categorie, req.body.frequency, 
        req.body.city, req.body.price, req.body.description, req.body.owner_id, 
        req.body.performer_id];
    db.query(`
        INSERT INTO tasks
         (task_name, categorie, frequency, city, price, description, owner_id, performer_id)
         VALUES ?
    `, [values],
    (err, data) => {
        if (err) {
            res.status(400).json(err)
            return;
        }
        res.status(200).json(data)
    })
})

// PUT TASK 
app.put('./tasks', function (req, res) {
    let newStatus = req.body.status;
    db.query(`
        UPDATE tasks SET status = "${newStatus}"
        WHERE id = ${req.body.task_id}
    `, (err, data) => {
        if (err) {
            res.status(400).json(err)
            return;
        }
        res.status(200).json(data)
    })
})

app.listen(2121, function () {
    console.log('Server works');
});