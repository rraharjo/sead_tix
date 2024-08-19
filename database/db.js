import pg from 'pg';
import {password} from "../.env/pass.js";
import { awsdb } from '../.env/pass.js';

const localPool = new pg.Pool(
    {
        user: "postgres",
        password: `${password.postgresql}`,
        host: "localhost",
        port: 5432,
        database: "sead_tix",
    }
);

const awsPool = new pg.Pool(
    {
        user: awsdb.username,
        password: awsdb.password,
        host: awsdb.endpoint,
        port: awsdb.port,
        database: awsdb.dbname
    }
);


export {localPool, awsPool};