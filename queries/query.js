import table_names from "../database/table_name.js";
import Schema from "../database/schema.js";

class Query {
    constructor(){
        /** @type {Schema} */
        this.schema = Schema.getInstance();
    }
}

export default Query;