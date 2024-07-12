import TicketRequestParser from "../request/ticket_request.js";
import Controller from "./controller.js";
import Mailer from "../mailer/mailer.js";
import TicketQuery from "../queries/ticket_query.js";
import pool from "../database/db.js";

class TicketController extends Controller{
    constructor() {
        super(new TicketRequestParser());
        this.mailer = new Mailer();
        this.query = new TicketQuery();
        this.pool = pool;
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

    buyTicket = async (req, res) => {
        try {
            const ticketID = properQueryInt(req.params.ticketID);
            const buyer = properQueryInt(req.body.customer_id);
            var values = await this.pool.query(
                this.query.buyTicket(ticketID, buyer)
            );
            const obj = values.rows;
            if (obj && obj.length > 0){
                const recipient = req.body.recipient;
                var emailObj = "Below is your ticket: \n";
                const eventID = properQueryInt(obj[0].event_id);
                console.log(obj[0].event_id);
                values = await this.pool.query(this.query.getEventName(eventID)); 
                console.log(values.rows);
                emailObj += "event Name: " + values.rows[0].event_name;
                emailObj += obj[0].ticket_type + "\n";
                emailObj += obj[0].event_id + "\n";
                this.mailer.sendEmail(recipient, emailObj);
                this.successfulResponse(obj, res);
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

const properQueryStr = (theStr) => {
    return theStr ? "'" + theStr + "'" : null;
};

const properQueryInt = (theInt) => {
    return theInt ? parseInt(theInt) : null;
};

const properQueryFloat = (theFloat) => {
    return theFloat ? parseFloat(theFloat) : null;
}

const setZeroIfNull = (theInt) => {
    return theInt ? parseInt(theInt) : 0;
}

export default TicketController;