import Controller from "./controller.js";
import LocationQuery from "../queries/location_query.js";
import QueryUtil from "../util/query_util.js";

class LocationController extends Controller {
    constructor() {
        super(new LocationQuery());
    }

    getAllCities = async (req, res) => {
        try {
            const queryReturn = await this.pool.query(
                this.query.getAllCities()
            );
            var value = queryReturn.rows;
            if (value) {
                this.successfulResponse(value, res);
            }
            else {
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    getAllStates = async (req, res) => {
        try {
            const queryReturn = await this.pool.query(
                this.query.getAllStates()
            );
            var value = queryReturn.rows;
            if (value && value.length > 0) {
                this.successfulResponse(value, res);
            }
            else {
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }
}

export default LocationController;