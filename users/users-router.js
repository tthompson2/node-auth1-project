const router = require('express').router() // need to figure out exactly what this line is doing pretty sure it is combining two things into one

const Users = require("./users-model.js");

router.get("/", (req, res) => {

    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(error => {
        res.send(error);
    })

});