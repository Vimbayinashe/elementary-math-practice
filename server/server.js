const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config();
const config = require('./config');

app.use(express.json());

// Routes
const questionsRoute = require('./routes/questions');
const answersRoute = require('./routes/answers');

app.use('/questions', questionsRoute);
app.use('/answers', answersRoute);


// Create database connection
const pool = mysql.createPool(config);
  
pool.getConnection(function(err) {
    // if (err) throw err;
    if (err) {
        return console.error('error: ', err.message);
    }
    console.log("Connected to MySQL!");

    // connection.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Result: " + result);
    // });
});


/** Using connection 
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});
  
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
});
 */



app.listen(3002, () => {
    console.log('Server running on port 3002');
})
