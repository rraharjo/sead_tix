import express, { json } from 'express';
import eventsRouter from './routes/events_router.js';
import ticketRouter from './routes/ticket_router.js';
const app = express()

const port = 3000;

//middleware
app.use(json());

//routes
app.use("/api/v1/events", eventsRouter);
app.use("/api/v1/ticket", ticketRouter);


//start server
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});