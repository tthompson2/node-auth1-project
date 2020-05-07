const db = require("../database/dbConfig");

module.exports = {
    // add,
    find,
    // findBy,
    // findById,
}

function find() {
    return db("users").select("*"); // need to edit this function
}

