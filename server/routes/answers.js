const { Router } = require('express');
const router = new Router();

const mysql = require('mysql');
const config = require('../config');
const pool = mysql.createPool(config);


const createTable = `CREATE TABLE IF NOT EXISTS results (
    testId int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    userId int(6),  
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    method varchar(15) DEFAULT NULL,
    multiplier int(2),
    correct_answers int(2),
    questions int(2));`;

    
    router.post('/multiplication', async (req, res) => {
        try {
            
        console.log(req.body)
        
        pool.query(createTable, (err, result) => {
            if (err) throw err;
            console.log('Results table created!')
        });

        let method = (req.route.path).slice(1);
        let multiplier = req.body.multiplier;
        let totalQuestions = req.body.questions.length;

        const testData = `INSERT INTO results (userId, method, multiplier, correct_answers, questions) VALUES (1, '${method}', ${pool.escape(multiplier)}, 1, ${pool.escape(totalQuestions)});`;
        

        pool.query(testData, (err, result) => {
            if (err) throw err;
            console.log(req._parsedUrl.path);
            // console.log(result.insertId);    //submitted test result's id  
            console.log('Test data added!')
        });


        res.status(200).send({ msg: 'Answers received' })

        // send back with id of submitted test (as added to database)?

    } catch (error) {
        console.log(error);
        res.status(400).send({ error })
    }
})


module.exports = router;