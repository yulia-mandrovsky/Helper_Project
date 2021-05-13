const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

let users = [];

let tasks =[];

app.get('/users', function (req, res) {
    res.json(users);
});

let NEXT_ID = 1;

app.post('/users', function (req, res) {
    console.log(req.body)
    const newUser = { ...req.body, id: NEXT_ID };
    NEXT_ID += 1
    users.push(newUser);
    res.json(newUser)
});

app.delete('/users/:id', (req, res) => {
    const idOfUser = Number(req.params.id);
    console.log(idOfUser)
    users = users.filter((el) => el.id !== idOfUser);
    console.log(users)
    res.json(users)
})


app.listen(2121, function () {
    console.log('Server works');
});