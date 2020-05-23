const express = require('express');
// const { auth } = require('./auth');     TBA with authentication
const mysql = require('mysql');
require('dotenv').config();

const app = express();
app.use(express.json());

// Create database connection

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});
  
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!");

    // connection.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Result: " + result);
    // });
});


app.listen(3002, () => {
    console.log('Server running on port 3002');
})
