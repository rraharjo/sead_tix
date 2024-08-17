import Query from "./query.js";

class TicketQuery extends Query{
    #getTicketTemplate = () => {
        const stateTable = this.schema.stateTable;
        const cityTable = this.schema.cityTable;
        const performerEventRelation = this.schema.performerEventRelation;
        const performerTable = this.schema.performerTable;
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
            st.${stateTable.stateName},
            ct.${cityTable.cityName},
            vt.${venue.venueName},
            pt.${performerTable.performerName}
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
        `;
    }

    getEventByName = (queries) => {
        const eventTable = this.schema.eventTable;
        const queriesLength = queries.length;
        var baseQuery = this.#getTicketTemplate();
        baseQuery += `where `
        for (let i = 0 ; i < queriesLength - 1 ; i++){
            baseQuery += `lower(et.${eventTable.eventName}) like '%${queries[i]}%'\nor `
        }
        baseQuery += `lower(et.${eventTable.eventName}) like '%${queries[queriesLength - 1]}%';`
        return baseQuery;
    }

    getEventsByDate = (startingDate, endingDate) => {
        const eventTable = this.schema.eventTable;
        var baseQuery = this.#getTicketTemplate();
        baseQuery += `where et.${eventTable.eventDate} 
            between to_date(${startingDate}, 'ddMMYYYY') 
                and to_date(${endingDate}, 'ddMMYYYY');`
        return baseQuery;
    }
}

export default TicketQuery;