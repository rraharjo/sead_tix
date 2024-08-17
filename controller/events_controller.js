import Controller from "./controller.js";
import EventQuery from "../queries/events_query.js";
import QueryUtil from "../util/query_util.js";

class EventsController extends Controller {
    constructor() {
        super(new EventQuery());
    }

    getAllEvents = async (req, res) => {
        const filterClassification = (filter, placeholder, element) => {
            if (element.event_classification_name.toLowerCase() === filter.toLowerCase()) {
                placeholder.push(element);
            }
            return placeholder;
        }
        const filterType = (filter, placeholder, element) => {
            if (element.event_type_name.toLowerCase() === filter.toLowerCase()) {
                placeholder.push(element);
            }
            return placeholder;
        }
        const filterLeague = (filter, placeholder, element) => {
            if (element.event_league_name.toLowerCase() === filter.toLowerCase()) {
                placeholder.push(element);
            }
            return placeholder;
        }
        const filterCity = (filter, placeholder, element) => {
            if (element.city_name.toLowerCase() === filter.toLowerCase()) {
                placeholder.push(element);
            }
            return placeholder;
        }
        const filterState = (filter, placeholder, element) => {
            if (element.state_name.toLowerCase() === filter.toLowerCase()) {
                placeholder.push(element);
            }
            return placeholder;
        }
        try {
            const queryReturn = await this.pool.query(
                this.query.getAllEvents()
            );
            var value = queryReturn.rows;
            const filters = req.query;
            if (filters.classification) {
                value = value.reduce(
                    filterClassification.bind(null, filters.classification),
                    []
                );
            }
            if (filters.type) {
                value = value.reduce(
                    filterType.bind(null, filters.type),
                    []
                )
            }
            if (filters.league) {
                value = value.reduce(
                    filterLeague.bind(null, filters.league),
                    []
                )
            }
            if (filters.state) {
                value = value.reduce(
                    filterState.bind(null, filters.state),
                    []
                )
            }
            if (filters.city) {
                value = value.reduce(
                    filterCity.bind(null, filters.city),
                    []
                )
            }
            if (value) {
                this.successfulResponse(value, res);
            }
            else {
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    getAllClassifications = async (req, res) => {
        try {
            const queryReturn = await this.pool.query(
                this.query.getAllClassifications()
            );
            var value = queryReturn.rows;
            value = value.map((elem) => elem.event_classification_name);
            if (value && value.length > 0) {
                this.successfulResponse(value, res);
            }
            else {
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    getClassificationsTypes = async (req, res) => {
        try {
            const classification = QueryUtil.properQueryStr(req.params.classification);
            const queryReturn = await this.pool.query(
                this.query.getClassificationsTypes(classification)
            );
            var value = queryReturn.rows;
            value = value.map(elem => elem.event_type_name);
            if (value) {
                this.successfulResponse(value, res);
            }
            else {
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    getTypesLeague = async (req, res) => {
        try {
            const classification = QueryUtil.properQueryStr(req.params.classification);
            const type = QueryUtil.properQueryStr(req.params.type);
            const queryReturn = await this.pool.query(
                this.query.getTypesLeague(classification, type)
            );
            var value = queryReturn.rows;
            value = value.map(elem => elem.event_league_name);
            if (value && value.length > 0) {
                this.successfulResponse(value, res);
            }
            else {
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    getSpecificEvent = async (req, res) => {
        try {
            const id = QueryUtil.properQueryInt(req.params.id);
            const queryReturn = await this.pool.query(
                this.query.getSpecificEvent(id)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0) {
                this.successfulResponse(value, res);
            }
            else {
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    getSpecificState = async (req, res) => {
        try {
            const state = QueryUtil.properQueryStr(req.params.state);
            const queryReturn = await this.pool.query(
                this.query.getSpecificState(state)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0) {
                this.successfulResponse(value, res);
            }
            else {
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    getSpecificCity = async (req, res) => {
        try {
            const state = QueryUtil.properQueryStr(req.params.state);
            const city = QueryUtil.properQueryStr(req.params.city);
            const queryReturn = await this.pool.query(
                this.query.getSpecificCity(state, city)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0) {
                this.successfulResponse(value, res);
            }
            else {
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    getSpecificVenue = async (req, res) => {
        try {
            const state = QueryUtil.properQueryStr(req.params.state);
            const city = QueryUtil.properQueryStr(req.params.city);
            const venue = QueryUtil.properQueryStr(req.params.venue);
            const queryReturn = await this.pool.query(
                this.query.getSpecificVenue(state, city, venue)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0) {
                this.successfulResponse(value, res);
            }
            else {
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    getSpecificPerformer = async (req, res) => {
        try {
            const queryReturn = await this.pool.query(
                this.query.getSpecificPerformer(performerName)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0) {
                this.successfulResponse(value, res);
            }
            else {
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    addEvent = async (req, res) => {
        try {
            const leagueID = QueryUtil.properQueryInt(req.body.league_id);
            const eventName = QueryUtil.properQueryStr(req.body.event_name);
            const eventDate = QueryUtil.properQueryStr(req.body.event_date);
            const eventDescription = QueryUtil.properQueryStr(req.body.event_description);
            const eventPopularity = QueryUtil.setZeroIfNull(req.body.event_popularity);
            const maxCapacity = QueryUtil.setZeroIfNull(req.body.max_capacity);
            const venueID = QueryUtil.properQueryInt(req.body.venue_id);
            const queryReturn = await this.pool.query(
                this.query.insertEvent(
                    [leagueID,
                        eventName,
                        eventDate,
                        eventDescription,
                        eventPopularity,
                        maxCapacity,
                        venueID
                    ]
                )
            );
            const value = queryReturn.rows;
            if (value && value.length > 0) {
                this.successfulResponse(value, res);
            }
            else {
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    patchEvent = async (req, res) => {
        try {
            const eventID = QueryUtil.properQueryInt(req.params.id);
            const eventName = QueryUtil.properQueryStr(req.body.event_name);
            const eventDate = QueryUtil.properQueryStr(req.body.event_date);
            const eventDescription = QueryUtil.properQueryStr(req.body.event_description);
            const eventPopularity = QueryUtil.properQueryInt(req.body.event_popularity);
            const maxCapacity = QueryUtil.properQueryInt(req.body.max_capacity);
            const venueID = QueryUtil.properQueryInt(req.body.venue_id);
            const queryReturn = await this.pool.query(
                this.query.modifyEvent(
                    [eventID,
                        eventName,
                        eventDate,
                        eventDescription,
                        eventPopularity,
                        maxCapacity,
                        venueID
                    ]
                )
            );
            const value = queryReturn.rows;
            if (value && value.length > 0) {
                this.successfulResponse(value, res);
            }
            else {
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }

    deleteEvent = async (req, res) => {
        try {
            const eventID = QueryUtil.properQueryInt(req.params.id);
            const queryReturn = await this.pool.query(
                this.query.deleteEvent(eventID)
            );
            const value = queryReturn.rows;
            if (value && value.length > 0) {
                this.successfulResponse(value, res);
            }
            else {
                this.notFoundResponse(req, res);
            }
        }
        catch (e) {
            this.errorResponse(e, res);
        }
    }
}

export default EventsController;