import { Router } from 'express';
import SearchController from "../controller/search_controller.js";

const router = Router();

const searchController = new SearchController();

router.route("/name")
    .get(searchController.getEventsByName);

router.route("/date")
    .get(searchController.getEventsByDate);


export default router;