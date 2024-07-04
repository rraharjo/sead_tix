const RequestParser = require("../../request/event_request");

var requestParser = new RequestParser();

const parseRes = async (parseReq, req, res) => {
    try{
        const obj = await parseReq(req);
        if (obj && obj.length != 0){
            res.json(obj);
        }
        else{
            res.send("error");
        }
    }
    catch (e) {
        console.log(e);
        res.status(500)
            .send({"msg": e});
    }
}


const getAllEvents = async (req, res) => {
    parseRes(requestParser.getAllEvents, req, res);
}

const getSpecificClassification = async (req, res) => {
    parseRes(requestParser.getSpecificClassification, req, res);
}

const getSpecificType = async (req, res) => {
    parseRes(requestParser.getSpecificType, req, res)
}

const getSpecificLeague = async (req, res) => {
    parseRes(requestParser.getSpecificLeague, req, res);
}

const getSpecificEvent = async (req, res) => {
    parseRes(requestParser.getSpecificEvent, req, res);
}

const addEvent = async (req, res) => {   
    parseRes(requestParser.addEvent, req, res);
}

const patchEvent = async (req, res) => {  
    parseRes(requestParser.patchEvent, req, res);
}

const deleteEvent = async (req, res) => {  
    parseRes(requestParser.deleteEvent, req, res);
}



module.exports = { getAllEvents, getSpecificClassification, getSpecificType, getSpecificLeague, getSpecificEvent, addEvent, patchEvent, deleteEvent};