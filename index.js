const express = require('express')

const app = express()

const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
app.use(express.json())
// Use body-parser middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use cors middleware to handle CORS requests
app.use(cors());


app.use('/', require('./routes/Routes'))

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
    app.listen(8000, () => console.log("APP IS RUNNING AT 8000"))
});


