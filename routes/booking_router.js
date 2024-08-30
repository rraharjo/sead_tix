import { Router } from 'express';
import BookingController from "../controller/booking_controller.js";

const router = Router();

//get all types
//for each type get all league

//for each type make a new route
// e.g /basketball, /soccer
//for each available league, make new route
// e.g. /basketball/nba, basketball/wnba, /soccer/uefa, /soccer/fifawcup

const bookingController = new BookingController();

router.route("/id")
    .get(bookingController.getAllBooking)
    .post(bookingController.createNewBooking);

router.route("/id/:id");



export default router;