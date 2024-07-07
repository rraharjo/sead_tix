import { Router } from 'express';
import EventsController from "../controller/events_controller.js";

const router = Router();

//get all types
//for each type get all league

//for each type make a new route
// e.g /basketball, /soccer
//for each available league, make new route
// e.g. /basketball/nba, basketball/wnba, /soccer/uefa, /soccer/fifawcup

const eventsController = new EventsController();
    
router.route("/id")
    .get(eventsController.getAllEvents)
    .post(eventsController.addEvent);

router.route("/id/:id")
    .get(eventsController.getSpecificEvent)
    .patch(eventsController.patchEvent)
    .delete(eventsController.deleteEvent);

router.route("/type/:classification")
    .get(eventsController.getSpecificClassification);

router.route("/type/:classification/:type")
    .get(eventsController.getSpecificType);

router.route("/type/:classification/:type/:league")
    .get(eventsController.getSpecificLeague);

router.route("/location/:state")
    .get(eventsController.getSpecificState);

router.route("/location/:state/:city")
    .get(eventsController.getSpecificCity);

router.route("/location/:state/:city/:venue")
    .get(eventsController.getSpecificVenue);


export default router;