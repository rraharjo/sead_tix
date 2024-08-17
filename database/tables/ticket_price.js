import Table from "./table.js";

class TicketPrice extends Table{
    constructor(){
        super("ticket_price", "tp");
        this.eventID = "event_id";
        this.ticketType = "ticket_type";
        this.ticketPrice = "ticket_price";
    }
}

export default TicketPrice;