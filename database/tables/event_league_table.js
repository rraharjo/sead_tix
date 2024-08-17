import Table from "./table.js";

class EventLeagueTable extends Table{
    constructor(){
        super("event_league_table", "elt");
        this.leagueID = "event_league_id";
        this.leagueName = "event_league_name";
        this.typeID = "event_type_id";
    }
}

export default EventLeagueTable;