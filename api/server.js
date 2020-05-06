const express = require("express")
const helment = require("helmet")
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("api/users", usersRouter);

server.get("/", (req, res) => {
    res.json({api: "up "});
});

module.exports = server;