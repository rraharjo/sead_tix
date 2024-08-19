import Table from "./table.js";

class EventRulesTable extends Table{
    constructor(){
        super("event_rules_table", "ert");
        this.rulesID = "rule_id";
        this.eventID = "event_id";
        this.rules = "rules";
        this.allowed = "allowed"
    }
}

export default EventRulesTable;