import Controller from "./controller.js";
import SearchQuery from "../queries/search_query.js";
import QueryUtil from "../util/query_util.js";

class SearchController extends Controller{
    constructor() {
        super(new SearchQuery());
    }

    getEventsByName = async (req, res) => {
        try{
            const searchParam = req.query.search;
            const searchParams = searchParam.split(" ");
            searchParams.map((element) => {return element.toLowerCase()});
            const queryReturn = await this.pool.query(
                this.query.getEventByName(searchParams)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0){
                this.successfulResponse(value, res);
            }
            else{
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    getEventsByDate = async (req, res) => {
        try{
            const from = QueryUtil.properQueryStr(req.query.fromDate);
            const to = QueryUtil.properQueryStr(req.query.toDate);
            const queryReturn = await this.pool.query(
                this.query.getEventsByDate(from, to)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0){
                this.successfulResponse(value, res);
            }
            else{
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    
}

export default SearchController;