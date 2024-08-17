import Table from "./table.js";

class VenueTable extends Table{
    constructor(){
        super("venue_table", "vt");
        this.venueID = "venue_id";
        this.venueName = "venue_name";
        this.maxCapacity = "max_capacity";
        this.venueAddress = "venue_address";
        this.cityID = "city_id";
    }
}

export default VenueTable;