import express, { json } from 'express';
import eventsRouter from './routes/events_router.js';
import ticketRouter from './routes/ticket_router.js';
import searchRouter from './routes/search_router.js'
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
app.use("/api/v1/events", eventsRouter);
app.use("/api/v1/ticket", ticketRouter);
app.use("/api/v1/search", searchRouter);


//start server
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});