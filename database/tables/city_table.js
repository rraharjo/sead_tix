import Table from "./table.js";

class CityTable extends Table{
    constructor(){
        super("city_table", "ct");
        this.cityID = "city_id";
        this.cityName = "city_name";
        this.stateID = "state_id";
    }
}

export default CityTable;