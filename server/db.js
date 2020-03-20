const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres", 
    password: "saxdude135", 
    host: "localhost", 
    port: 5432, 
    database: "perntodo"
});


module.exports = pool;