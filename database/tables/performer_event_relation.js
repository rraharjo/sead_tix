import Table from "./table.js";

class PerformerEventRelation extends Table{
    constructor(){
        super("performer_event_relation", "per");
        this.performerID = "performer_id";
        this.eventID = "event_id";
    }
}

export default PerformerEventRelation;