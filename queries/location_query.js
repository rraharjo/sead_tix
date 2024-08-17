import Query from "./query.js";

class LocationQuery extends Query{
    getAllCities = () => {
        const venueTable = this.schema.venueTable;
        const cityTable = this.schema.cityTable;
        const eventTable = this.schema.eventTable;
        return `
        select ct.${cityTable.cityName}, count(*) as num_of_events
        from ${eventTable.tableName} et 
        left join ${venueTable.tableName} vt
            on vt.${venueTable.venueID} = et.${eventTable.venueID}
        left join ${cityTable.tableName} ct
            on ct.${cityTable.cityID} = vt.${venueTable.cityID}
        group by ct.${cityTable.cityName}
        order by 2 desc;
        `;
    }

    getAllStates = () => {
        const stateTable = this.schema.stateTable;
        const venueTable = this.schema.venueTable;
        const cityTable = this.schema.cityTable;
        const eventTable = this.schema.eventTable;
        return `
        select st.${stateTable.stateName}, count(*) as num_of_events
        from ${eventTable.tableName} et 
        left join ${venueTable.tableName} vt
            on vt.${venueTable.venueID} = et.${eventTable.venueID}
        left join ${cityTable.tableName} ct
            on ct.${cityTable.cityID} = vt.${venueTable.cityID}
        left join ${stateTable.tableName} st
            on st.${stateTable.stateID} = ct.${cityTable.stateID}
        group by st.${stateTable.stateName}
        order by 2 desc;
        `;
    }
}

export default LocationQuery;