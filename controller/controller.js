import RequestParser from "../request/request.js";
class Controller {
    constructor(requestParser) {
        /** @type {RequestParser} */
        this.requestParser = requestParser;
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