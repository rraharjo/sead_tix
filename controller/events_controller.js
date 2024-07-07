import EventRequestParser from "../request/event_request.js";
import Controller from "./controller.js";

class EventsController extends Controller{
    constructor() {
        super(new EventRequestParser());
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

    getSpecificState = async (req, res) => {
        this.parseRes(this.requestParser.getSpecificState, req, res);
    }

    getSpecificCity = async (req, res) => {
        this.parseRes(this.requestParser.getSpecificCity, req, res);
    }

    getSpecificVenue = async (req, res) => {
        this.parseRes(this.requestParser.getSpecificVenue, req, res);
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