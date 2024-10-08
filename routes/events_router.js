import { Router } from 'express';
import EventsController from "../controller/events_controller.js";

const router = Router();

const eventsController = new EventsController();

router.route("/id")
    .get(eventsController.getAllEvents)
    .post(eventsController.addEvent);

router.route("/id/:id")
    .get(eventsController.getSpecificEvent)
    .patch(eventsController.patchEvent)
    .delete(eventsController.deleteEvent);

router.route("/classifications/")
    .get(eventsController.getAllClassifications);

router.route("/classifications/:classification/")
    .get(eventsController.getClassificationsTypes);

router.route("/classifications/:classification/:type/")
    .get(eventsController.getTypesLeague);

router.route("/description/:id")
    .get(eventsController.getSingleDescription);

router.route("/pictures/:id")
    .get(eventsController.getSinglePicture);

router.route("/search")
    .get(eventsController.getEventsSearchByName)

/*router.route("/location/:state")
    .get(eventsController.getSpecificState);

router.route("/location/:state/:city")
    .get(eventsController.getSpecificCity);

router.route("/location/:state/:city/:venue")
    .get(eventsController.getSpecificVenue);

router.route("/performer/:performerName")
    .get(eventsController.getSpecificPerformer);*/


export default router;