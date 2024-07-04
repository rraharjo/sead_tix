import Queries from "../queries/events.js";
import pool from "../database/db.js";

class EventRequestParser{
    constructor(){
        this.query = new Queries();
        this.pool = pool;
    }
    getAllEvents = async (req) => {
        const values = await this.pool.query(
            this.query.getAllEvents()
        );
        return values.rows;
    }
    getSpecificClassification = async (req) => {
        const classification = properQueryStr(req.params.classification);
        const values = await this.pool.query( 
            this.query.getSpecificClassification(classification)
        );
        return values.rows;
    }
    getSpecificType = async (req) => {
        const classification = properQueryStr(req.params.classification);
        const type = properQueryStr(req.params.type);
        const values = await this.pool.query(
            this.query.getSpecificType(classification, type)
        );
        return values.rows;
    }
    getSpecificLeague = async (req) => {
        const classification = properQueryStr(req.params.classification);
        const type = properQueryStr(req.params.type);
        const league = properQueryStr(req.params.league);
        const values = await this.pool.query(
            this.query.getSpecificLeague(classification, type, league)
        );
        return values.rows;
    }

    getSpecificEvent = async (req) => {
        const id = properQueryInt(req.params.id);
        const values = await this.pool.query(
            this.query.getSpecificEvent(id)
        );
        return values.rows;
    }
    addEvent = async (req) => {
        const leagueID = properQueryInt(req.body.league_id);
        const eventName = properQueryStr(req.body.event_name);
        const eventDate = properQueryStr(req.body.event_date);
        const eventDescription = properQueryStr(req.body.event_description);
        const eventPopularity = setZeroIfNull(req.body.event_popularity);
        const maxCapacity = setZeroIfNull(req.body.max_capacity);
        const venueID = properQueryInt(req.body.venue_id);
        const values = await this.pool.query( 
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
        const values = await this.pool.query(
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
        const values = await this.pool.query(
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

export default EventRequestParser;