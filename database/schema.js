import CityTable from "./tables/city_table.js";
import CustomerTable from "./tables/customer_table.js";
import EventClassificationTable from "./tables/event_classification_table.js";
import EventLeagueTable from "./tables/event_league_table.js";
import EventTable from "./tables/event_table.js";
import EventTypeTable from "./tables/event_type_table.js";
import PerformerEventRelation from "./tables/performer_event_relation.js";
import PerformerTable from "./tables/performer_table.js";
import StateTable from "./tables/state_table.js";
import TicketPrice from "./tables/ticket_price.js";
import TicketTable from "./tables/ticket_table.js";
import VenueTable from "./tables/venue_table.js";
import EventRulesTable from "./tables/event_rules_table.js";
import BookingTable from "./tables/booking_table.js";

class Schema{
    /** @type {Schema} */
    static #schema = null;

    /** @type {Schema} */
    static getInstance = () => {
        if (!Schema.#schema){
            Schema.#schema = new Schema();
        }
        return Schema.#schema;
    }

    /** @private */
    constructor(){
        this.cityTable = new CityTable();
        this.customerTable = new CustomerTable();
        this.eventClassificationTable = new EventClassificationTable();
        this.eventLeagueTable = new EventLeagueTable();
        this.eventTable = new EventTable();
        this.eventTypeTable = new EventTypeTable();
        this.performerEventRelation = new PerformerEventRelation();
        this.performerTable = new PerformerTable();
        this.stateTable = new StateTable();
        this.ticketPrice = new TicketPrice();
        this.ticketTable = new TicketTable();
        this.venueTable = new VenueTable();
        this.eventRulesTable = new EventRulesTable();
        this.bookingTable = new BookingTable();
    }
}

export default Schema;