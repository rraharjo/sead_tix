import TicketQuery from "../queries/ticket_query.js";
import RequestParser from "./request.js";

class TicketRequestParser extends RequestParser {
    constructor() {
        super(new TicketQuery());
    }

    getSpecificEvent = async (req) => {
        const eventID = properQueryInt(req.params.eventID);
        const values = await this.pool.query(
            this.query.getSpecificEvent(eventID)
        );
        return values.rows;
    }

    getSpecificTicketType = async (req) => {
        const eventID = properQueryInt(req.params.eventID);
        const ticketType = properQueryStr(req.params.ticketType);
        const values = await this.pool.query(
            this.query.getSpecificTicketType(eventID, ticketType)
        );
        return values.rows; 
    }

    addNewTicket = async (req) => {
        const eventID = properQueryInt(req.params.eventID);
        const ticketType = properQueryStr(req.params.ticketType);
        const numOfTicket = properQueryInt(req.body.number_of_ticket);
        const values = await this.pool.query(
            this.query.addNewTicket(eventID, ticketType, numOfTicket)
        );
        const responseMsg = {
            "ticket_inserted": numOfTicket
        };
        return values.rows;
        //return responseMsg;
    }

    getSpecificTicket = async (req) => {
        const ticketID = properQueryInt(req.params.ticketID);
        const values = await this.pool.query(
            this.query.getSpecificTicket(ticketID)
        );
        return values.rows;
    }

    getTicketTypes = async (req) => {
        const eventID = properQueryInt(req.params.eventID);
        const values = await this.pool.query(
            this.query.getTicketTypes(eventID)
        );
        return values.rows;
    }

    addNewTicketType = async (req) => {
        const eventID = properQueryInt(req.params.eventID);
        const ticketType = properQueryStr(req.body.ticket_type);
        const ticketPrice = properQueryFloat(req.body.ticket_price);
        const values = await this.pool.query(
            this.query.addNewTicketType(eventID, ticketType, ticketPrice)
        );
        return values.rows;
    }

    renameTicketType = async (req) => {
        const eventID = properQueryInt(req.params.eventID);
        const newTicketType = properQueryStr(req.body.new_ticket_type);
        const oldTicketType = properQueryStr(req.body.old_ticket_type);
        console.log(this.query.renameTicketType(eventID, oldTicketType, newTicketType));
        const values = await this.pool.query(
            this.query.renameTicketType(eventID, oldTicketType, newTicketType)
        );
        return values.rows;
    }

    getSingleTicketType = async (req) => {
        const eventID = properQueryInt(req.params.eventID);
        const ticketType = properQueryStr(req.params.ticketType);
        const values = await this.pool.query(
            this.query.getSingleTicketType(eventID, ticketType)
        );
        return values.rows;
    }

    updateTicketPrice = async (req) => {
        const eventID = properQueryInt(req.params.eventID);
        const ticketType = properQueryStr(req.params.ticketType);
        const ticketPrice = properQueryFloat(req.body.ticket_price);
        const values = await this.pool.query(
            this.query.updateTicketPrice(eventID, ticketType, ticketPrice)
        );
        return values.rows;
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

export default TicketRequestParser;