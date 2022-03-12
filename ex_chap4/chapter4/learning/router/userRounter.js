const express = require('express');
const userRounter = express.Router();

let users = [{
        id: '1',
        age: 18, //chi nhan la so 1-200, khong nhan so am
        email: 'kien@gmail.com', //chi nhap format la email, sai format thi bao loi
        name: 'Nguyen Anh Kien',
        gender: 0 // chi duoc nhap 0 hoac 1
    },
    {
        id: '2',
        age: 22, //chi nhan la so 1-200, khong nhan so am
        email: 'ki23en@gmail.com', //chi nhap format la email, sai format thi bao loi
        name: 'Nguyen KKK',
        gender: 0 // chi duoc nhap 0 hoac 1
    }
]


userRounter.get('/', function(req, res) {
    res.send(users);
});

userRounter.post('/', function(req, res) {
    const newUser = {
        id: `${users.length + 1}`,
        age: req.body.age,
        email: req.body.email,
        name: req.body.name,
        gender: req.body.gender
    }
    users.push(newUser);
    res.send(users);
});

userRounter.put('/', function(req, res) {
    const newUser = {
        age: req.body.age,
        email: req.body.email,
        name: req.body.name,
        gender: req.body.gender
    }
    let id = req.body.id;
    let index = users.findIndex(obj => obj.id == id);
    if (users[index] === undefined) {
        res.write('id not found');
    }
    users[index] = newUser;
    users[index].id = `${id}`;
    res.send(users);

});

userRounter.delete('/', function(req, res) {
    try {
        let id = req.body.id;
        console.log(id);
        users = users.filter(user => user.id !== id);
        res.send(users);

    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = userRounter;