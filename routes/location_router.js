import { Router } from 'express';
import LocationController from "../controller/location_controller.js";

const router = Router();

const locationController = new LocationController();

router.route("/cities")
    .get(locationController.getAllCities);

router.route("/states")
    .get(locationController.getAllStates);


export default router;