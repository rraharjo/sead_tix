import table_names from "../database/table_name.js";

class EventQueries {
    constructor() {
        this.table_names = table_names;
    }

    getGetBasicTemplate() {
        return `
        select 
            et.event_id,
            et.event_name,
            et.event_date,
            et.event_popularity,
            et.max_capacity,
            et.event_description,
            ect.event_classification_name,
            ett.event_type_name,
            elt.event_league_name,
            vt.venue_name
        from ${this.table_names.event_table} et
        left join ${this.table_names.event_league} elt
            on elt.event_league_id = et.event_league_id
        left join ${this.table_names.event_type} ett
            on ett.event_type_id = elt.event_type_id
        left join ${this.table_names.event_classification} ect
            on ett.event_classification_id = ect.event_classification_id
        left join ${this.table_names.venue} vt
            on vt.venue_id = et.venue_id`;
    }
    getAllEvents() {
        return this.getGetBasicTemplate() + `;`;
    }

    getSpecificClassification(classificationName) {
        return this.getGetBasicTemplate() +
            " " +
            `where lower(ect.event_classification_name) = lower(${classificationName});`;
    }

    getSpecificType(classificationName, typeName) {
        return this.getGetBasicTemplate() + " " +
            `where lower(ect.event_classification_name) = lower(${classificationName})
                    and lower(ett.event_type_name) = lower(${typeName});`;
    }

    getSpecificLeague(classificationName, typeName, leagueName) {
        return this.getGetBasicTemplate() + " " +
            `where lower(ect.event_classification_name) = lower(${classificationName})
                and lower(ett.event_type_name) = lower(${typeName})
                and lower(elt.event_league_name) = lower(${leagueName});`
    }

    getSpecificEvent(eventID) {
        return this.getGetBasicTemplate() + " " +
            `where event_id = ${eventID};`;
    }

    insertEvent(valuesList) {
        return `
        insert into
        event_table(
            event_league_id, 
            event_name, 
            event_date, 
            event_description, 
            event_popularity, 
            max_capacity, 
            venue_id)
        values(
            ${valuesList[0]}, 
            ${valuesList[1]}, 
            ${valuesList[2]}, 
            ${valuesList[3]}, 
            ${valuesList[4]},
            ${valuesList[5]},
            ${valuesList[6]})
        returning *;`
    }

    modifyEvent(valuesList) {
        return`
        update event_table
        set 
            event_name =
                case 
                    when ${valuesList[1]} is null then event_name
                    else ${valuesList[1]}
                end,
            event_date = 
                case 
                    when ${valuesList[2]} is null then event_date
                    else ${valuesList[2]}
                end,
            event_description = 
                case 
                    when ${valuesList[3]} is null then event_description
                    else ${valuesList[3]}
                end,
            event_popularity = 
                case 
                    when ${valuesList[4]} is null then event_popularity
                    else ${valuesList[4]}
                end,
            max_capacity = 
                case 
                    when ${valuesList[5]} is null then max_capacity
                    else ${valuesList[5]}
                end,
            venue_id = 
                case 
                    when ${valuesList[6]} is null then venue_id
                    else ${valuesList[6]}
                end
        where event_id = ${valuesList[0]}
        returning *;`
    }

    deleteEvent(eventID){//delete ticket and performer_event_relation first
        return`
        delete from event_table
        where event_id = ${eventID}
        returning *;
        `
    }
}

export default EventQueries;