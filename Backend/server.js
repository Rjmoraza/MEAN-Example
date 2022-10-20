const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const movieRouter = require('./routes/movie-router');
const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Force the files from the 'public' folder to be static files

db();

app.get('/', (req,res) => {
    //res.sendFile(path.join(__dirname, 'dist/mean-example/index.html'));
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.use('/api', movieRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));