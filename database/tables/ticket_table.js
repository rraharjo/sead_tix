import Table from "./table.js";

class TicketTable extends Table{
    constructor(){
        super("ticket_table", "tt");
        this.ticketID = "ticket_id";
        this.ticketType = "ticket_type";
        this.eventID = "event_id";
        this.bookingID = "booking_id";
        this.ticketStatus = "ticket_status";
    }
}

export default TicketTable;