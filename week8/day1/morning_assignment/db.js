const Pool = require("pg").Pool;
const pool = new Pool({
    user: "GilGuimaraes",
    password: "",
    host: "localhost",
    port: 5432,
    database: "fruits"
});

module.exports = pool