const router = require('express').Router() // need to figure out exactly what this line is doing pretty sure it is combining two things into one

const Users = require("./users-model.js");

router.get("/users", (req, res) => {

    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(error => {
        res.send(error);
    })

});

// router.post("/register", (req, res) => {
//     console.log(req.body)
//     const {username, password} =req.body;
//     const hash = bcrypt.hashsync(password, 8);
//     Users.add(req.body)
//     .then(users => {
//         res.json(users);
//     }).catch(error => {
//         res.send(error);
//     })
// })

// router.post("/login", (req, res) => {

//     let = { username, password} = req.body;

//     Users.findBy({ username }) 
//        .first()
//        .then(user => {
//            if(user && bcrypt.compareSync(password, user.password)) {
//                res.status(200).json({ message: `Welcome ${user.username}!`});
//            } else {
//                res.status(401).json({message: "Invalid Credentials"});
//            }
//            })
//         .catch(error => {
//             res.status(500).json(error);
//         })
// })

module.exports = router;