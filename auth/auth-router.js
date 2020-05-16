const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');

router.post('/register', (req, res) => {
    
    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

router.post('/login', (req, res) => {
    let {username, password } = req.body;

    Users.findBy({username}) 
    .first()
    .then(user => {

        if(user && bcrypt.compareSync(password, userpassword)) {
            req.session.user = username;
            res.status(200).json({message: `Welcome ${user.username}!`});
        } else {
            res.status(401).json({mesasge: 'invalid credentials'});
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

router.delete('/logout', (req, res) => {
    
    if(req.session) {
        req.session.destroy((err) => {
            if(err) {
                res.status(400).json({message: 'error logging out:', error:err});
            } else {
                res.json({message: 'logged out'});
            }
    })
   } else {
       res.end();
   }
})

// wow, now I feel really silly. The module.exports function is used to
// export all of the modules attached to the function router

module.exports = router;