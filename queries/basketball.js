const table_names = require("../database/table_name");
const getAllBasketball = 
    `select 
        et.event_id,
        et.event_name,
        et.event_date,
        et.event_popularity,
        et.max_capacity,
        vt.venue_name,
        ett.event_type_name,
        elt.event_league_name,
        ec.event_classification_name
    from ${table_names.event_table} et
    left join ${table_names.venue} vt
        on vt.venue_id = et.venue_id
    left join ${table_names.event_league} elt 
        on et.event_league_id = elt.event_league_id
    left join ${table_names.event_type} ett 
        on elt.event_type_id = ett.event_type_id
    left join ${table_names.event_classification} ec
        on ett.event_classification_id = ec.event_classification_id
    where lower(ett.event_type_name) = lower($1);`

const getSpecificLeague = 
    `select 
        et.event_id,
        et.event_name,
        et.event_date,
        et.event_popularity,
        et.max_capacity,
        vt.venue_name,
        ett.event_type_name,
        elt.event_league_name
    from ${table_names.event_table} et
    left join ${table_names.venue} vt
        on vt.venue_id = et.venue_id
    left join ${table_names.event_league} elt 
        on et.event_league_id = elt.event_league_id
    left join ${table_names.event_type} ett 
        on elt.event_type_id = ett.event_type_id
    where lower(ett.event_type_name) = lower($1)
        and lower(elt.event_league_name) = lower($2);`

const getSpecificMatch = 
    `select 
        et.event_id,
        et.event_name,
        et.event_date,
        et.event_popularity,
        et.max_capacity,
        vt.venue_name,
        ett.event_type_name,
        elt.event_league_name
    from ${table_names.event_table} et
    left join ${table_names.venue} vt
        on vt.venue_id = et.venue_id
    left join ${table_names.event_league} elt 
        on et.event_league_id = elt.event_league_id
    left join ${table_names.event_type} ett 
        on elt.event_type_id = ett.event_type_id
    where lower(ett.event_type_name) = lower($1)
        and et.event_id = $2;`

const insertSpecificEvent = "insert into specified_event_table (event_league_id, event_name, event_date, event_description, event_popularity, max_capacity) values ($1, $2, $3, $4, 0, $5) returning *;"
const insertGeneralEvent = "insert into all_event_table (event_id, event_league_id) values ($1, $2) returning *;"


module.exports = {getAllBasketball, getSpecificLeague, getSpecificMatch, insertSpecificEvent, insertGeneralEvent};