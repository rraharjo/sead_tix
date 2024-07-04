class Controller {
    constructor(requestParser) {
        this.requestParser = requestParser;
    }

    parseRes = async (parseReq, req, res) => {
        try {
            const obj = await parseReq(req);
            if (obj && obj.length != 0) {
                res.json(obj);
            }
            else {
                const status = 404
                res.status(status)
                    .send(
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
            console.log(e);
            const status = 500
            res.status(status)
                .send(
                    {
                        "msg": e,
                        "status": status
                    }
                );
        }
    }
}

export default Controller;