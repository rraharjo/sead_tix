import { Router } from 'express';
import eventController from "../controller/events.js";

const router = Router();

//get all types
//for each type get all league

//for each type make a new route
// e.g /basketball, /soccer
//for each available league, make new route
// e.g. /basketball/nba, basketball/wnba, /soccer/uefa, /soccer/fifawcup

router.route("/")
    
router.route("/id")
    .get(eventController.getAllEvents)
    .post(eventController.addEvent);

router.route("/id/:id")
    .get(eventController.getSpecificEvent)
    .patch(eventController.patchEvent)
    .delete(eventController.deleteEvent);

router.route("/:classification")
    .get(eventController.getSpecificClassification);

router.route("/:classification/:type")
    .get(eventController.getSpecificType);

router.route("/:classification/:type/:league")
    .get(eventController.getSpecificLeague);


export default router;