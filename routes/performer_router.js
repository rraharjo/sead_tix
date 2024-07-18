import { Router } from 'express';
import PerformerController from "../controller/performer_controller.js";

const router = Router();

//get all types
//for each type get all league

//for each type make a new route
// e.g /basketball, /soccer
//for each available league, make new route
// e.g. /basketball/nba, basketball/wnba, /soccer/uefa, /soccer/fifawcup

const eventsController = new PerformerController();
    



export default router;