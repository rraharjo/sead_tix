import Query from "./query.js";

class TicketQuery extends Query{
    #getTicketTemplate = () => {
        const eventTable = this.schema.eventTable;
        const ticketTable = this.schema.ticketTable;
        const ticketPrice = this.schema.ticketPrice;
        const customerTable = this.schema.customerTable;
        return `
        select 
            tt.${ticketTable.ticketID},
            tt.${ticketTable.ticketType},
            tp.${ticketPrice.ticketPrice},
            et.${eventTable.eventName},
            ct.${customerTable.customerID},
            tt.${ticketTable.ticketStatus}
        from ${eventTable.tableName} et
        left join ${ticketTable.tableName} tt
            on tt.${ticketTable.eventID} = et.${eventTable.eventID}
        left join ${ticketPrice.tableName} tp
            on tp.${ticketPrice.eventID} = tt.${ticketTable.eventID}
                and tp.${ticketPrice.ticketType} = tt.${ticketTable.ticketType}
        left join ${customerTable.tableName} ct
            on ct.${customerTable.customerID} = tt.${ticketTable.customerID}
        `;
    }

    getSpecificEvent = (eventID) => {
        const ticketTable = this.schema.ticketTable;
        return this.#getTicketTemplate() + 
            `where tt.${ticketTable.eventID} = ${eventID};`;
    }

    getSpecificTicketType = (eventID, ticketType) => {
        const ticketTable = this.schema.ticketTable;
        return this.#getTicketTemplate() + 
            `where tt.${ticketTable.eventID} = ${eventID}
                and tt.${ticketTable.ticketType} = ${ticketType};`;
    }

    addNewTicket = (eventID, ticketType, numOfTicket) => {
        const ticketTable = this.schema.ticketTable;
        var baseQuery = `
            insert into ${ticketTable.tableName}
            (
                ${ticketTable.eventID},
                ${ticketTable.ticketType},
                ${ticketTable.ticketStatus}
            )
            values

        `
        for (let i = 0 ; i < numOfTicket - 1 ; i++){
            baseQuery += `(${eventID}, ${ticketType}, ${0}),\n`;
        }
        baseQuery += `(${eventID}, ${ticketType}, ${0}) returning *;`;
        return baseQuery;
    }

    getSpecificTicket = (ticketID) => {
        const ticketTable = this.schema.ticketTable;
        return this.#getTicketTemplate() +
            `where tt.${ticketTable.ticketID} = ${ticketID};`;
    }

    getTicketTypes = (eventID) => {
        const ticketPriceTable = this.schema.ticketPrice;
        return `
            select 
                ${ticketPriceTable.ticketType},
                ${ticketPriceTable.ticketPrice}
            from ${ticketPriceTable.tableName}
            where ${ticketPriceTable.eventID} = ${eventID};
        `;
    }

    addNewTicketType = (eventID, ticketType, ticketPrice) => {
        const ticketPriceTable = this.schema.ticketPrice;
        return `
            insert into 
            ${ticketPriceTable.tableName}(
                ${ticketPriceTable.eventID},
                ${ticketPriceTable.ticketType},
                ${ticketPriceTable.ticketPrice}
            )
            values(
                ${eventID},
                ${ticketType},
                ${ticketPrice}
            )
            returning *;
        `;
    }

    renameTicketType = (eventID, oldTicketType, newTicketType) => {
        const ticketPriceTable = this.schema.ticketPrice;
        return `
            update ${ticketPriceTable.tableName}
            set 
                ${ticketPriceTable.ticketType} = ${newTicketType}
            where ${ticketPriceTable.eventID} = ${eventID}
                and ${ticketPriceTable.ticketType} = ${oldTicketType}
            returning *;
        `
    }

    getSingleTicketType = (eventID, ticketType) => {
        const ticketPriceTable = this.schema.ticketPrice;
        return `
            select 
                ${ticketPriceTable.ticketType},
                ${ticketPriceTable.ticketPrice}
            from ${ticketPriceTable.tableName}
            where ${ticketPriceTable.eventID} = ${eventID}
                and ${ticketPriceTable.ticketType} = ${ticketType};
        `
    }

    updateTicketPrice = (eventID, ticketType, newPrice) => {
        const ticketPriceTable = this.schema.ticketPrice;
        return `
            update
            ${ticketPriceTable.tableName}
            set 
                ${ticketPriceTable.ticketPrice} = ${newPrice}
            where
                ${ticketPriceTable.eventID} = ${eventID}
                and ${ticketPriceTable.ticketType} = ${ticketType}
            returning *;
        `
    }

    buyTicketByID = (ticketID, customerID) => {
        const ticketTable = this.schema.ticketTable;
        return `
            update
            ${ticketTable.tableName}
            set
                ${ticketTable.customerID} = 
                    case
                        when ${customerID} is null then ${ticketTable.customerID}
                        else ${customerID}
                    end,
                ${ticketTable.ticketStatus} = 1
            where ${ticketTable.ticketID} = ${ticketID} 
                and ${ticketTable.ticketStatus} = 0
            returning *;
        `;
    }

    buyTicketByType = (eventID, ticketType, customerID) => {
        const ticketTable = this.schema.ticketTable;
        return `
            update
            ${ticketTable.tableName}
            set
                ${ticketTable.customerID} = 
                    case
                        when ${customerID} is null then ${ticketTable.customerID}
                        else ${customerID}
                    end,
                ${ticketTable.ticketStatus} = 1
            where ${ticketTable.ticketID} in 
                    (select ${ticketTable.ticketID}
                    from ${ticketTable.tableName}
                        where ${ticketTable.ticketStatus} = 0
                            and ${ticketTable.eventID} = ${eventID}
                            and ${ticketTable.ticketType} = ${ticketType}
                        limit 1
                    )
            returning *;
        `;
    }

    getEventName = (eventID) => {
        const eventTable = this.schema.eventTable;
        return `
            select ${eventTable.eventName}
            from ${eventTable.tableName}
            where ${eventTable.eventID} = ${eventID};
        `;
    }
}

export default TicketQuery;