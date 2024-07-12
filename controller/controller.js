import Query from "../queries/query.js";
import pool from "../database/db.js";

class Controller {
    constructor(query) {
        /** @type {Query} */
        this.query = query;
        this.pool = pool;
    }

    successfulResponse = (obj, res) => {
        const status = 200;
        res.status(status).json(
            {
                "status": status,
                "return_value": obj
            }
        );
    }

    notFoundResponse = (req, res) => {
        const status = 404;
        res.status(status)
            .json(
                {
                    "status": status,
                    "msg": "Object not found",
                    "parameter": req.params,
                    "body": req.body
                }
            );
    } 

    errorResponse = (error, res) => {
        const status = 500;
        res.status(status)
            .json(
                {
                    "status": status,
                    "msg": error
                }
            );
    }
    parseRes = async (parseReq, req, res) => {
        try {
            var status;
            const obj = await parseReq(req);
            if (obj && obj.length != 0) {
                status = 200;
                res.status(status).json(
                    {
                        "status": status,
                        "return_value": obj
                    }
                );
            }
            else {
                status = 404;
                res.status(status)
                    .json(
                        {
                            "status": status,
                            "msg": "Object not found",
                            "parameter": req.params,
                            "body": req.body
                        }
                    );
            }
        }
        catch (e) {
            const status = 500;
            res.status(status)
                .json(
                    {
                        "status": status,
                        "msg": e
                    }
                );
        }
    }
}

export default Controller;