const pg = require('pg');
const pass = require("../pass/pass");
const Pool = pg.Pool;

const pool = new Pool(
    {
        user: "postgres",
        password: `${pass.postgresql}`,
        host: "localhost",
        port: 5432,
        database: "sead_tix"
    }
);

module.exports = pool;