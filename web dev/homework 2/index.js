const express = require('express');
const path = require('path');
const app = express();

const logger = require('./middleware/logger')

//middleware to log url
//app.use(logger);





const port = 5000;



app.use(express.static(path.join(__dirname, 'public')));

//books API routes
app.use('/api/books', require('./routes/api/books'));

app.listen(port);