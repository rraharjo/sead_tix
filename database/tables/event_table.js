import Table from "./table.js";

class EventTable extends Table{
    constructor(){
        super("event_table", "et");
        this.eventID = "event_id";
        this.leagueID = "event_league_id";
        this.eventName = "event_name";
        this.eventDate = "event_date";
        this.description = "event_description";
        this.popularity = "event_popularity";
        this.maxCapacity = "max_capacity";
        this.venueID = "venue_id";
    }
}

export default EventTable;