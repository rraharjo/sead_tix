const pool = require("../../database/db");
const queries = require("../../queries/basketball");

const eventType = "basketball";


const getAllLeagues = async (req, res) => {
    try {
        const values = await pool.query(
            queries.getAllBasketball,
            [eventType]);
        if (values.rows) {
            res.json(values.rows);
        }
        else {
            res.send("error");
        }
    }
    catch (e) {
        res.status(500)
            .send({ "msg": e });
    }
}

const getSpecifiedLeague = async (req, res) => {
    try {
        const league = req.params.league;
        const values = await pool.query(
            queries.getSpecificLeague,
            [eventType, league]);
        if (values.rows) {
            res.json(values.rows);
        }
        else {
            res.send("error");
        }
    }
    catch (e) {
        res.status(500)
            .send({ "msg": e });
    }
}

const getSpecifiedMatch = async (req, res) => {
    try {
        const id = req.params.id;
        const values = await pool.query(
            queries.getSpecificMatch,
        [eventType, id]);
        if (values.rows) {
            res.json(values.rows);
        }
        else {
            res.send("error");
        }
    }
    catch (e) {
        res.status(500)
            .send({ "msg": e });
    }
}

const addMatch = async (req, res) => {
    try {
        const league_id = req.body.league_id;
        const event_name = req.body.event_name;
        const event_date = req.body.event_date;
        const description = req.body.event_description;
        const max_capacity = req.body.max_capacity;
        const result = await pool.query(
            queries.insertSpecificEvent,
            [league_id,
                event_name,
                event_date,
                description,
                max_capacity]);
        const specific_id = result.rows[0].event_id;
        const general_result = await pool.query(
            queries.insertGeneralEvent,
            [specific_id, league_id]
        );
        if (general_result) {
            res.json(general_result.rows[0]);
        }
        else {
            res.send("error")
        }
    }
    catch (e) {
        res.status(500)
            .json({ "msg": e })
    }
}

module.exports = { getSpecifiedLeague, getAllLeagues, getSpecifiedMatch, addMatch };