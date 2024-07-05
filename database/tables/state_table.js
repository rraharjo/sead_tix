import Table from "./table.js";

class StateTable extends Table{
    constructor(){
        super("state_table", "st");
        this.stateID = "state_id";
        this.stateName = "state_name";
    }
}

export default StateTable;