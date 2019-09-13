const express = require('express');
const app        = express();
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const cors       = require('cors');

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

// Import Routers
const postsRouter = require('./routes/posts')
app.use('/posts', postsRouter)

//ROUTES
app.get('/', (req, res) => {
    res.send("We Are Home")
})

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to MongoDB!")
});

// START SERVER
app.listen(3000)