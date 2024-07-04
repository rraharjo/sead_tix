const express = require('express');
const eventsRouter = require ('./routes/events');
const app = express()

const port = 3000;

//middleware
app.use(express.json());

//routes
app.use('/api/v1/events', eventsRouter);

//start server
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});