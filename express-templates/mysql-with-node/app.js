const express = require('express');
const app = express();
const PORT = 3000;


const createRouter = require('./routes/create-route');
const readRouter = require('./routes/read-route');
const updateRouter = require('./routes/update-route');
const deleteRouter = require('./routes/delete-route');


app.use('/crud', createRouter);
app.use('/crud', readRouter);
app.use('/crud', updateRouter);
app.use('/crud', deleteRouter);

app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs');

// set the app to listen on the port
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});