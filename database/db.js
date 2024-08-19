import pg from 'pg';
import password from "../pass/pass.js";

const pool = new pg.Pool(
    {
        user: "postgres",
        password: `${password.postgresql}`,
        host: "localhost",
        port: 5432,
        database: "sead_tix",
    }
);
//aws postgres username: SEADMASTER
//aws password: IgnatiusL0y0la
//endpoint: sead-tix.c1qm2m0u0l9f.us-east-2.rds.amazonaws.com
//port: 5432

export default pool;