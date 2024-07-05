import Query from "./query.js";

class EventQuery extends Query{
    getGetBasicTemplate() {
        const eventTable = this.schema.eventTable;
        const eventLeague = this.schema.eventLeagueTable;
        const eventType = this.schema.eventTypeTable;
        const eventClassification = this.schema.eventClassificationTable;
        const venue = this.schema.venueTable;
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
            vt.${venue.venueName}
        from ${eventTable.tableName} et
        left join ${eventLeague.tableName} elt
            on elt.${eventLeague.leagueID} = et.${eventTable.leagueID}
        left join ${eventType.tableName} ett
            on ett.${eventType.typeID} = elt.${eventLeague.typeID}
        left join ${eventClassification.tableName} ect
            on ett.${eventType.classificationID} = ect.${eventClassification.classificationID}
        left join ${venue.tableName} vt
            on vt.${venue.venueID} = et.${eventTable.venueID}`;
    }
    getAllEvents() {
        return this.getGetBasicTemplate() + `;`;
    }

    getSpecificClassification(classificationName) {
        const ect = this.schema.eventClassificationTable
        return this.getGetBasicTemplate() +
            " " +
            `where lower(ect.${ect.classificationName}) = lower(${classificationName});`;
    }

    getSpecificType(classificationName, typeName) {
        const ect = this.schema.eventClassificationTable;
        const ett = this.schema.eventTypeTable;
        return this.getGetBasicTemplate() + " " +
            `where lower(ect.${ect.classificationName}) = lower(${classificationName})
                    and lower(ett.${ett.typeName}) = lower(${typeName});`;
    }

    getSpecificLeague(classificationName, typeName, leagueName) {
        const ect = this.schema.eventClassificationTable;
        const ett = this.schema.eventTypeTable;
        const elt = this.schema.eventLeagueTable;
        return this.getGetBasicTemplate() + " " +
            `where lower(ect.${ect.classificationName}) = lower(${classificationName})
                and lower(ett.${ett.typeName}) = lower(${typeName})
                and lower(elt.${elt.leagueName}) = lower(${leagueName});`
    }

    getSpecificEvent(eventID) {
        const eventTable = this.schema.eventTable;
        return this.getGetBasicTemplate() + " " +
            `where ${eventTable.eventID} = ${eventID};`;
    }

    insertEvent(valuesList) {
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
            ${eventTable.venueID})
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

    deleteEvent(eventID){//delete ticket and performer_event_relation first
        const et = this.schema.eventTable;
        return`
        delete from ${et.tableName}
        where ${et.eventID} = ${eventID}
        returning *;
        `
    }
}

export default EventQuery;