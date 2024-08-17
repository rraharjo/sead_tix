import Table from "./table.js";

class CustomerTable extends Table{
    constructor(){
        super("customer_table", "cut");
        this.customerID = "customer_id";
        this.firstName = "first_name";
        this.lastName = "last_name";
        this.dob = "date_of_birth";
    }
}

export default CustomerTable;