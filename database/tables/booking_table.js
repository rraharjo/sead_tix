import Table from "./table.js";

class BookingTable extends Table{
    constructor(){
        super("booking_table", "bt");
        this.bookingID = "booking_id";
        this.bookingDate = "booking_date";
        this.customerID = "customer_id";
    }
}

export default BookingTable;