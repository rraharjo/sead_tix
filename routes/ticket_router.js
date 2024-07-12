import { Router } from 'express';
import TicketController from "../controller/ticket_controller.js";

const router = Router();

const ticketController = new TicketController();

router.route("/types/:eventID")
    .get(ticketController.getTicketTypes)
    .post(ticketController.addNewTicketType)
    .patch(ticketController.renameTicketType);

router.route("/types/:eventID/:ticketType")
    .get(ticketController.getSingleTicketType)
    .patch(ticketController.updateTicketPrice);

router.route("/tickets/:eventID")
    .get(ticketController.getSpecificEvent);

router.route("/tickets/:eventID/:ticketType")
    .get(ticketController.getSpecificTicketType)
    .post(ticketController.addNewTicket);

router.route("/ticketid/:ticketID")
    .get(ticketController.getSpecificTicket);

router.route("/buy/:ticketID")
    .patch(ticketController.buyTicket)
    //buy


export default router;