import Controller from "./controller.js";
import PerformerQuery from "../queries/performer_query.js";
import QueryUtil from "../util/query_util.js";

//not sure if this is necessary
class PerformerController extends Controller{
    constructor() {
        super(new PerformerQuery());
    }

    
}

export default PerformerController;