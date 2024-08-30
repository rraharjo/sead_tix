import Query from "./query.js";
import QueryUtil from "../util/query_util.js";
import StatusUtil from "../util/status_util.js";

class BookingQuery extends Query {
    #getTicketTemplate = () => {
        const eventTable = this.schema.eventTable;
        const ticketTable = this.schema.ticketTable;
        const ticketPrice = this.schema.ticketPrice;
        const bookingTable = this.schema.bookingTable;
        return `
        select 
            tt.${ticketTable.ticketID},
            tt.${ticketTable.ticketType},
            tp.${ticketPrice.ticketPrice},
            et.${eventTable.eventName},
            bt.${bookingTable.customerID},
            tt.${ticketTable.ticketStatus}
        from ${eventTable.tableName} et
        left join ${ticketTable.tableName} tt
            on tt.${ticketTable.eventID} = et.${eventTable.eventID}
        left join ${ticketPrice.tableName} tp
            on tp.${ticketPrice.eventID} = tt.${ticketTable.eventID}
                and tp.${ticketPrice.ticketType} = tt.${ticketTable.ticketType}
        left join ${bookingTable.tableName} bt
            on bt.${bookingTable.bookingID} = tt.${ticketTable.bookingID}
        `;
    }

    getAllBooking = () => {
        const ticketTable = this.schema.ticketTable;
        const bookingTable = this.schema.bookingTable;
        const ticketPrice = this.schema.ticketPrice;
        return `
        select 
        bt.${bookingTable.bookingID},
        bt.${bookingTable.bookingDate},
        array_agg(
            tt.${ticketTable.ticketID}
        )
        from ${bookingTable.tableName} bt
        right join ${ticketTable.tableName} tt
        on tt.${ticketTable.bookingID} = bt.${bookingTable.bookingID}
        left join ${ticketPrice.tableName} tp
        on tp.${ticketPrice.ticketType} = tt.${ticketTable.ticketType}
            and tp.${ticketPrice.eventID} = tt.${ticketTable.eventID}
        where bt.${bookingTable.bookingID} is not null
        group by bt.${bookingTable.bookingID}, bt.${bookingTable.bookingDate};
        `
    }

    #checkIDsHelper = (eventID, type, limit) => {
        const ticketTable = this.schema.ticketTable;
        return `
            (select tt.${ticketTable.ticketID}
            from ${ticketTable.tableName} tt
            where tt.${ticketTable.ticketStatus} = ${StatusUtil.AVAILABLE}
                and tt.${ticketTable.ticketType} = ${type}
                and tt.${ticketTable.eventID} = ${eventID}
            limit ${limit})`
    }

    checkIDs = (eventID, listOfTickets) => {
        const ticketTable = this.schema.ticketTable;
        var toRet = `
        update ${ticketTable.tableName}
        set ${ticketTable.ticketStatus} = ${StatusUtil.ONHOLD}
        where ticket_id in (`;
        var i = 0;
        for (i; i < listOfTickets.length - 1; i++) {
            toRet += this.#checkIDsHelper(
                QueryUtil.properQueryInt(eventID),
                QueryUtil.properQueryStr(listOfTickets[i].ticket_type),
                QueryUtil.properQueryInt(listOfTickets[i].number_of_ticket)) + 'union';
        }
        toRet += this.#checkIDsHelper(
            QueryUtil.properQueryInt(eventID),
            QueryUtil.properQueryStr(listOfTickets[i].ticket_type),
            QueryUtil.properQueryInt(listOfTickets[i].number_of_ticket)) + 
            `) returning ${ticketTable.ticketID};`
        return toRet;
    }

    createBooking = (properDate) => {
        const bookingTable = this.schema.bookingTable;
        return `
        insert into ${bookingTable.tableName} 
        (${bookingTable.bookingDate}, 
            ${bookingTable.customerID}, 
            ${bookingTable.bookingStatus})
        values(
            ${properDate},
            null,
            ${StatusUtil.PAYMENTPENDING}
        )
        returning ${bookingTable.bookingID};
        `
    }

    updateTicketStatus = (status, properTicketIDs) => {
        const ticketTable = this.schema.ticketTable;
        return `
        update ${ticketTable.tableName}
        set ${ticketTable.ticketStatus} = ${status}
        where ${ticketTable.ticketID} in ${properTicketIDs};
        `
    }

    setTicketsBooking = (bookingID, properTicketIDs) => {
        const ticketTable = this.schema.ticketTable;
        return `
        update ${ticketTable.tableName}
        set ${ticketTable.bookingID} = ${bookingID},
            ${ticketTable.ticketStatus} = ${StatusUtil.PAYMENTPENDING}
        where ${ticketTable.ticketID} in ${properTicketIDs};
        `
    }
}

export default BookingQuery;