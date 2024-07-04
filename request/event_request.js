const Queries = require("../queries/events");
const pool = require("../database/db");

class EventRequestParser{
    constructor(){
        this.test = "hello";
        this.query = new Queries();
    }
    
    async getAllEvents(req) {
        console.log(this.test);
        const values = await pool.query(
            this.query.getAllEvents()
        );
        return values.rows;
    }
    async getSpecificClassification(req) {
        const classification = properQueryStr(req.params.classification);
        const values = await pool.query(
            this.query.getSpecificClassification(classification)
        );
        return values.rows;
    }
    async getSpecificType(req) {
        const classification = properQueryStr(req.params.classification);
        const type = properQueryStr(req.params.type);
        const values = await pool.query(
            this.query.getSpecificType(classification, type)
        );
        return values.rows;
    }
    async getSpecificLeague(req) {
        const classification = properQueryStr(req.params.classification);
        const type = properQueryStr(req.params.type);
        const league = properQueryStr(req.params.league);
        const values = await pool.query(
            this.query.getSpecificLeague(classification, type, league)
        );
        return values.rows;
    }

    async getSpecificEvent(req) {
        const id = properQueryInt(req.params.id);
        const values = await pool.query(
            this.query.getSpecificEvent(id)
        );
        return values.rows;
    }
    async addEvent(req) {
        const leagueID = properQueryInt(req.body.league_id);
        const eventName = properQueryStr(req.body.event_name);
        const eventDate = properQueryStr(req.body.event_date);
        const eventDescription = properQueryStr(req.body.event_description);
        const eventPopularity = setZeroIfNull(req.body.event_popularity);
        const maxCapacity = setZeroIfNull(req.body.max_capacity);
        const venueID = properQueryInt(req.body.venue_id);
        const values = await pool.query(
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
        return values.rows;
    }

    patchEvent = async (req) => {
        const eventID = properQueryInt(req.params.id);
        const eventName = properQueryStr(req.body.event_name);
        const eventDate = properQueryStr(req.body.event_date);
        const eventDescription = properQueryStr(req.body.event_description);
        const eventPopularity = properQueryInt(req.body.event_popularity);
        const maxCapacity = properQueryInt(req.body.max_capacity);
        const venueID = properQueryInt(req.body.venue_id);
        const values = await pool.query(
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
        return values.rows;
    }
    
    deleteEvent = async (req) => {
        const eventID = properQueryInt(req.params.id);
        const values = await pool.query(
            this.query.deleteEvent(eventID)
        );
        return values.rows;
    }
}

const properQueryStr = (theStr) => {
    return theStr ? "'" + theStr + "'" : null;
};

const properQueryInt = (theInt) => {
    return theInt ? parseInt(theInt) : null;
};

const setZeroIfNull = (theInt) => {
    return theInt ? parseInt(theInt) : 0;
}

module.exports = EventRequestParser;