const pool = require("../../database/db");
const table_names = require("../../database/table_name");

const eventType = "esport";

const getAllLeagues = async (req, res) => {
    try {
        const values = await pool.query(
            `select 
                et.event_id,
                et.event_name,
                et.event_date,
                et.event_popularity,
                et.max_capacity,
                vt.venue_name,
                ett.event_type_name,
                elt.event_league_name
            from ${table_names.all_events} ae 
            left join ${table_names.specific_event} et
                on ae.event_id = et.event_id 
                    and ae.event_league_id = et.event_league_id
            left join ${table_names.venue} vt
                on vt.venue_id = et.venue_id
            left join ${table_names.event_league} elt 
                on et.event_league_id = elt.event_league_id
            left join ${table_names.event_type} ett 
                on elt.event_type_id = ett.event_type_id
            where lower(ett.event_type_name) = lower('${eventType}');`);
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
        console.log(league);
        const values = await pool.query(
            `select 
                et.event_id,
                et.event_name,
                et.event_date,
                et.event_popularity,
                et.max_capacity,
                vt.venue_name,
                ett.event_type_name,
                elt.event_league_name
            from ${table_names.all_events} ae 
            left join ${table_names.specific_event} et
                on ae.event_id = et.event_id 
                    and ae.event_league_id = et.event_league_id
            left join ${table_names.venue} vt
                on vt.venue_id = et.venue_id
            left join ${table_names.event_league} elt 
                on et.event_league_id = elt.event_league_id
            left join ${table_names.event_type} ett 
                on elt.event_type_id = ett.event_type_id
            where lower(ett.event_type_name) = lower('${eventType}')
                and lower(elt.event_league_name) = lower('${league}');`);
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
            `select 
                et.event_id,
                et.event_name,
                et.event_date,
                et.event_popularity,
                et.max_capacity,
                vt.venue_name,
                ett.event_type_name,
                elt.event_league_name
            from ${table_names.all_events} ae 
            left join ${table_names.specific_event} et
                on ae.event_id = et.event_id 
                    and ae.event_league_id = et.event_league_id
            left join ${table_names.venue} vt
                on vt.venue_id = et.venue_id
            left join ${table_names.event_league} elt 
                on et.event_league_id = elt.event_league_id
            left join ${table_names.event_type} ett 
                on elt.event_type_id = ett.event_type_id
            where lower(ett.event_type_name) = lower('${eventType}')
                and et.event_id = ${id};`);
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

module.exports = { getSpecifiedLeague, getAllLeagues, getSpecifiedMatch };