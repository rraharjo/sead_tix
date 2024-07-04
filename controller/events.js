import RequestParser from "../request/event_request.js";

class EventsController {
    constructor() {
        this.requestParser = new RequestParser();
    }

    parseRes = async (parseReq, req, res) => {
        try {
            const obj = await parseReq(req);
            if (obj && obj.length != 0) {
                res.json(obj);
            }
            else {
                res.status(404)
                    .send({
                        "msg": "Object not found",
                        "parameter": req.params,
                        "body": req.body
                    }
                    );
            }
        }
        catch (e) {
            console.log(e);
            res.status(500)
                .send({ "msg": e });
        }
    }

    getAllEvents = async (req, res) => {
        this.parseRes(this.requestParser.getAllEvents, req, res);
    }

    getSpecificClassification = async (req, res) => {
        this.parseRes(this.requestParser.getSpecificClassification, req, res);
    }

    getSpecificType = async (req, res) => {
        this.parseRes(this.requestParser.getSpecificType, req, res)
    }

    getSpecificLeague = async (req, res) => {
        this.parseRes(this.requestParser.getSpecificLeague, req, res);
    }

    getSpecificEvent = async (req, res) => {
        this.parseRes(this.requestParser.getSpecificEvent, req, res);
    }

    addEvent = async (req, res) => {
        this.parseRes(this.requestParser.addEvent, req, res);
    }

    patchEvent = async (req, res) => {
        this.parseRes(this.requestParser.patchEvent, req, res);
    }

    deleteEvent = async (req, res) => {
        this.parseRes(this.requestParser.deleteEvent, req, res);
    }
}








export default EventsController;