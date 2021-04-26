const Pool = require("pg").Pool;
const pool = new Pool({
    user:"GilGuimares",
    password:"",
    host: "localhost",
    port: 3001,
    database: "todoList"
});

module.exports = pool