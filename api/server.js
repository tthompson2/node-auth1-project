const session = require('express-session');
const knexSessionStore = require('connect-session-knex')(session);
const express = require("express")
const helmet = require("helmet")
const cors = require("cors");

const restricted = require('../auth/restricted-middleware.js');
const usersRouter = require("../users/users-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/", usersRouter);

server.get("/", (req, res) => {
    res.json({api: "up "});
});

module.exports = server;