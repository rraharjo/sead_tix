import EventTypeTable from "../database/tables/event_type_table.js";
import TicketPrice from "../database/tables/ticket_price.js";
import Query from "./query.js";

class EventQuery extends Query{
    #getEventsTemplate = () => {
        const stateTable = this.schema.stateTable;
        const cityTable = this.schema.cityTable;
        const performerEventRelation = this.schema.performerEventRelation;
        const performerTable = this.schema.performerTable;
        const eventTable = this.schema.eventTable;
        const eventLeague = this.schema.eventLeagueTable;
        const eventType = this.schema.eventTypeTable;
        const eventClassification = this.schema.eventClassificationTable;
        const venue = this.schema.venueTable;
        const ticketPrice = this.schema.ticketPrice;
        return `
        select 
            et.${eventTable.eventID},
            et.${eventTable.eventName},
            et.${eventTable.eventDate},
            et.${eventTable.popularity},
            et.${eventTable.maxCapacity},
            et.${eventTable.description},
            ect.${eventClassification.classificationName},
            ett.${eventType.typeName},
            elt.${eventLeague.leagueName},
            st.${stateTable.stateName},
            ct.${cityTable.cityName},
            vt.${venue.venueName},
            pt.${performerTable.performerName},
            temp.${ticketPrice.ticketPrice}
        from ${eventTable.tableName} et
        left join ${eventLeague.tableName} elt
            on elt.${eventLeague.leagueID} = et.${eventTable.leagueID}
        left join ${eventType.tableName} ett
            on ett.${eventType.typeID} = elt.${eventLeague.typeID}
        left join ${eventClassification.tableName} ect
            on ett.${eventType.classificationID} = ect.${eventClassification.classificationID}
        left join ${venue.tableName} vt
            on vt.${venue.venueID} = et.${eventTable.venueID}
        left join ${cityTable.tableName} ct
            on ct.${cityTable.cityID} = vt.${venue.cityID}
        left join ${stateTable.tableName} st
            on st.${stateTable.stateID} = ct.${cityTable.stateID}
        left join ${performerEventRelation.tableName} per
            on et.${eventTable.eventID} = per.${performerEventRelation.eventID}
        left join ${performerTable.tableName} pt
            on per.${performerEventRelation.performerID} = pt.${performerTable.performerID}
        left join (
            select ${ticketPrice.eventID}, min(${ticketPrice.ticketPrice}) as ${ticketPrice.ticketPrice}
            from ${ticketPrice.tableName}
            group by ${ticketPrice.eventID}
        ) temp
            on temp.${ticketPrice.eventID} = et.${eventTable.eventID}
        `;
    }
    getAllEvents = () => {
        return this.#getEventsTemplate() + ';';
    }

    getAllClassifications = () => {
        const eventClassificationTable = this.schema.eventClassificationTable;
        return `
            select ${eventClassificationTable.classificationName} from ${eventClassificationTable.tableName};
        `;
    }

    getClassificationsTypes = (classificationName) => {
        const ect = this.schema.eventClassificationTable;
        const ett = this.schema.eventTypeTable;
        return `
        select ett.${ett.typeName} 
        from ${ect.tableName} ect
        left join ${ett.tableName} ett
            on ett.${ett.classificationID} = ect.${ect.classificationID} 
        where lower(ect.${ect.classificationName}) = lower(${classificationName});
        `;
    }

    getTypesLeague = (classificationName, typeName) => {
        const ect = this.schema.eventClassificationTable;
        const ett = this.schema.eventTypeTable;
        const elt = this.schema.eventLeagueTable;
        return `
        select elt.${elt.leagueName}
        from ${ect.tableName} ect
        left join ${ett.tableName} ett
            on ect.${ect.classificationID} = ett.${ett.classificationID}
        left join ${elt.tableName} elt
            on ett.${ett.typeID} = elt.${elt.typeID}
        where lower(ect.${ect.classificationName}) = lower(${classificationName})
            and lower(ett.${ett.typeName}) = lower(${typeName});
        `
    }

    getSpecificEvent = (eventID) => {
        const et = this.schema.eventTable;
        return this.#getEventsTemplate() + 
            `where et.${et.eventID} = ${eventID};`
    }

    getSpecificState = (stateName) => {
        const st = this.schema.stateTable;
        return this.#getEventsTemplate() + 
            `where lower(st.${st.stateName}) = lower(${stateName});`
    }

    getSpecificCity = (stateName, cityName) => {
        const st = this.schema.stateTable;
        const ct = this.schema.cityTable;
        return this.#getEventsTemplate() + 
            `where lower(st.${st.stateName}) = lower(${stateName})
                and lower(ct.${ct.cityName}) = lower(${cityName});`
    }

    getSpecificVenue = (stateName, cityName, venueName) => {
        const st = this.schema.stateTable;
        const ct = this.schema.cityTable;
        const vt = this.schema.venueTable;
        return this.#getEventsTemplate() + 
            `where lower(st.${st.stateName}) = lower(${stateName})
                and lower(ct.${ct.cityName}) = lower(${cityName})
                and lower(vt.${vt.venueName}) = lower(${venueName});`
    }

    getSpecificPerformer = (performerName) => {
        const pt = this.schema.performerTable;
        return this.#getEventsTemplate() + 
            `where lower(pt.${pt.performerName}) = lower(${performerName});`
    }

    insertEvent = (valuesList) => {
        const eventTable = this.schema.eventTable;
        return `
        insert into
        ${eventTable.tableName}(
            ${eventTable.leagueID}, 
            ${eventTable.eventName}, 
            ${eventTable.eventDate}, 
            ${eventTable.description}, 
            ${eventTable.popularity}, 
            ${eventTable.maxCapacity}, 
            ${eventTable.venueID}
        )
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

    modifyEvent = (valuesList) => {
        const et = this.schema.eventTable;
        return`
        update ${et.tableName}
        set 
            ${et.eventName} =
                case 
                    when ${valuesList[1]} is null then ${et.eventName}
                    else ${valuesList[1]}
                end,
            ${et.eventDate} = 
                case 
                    when ${valuesList[2]} is null then ${et.eventDate}
                    else ${valuesList[2]}
                end,
            ${et.description} = 
                case 
                    when ${valuesList[3]} is null then ${et.description}
                    else ${valuesList[3]}
                end,
            ${et.popularity} = 
                case 
                    when ${valuesList[4]} is null then ${et.popularity}
                    else ${valuesList[4]}
                end,
            ${et.maxCapacity} = 
                case 
                    when ${valuesList[5]} is null then ${et.maxCapacity}
                    else ${valuesList[5]}
                end,
            ${et.venueID} = 
                case 
                    when ${valuesList[6]} is null then ${et.venueID}
                    else ${valuesList[6]}
                end
        where ${et.eventID} = ${valuesList[0]}
        returning *;`
    }

    deleteEvent = (eventID) => {//delete ticket and performer_event_relation first
        const et = this.schema.eventTable;
        return`
        delete from ${et.tableName}
        where ${et.eventID} = ${eventID}
        returning *;
        `
    }
}

export default EventQuery;