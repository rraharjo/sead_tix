import Table from "./table.js";

class EventTypeTable extends Table{
    constructor(){
        super("event_type_table", "ett");
        this.typeID = "event_type_id";
        this.typeName = "event_type_name";
        this.classificationID = "event_classification_id";
    }
}

export default EventTypeTable;