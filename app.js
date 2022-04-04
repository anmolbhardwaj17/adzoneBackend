const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

require('./db/connection');
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Initialize");
})

app.listen(5000, () => {
    console.log(`Server running on http://localhost:5000`)
})