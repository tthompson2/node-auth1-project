const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
const express = require("express")
const helmet = require("helmet")
const cors = require("cors");

const restricted = require('../auth/restricted-middleware.js');

const usersRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router");

const server = express();

const sessionConfig = {
    name: 'something-cool',
    secret: 'myspeshulsecret',
    cookie: {
        maxAge: 3600 *1000,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,

    store: new knexSessionStore({
        knex: require('../database/dbConfig'),
        tablename: "sessions",
        sidfieldname: "sid",
        createtable: true,
        clearInterval: 3600*1000
    })
}

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(session(sessionConfig));

server.use("/api/users/", usersRouter);
server.use("/api/auth", restricted, authRouter);

server.get("/", (req, res) => {
    res.json({api: "up "});
});

module.exports = server;