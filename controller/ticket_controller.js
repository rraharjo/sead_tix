import TicketRequestParser from "../request/ticket_request.js";
import Controller from "./controller.js";

class TicketController extends Controller{
    constructor() {
        super(new TicketRequestParser());
    }

    getSpecificEvent = async (req, res) => {
        this.parseRes(this.requestParser.getSpecificEvent, req, res);
    }

    getSpecificTicketType = async (req, res) => {
        this.parseRes(this.requestParser.getSpecificTicketType, req, res);
    }

    addNewTicket = async (req, res) => {
        this.parseRes(this.requestParser.addNewTicket, req, res);
    }

    getSpecificTicket = async (req, res) => {
        this.parseRes(this.requestParser.getSpecificTicket, req, res);
    }

    getTicketTypes = async (req, res) => {
        this.parseRes(this.requestParser.getTicketTypes, req, res);
    }

    addNewTicketType = async (req, res) => {
        this.parseRes(this.requestParser.addNewTicketType, req, res);
    }

    renameTicketType = async (req, res) => {
        this.parseRes(this.requestParser.renameTicketType, req, res);
    }

    getSingleTicketType = async (req, res) => {
        this.parseRes(this.requestParser.getSingleTicketType, req, res);
    }

    updateTicketPrice = async (req, res) => {
        this.parseRes(this.requestParser.updateTicketPrice, req, res);
    }
}

export default TicketController;