const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.options('*', cors());
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

function authMiddleWare(req, res, next) {
    let token = req.get("Authorization");
    if (!token) {
        res.status(401).send()
        return;
    } 
    db.query(`SELECT * FROM users
        WHERE token = "${token}"
    `, (err, data) => {
        if (err) {
            res.status(401).send()
            return;
        }
        let user = data[0];
        if (!user) {
            res.status(401).json({ error: 'The user does not exist' });
            return;
          } 
        req.user = user;
        next();
    })
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
        req.body.telephone, req.body.city, req.body.isHelper, req.body.languages, 
        req.body.categories, req.body.description, req.body.workCities, req.body.pricePerHour]

    db.query(`
        INSERT INTO users 
            (username, email, salt, hash, token, numberID, telephone, city, 
                is_performer, languages, categories, description, work_cities, price_per_hour)
        VALUES (?)
    `, [values], 
        (err, data) => {
            if (err) {
                res.status(400).json(err)
                return;
            }
            res.status(200).json({email: req.body.email, token: newToken})
    })
}) 

// PUT User
app.put('/users/:id', authMiddleWare, function(req, res) {
    console.log(req.body)
    let newCategories = req.body.categories;
    let newCities = req.body.work_cities;
    let newPrice = req.body.price_per_hour;
    let newDescription = req.body.description;
    db.query(`
        UPDATE users SET categories = "${newCategories}",
        work_cities = "${newCities}",
        price_per_hour = ${newPrice},
        description = "${newDescription}"
        WHERE id = ${req.body.id}
    `, (err, data) => {
        if (err) {
            res.status(400).json(err)
            return;
        }
        res.status(200).json(data)
    })
})


//  PUT TOKEN!!!! 
app.put('/users', (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;

    db.query(`
        SELECT * FROM users
        WHERE email = "${email}"
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
          console.log(password, hash, user.hash)
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

// post USER by token
app.get('/me', authMiddleWare, function (req, res) {
    res.json(req.user)
})


// get List of Users 
app.get('/users', authMiddleWare, function (req, res) {
    let sqlQuery = `
        SELECT * FROM users
        WHERE is_performer = true
        AND id != ${req.user.id}
    `
    let categories = req.query.categories
    let languages = req.query.languages
    let work_cities = req.query.work_cities
    let price_from = req.query.price_from
    let price_up = req.query.price_up
    if (categories || languages || work_cities || price_from || price_up) {
        sqlQuery = sqlQuery + ` AND `
        let helper_conditions =[]
        if (categories) {
            helper_conditions.push(`categories LIKE "%${categories}%"`)
        }
        if (languages) {
            helper_conditions.push(`languages LIKE "%${languages}%"`)
        }
        if (work_cities) {
            helper_conditions.push(`work_cities LIKE "%${work_cities}%"`)
        }
        if (price_from) {
            helper_conditions.push(`price_per_hour >= ${price_from}`)
        }
        if (price_up) {
            helper_conditions.push(`price_per_hour <= ${price_up}`)
        }
        sqlQuery = sqlQuery + helper_conditions.join(' AND ') + ';'
        console.log(sqlQuery)
    }
    
    db.query(sqlQuery, (err, data) => {
        if (err) {
            res.status(400).json(err)
            return;
        }
        res.status(200).json(data)
    })
});

// TASKS

// get TASKS LIST by Filter
app.get('/tasks', authMiddleWare, function (req, res) {
    let sqlQuery = `
        SELECT * FROM tasks
    `
    let owner_id = req.query.owner_id
    let status = req.query.status
    let category = req.query.category
    let city = req.query.city
    let frequency = req.query.frequency
    let price_from = req.query.price_from
    let price_up = req.query.price_up
    if (owner_id || status || category || city || frequency || price_from || price_up) {
        sqlQuery = sqlQuery + ` WHERE `
        console.log("kuku")
        let conditions = []
        if (owner_id) {
            conditions.push(`owner_id = ${owner_id === "me" ? req.user.id : owner_id}`)
        } else {
            conditions.push(`owner_id != ${req.user.id}`)
        }
        if (status) {
            conditions.push(`status = '${status}'`)
        }
        // TODO сделать мульти фильтр по категории и городу

        if (category) {
            conditions.push(`categorie = "${category}"`)
        }
        if (city) {
            conditions.push(`city = "${city}"`)
        }
        if (frequency) {
            conditions.push(`frequency = "${frequency}"`)
        }
        if (price_from) {
            conditions.push(`price >= ${price_from}`)
        }
        if (price_up) {
            conditions.push(`price <= ${price_up}`)
        }
        sqlQuery = sqlQuery + conditions.join(' AND ')
        console.log(sqlQuery)
    }
    db.query(sqlQuery, (err, data) => {
        if (err) {
            res.status(400).json(err)
            return;
        }
        res.status(200).json(data)
    })
});


// get TASK by ID
app.get('/tasks/:id', authMiddleWare, function (req, res) {
    let id = req.params.id;
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
app.post('/tasks', authMiddleWare, function (req, res) {
    let values = [req.body.task_name, 
        req.body.status,
        req.body.categorie, 
        req.body.frequency, 
        req.body.city, 
        req.body.price,
        req.body.phone, 
        req.body.description, 
        req.user.id, 
        req.body.performer_id];
    db.query(`
        INSERT INTO tasks
         (task_name, status, categorie, frequency, city, price, phone, description, owner_id, performer_id)
         VALUES (?)
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
app.put('/tasks/:id', authMiddleWare, function (req, res) {
    let newStatus = req.body.status;
    console.log(newStatus)
    db.query(`
        UPDATE tasks SET status = "${newStatus}"
        WHERE task_id = ${req.params.id}
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