import express, { json } from 'express';
import eventsRouter from './routes/events_router.js';
import ticketRouter from './routes/ticket_router.js';
import searchRouter from './routes/search_router.js';
import locationRouter from './routes/location_router.js';
import bookingRouter from './routes/booking_router.js';
const app = express()

const port = 3000;

//middleware
app.use(json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

//routes
const baseURL = "/api/v1";
app.use(baseURL + "/events", eventsRouter);
app.use(baseURL + "/ticket", ticketRouter);
app.use(baseURL + "/search", searchRouter);
app.use(baseURL + "/location", locationRouter);
app.use(baseURL + "/booking", bookingRouter);


//start server
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});