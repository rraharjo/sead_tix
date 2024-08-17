import pg from 'pg';
import password from "../pass/pass.js";

const pool = new pg.Pool(
    {
        user: "postgres",
        password: `${password.postgresql}`,
        host: "localhost",
        port: 5432,
        database: "sead_tix"
    }
);

export default pool;