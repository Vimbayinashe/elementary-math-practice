const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config();

app.use(express.json());

// Routes
const questionsRoute = require('./routes/questions');
const answersRoute = require('./routes/answers');

app.use('/questions', questionsRoute);
app.use('/answers', answersRoute);


// Create database connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'maths'
});
  
connection.connect(function(err) {
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

connection.end(function(err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('Closed the database connection.');
});




app.listen(3002, () => {
    console.log('Server running on port 3002');
})
