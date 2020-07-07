const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config();
const config = require('./config');
const path = require('path');


// Create database connection
const pool = mysql.createPool(config);
  
pool.getConnection(function(err) {
    
    if (err) {
        return console.error('error: ', err.message);
    }
    console.log("Connected to MySQL!");

});


// serve frontend
app.use(express.static(__dirname + '/../build'))

// Middleware
app.use(express.json());



// Routes
const questionsRoute = require('./routes/questions');
const answersRoute = require('./routes/answers');

app.use('/questions', questionsRoute);
app.use('/answers', answersRoute);


// resolve 'Cannot GET ...' error messages
app.get('/*', (req,res) =>{
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});


const port = process.env.PORT || 3002;


app.listen(port, () => {
    console.log('Server running on port ', port);
})
