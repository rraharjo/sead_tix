import pool from "../database/db.js";

class RequestParser{
    constructor (query){
        this.query = query;
        this.pool = pool;
    }
}

export default RequestParser;