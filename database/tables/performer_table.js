import Table from "./table.js";

class PerformerTable extends Table{
    constructor(){
        super("performer_table", "pt");
        this.performerID = "performer_id";
        this.performerName = "performer_name";
    }
}

export default PerformerTable;