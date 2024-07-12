import Controller from "./controller.js";
import Mailer from "../mailer/mailer.js";
import TicketQuery from "../queries/ticket_query.js";
import QueryUtil from "../util/query_util.js";

class TicketController extends Controller{
    constructor() {
        super(new TicketQuery());
        this.mailer = new Mailer();
    }

    getSpecificEvent = async (req, res) => {
        try{
            const eventID = QueryUtil.properQueryInt(req.params.eventID);
            const queryReturn = await this.pool.query(
                this.query.getSpecificEvent(eventID)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0){
                this.successfulResponse(value, res);
            }
            else{
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    getSpecificTicketType = async (req, res) => {
        try{
            const eventID = QueryUtil.properQueryInt(req.params.eventID);
            const ticketType = QueryUtil.properQueryStr(req.params.ticketType);
            const queryReturn = await this.pool.query(
                this.query.getSpecificTicketType(eventID, ticketType)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0){
                this.successfulResponse(value, res);
            }
            else{
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    addNewTicket = async (req, res) => {
        try{
            const eventID = QueryUtil.properQueryInt(req.params.eventID);
            const ticketType = QueryUtil.properQueryStr(req.params.ticketType);
            const numOfTicket = QueryUtil.properQueryInt(req.body.number_of_ticket);
            const queryReturn = await this.pool.query(
                this.query.addNewTicket(eventID, ticketType, numOfTicket)
            );
            /*const responseMsg = {
                "ticket_inserted": numOfTicket
            };*/
            const value = queryReturn.rows;
            if (value && value.length > 0){
                this.successfulResponse(value, res);
            }
            else{
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    getSpecificTicket = async (req, res) => {
        try{
            const ticketID = QueryUtil.properQueryInt(req.params.ticketID);
            const queryReturn = await this.pool.query(
                this.query.getSpecificTicket(ticketID)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0){
                this.successfulResponse(value, res);
            }
            else{
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    getTicketTypes = async (req, res) => {
        try{
            const eventID = QueryUtil.properQueryInt(req.params.eventID);
            const queryReturn = await this.pool.query(
                this.query.getTicketTypes(eventID)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0){
                this.successfulResponse(value, res);
            }
            else{
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    addNewTicketType = async (req, res) => {
        try{
            const eventID = QueryUtil.properQueryInt(req.params.eventID);
            const ticketType = QueryUtil.properQueryStr(req.body.ticket_type);
            const ticketPrice = QueryUtil.properQueryFloat(req.body.ticket_price);
            const queryReturn = await this.pool.query(
                this.query.addNewTicketType(eventID, ticketType, ticketPrice)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0){
                this.successfulResponse(value, res);
            }
            else{
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    renameTicketType = async (req, res) => {
        try{
            const eventID = QueryUtil.properQueryInt(req.params.eventID);
            const newTicketType = QueryUtil.properQueryStr(req.body.new_ticket_type);
            const oldTicketType = QueryUtil.properQueryStr(req.body.old_ticket_type);
            const queryReturn = await this.pool.query(
                this.query.renameTicketType(eventID, oldTicketType, newTicketType)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0){
                this.successfulResponse(value, res);
            }
            else{
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    getSingleTicketType = async (req, res) => {
        try{
            const eventID = QueryUtil.properQueryInt(req.params.eventID);
            const ticketType = QueryUtil.properQueryStr(req.params.ticketType);
            const queryReturn = await this.pool.query(
                this.query.getSingleTicketType(eventID, ticketType)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0){
                this.successfulResponse(value, res);
            }
            else{
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    updateTicketPrice = async (req, res) => {
        try{
            const eventID = QueryUtil.properQueryInt(req.params.eventID);
            const ticketType = QueryUtil.properQueryStr(req.params.ticketType);
            const ticketPrice = QueryUtil.properQueryFloat(req.body.ticket_price);
            const queryReturn = await this.pool.query(
                this.query.updateTicketPrice(eventID, ticketType, ticketPrice)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0){
                this.successfulResponse(value, res);
            }
            else{
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    buyTicket = async (req, res) => {
        try {
            const ticketID = QueryUtil.properQueryInt(req.params.ticketID);
            const buyer = QueryUtil.properQueryInt(req.body.customer_id);
            const recipient = req.body.recipient;
            var values = await this.pool.query(
                this.query.buyTicket(ticketID, buyer)
            );
            const obj = values.rows;
            if (obj && obj.length > 0){
                var emailObj = "Below is your ticket: \n";
                const eventID = QueryUtil.properQueryInt(obj[0].event_id);
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

export default TicketController;