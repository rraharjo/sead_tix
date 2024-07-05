import Table from "./table.js";

class EventClassificationTable extends Table{
    constructor(){
        super("event_classification_table", "ect");
        this.classificationID = "event_classification_id";
        this.classificationName = "event_classification_name";
    }
}

export default EventClassificationTable;