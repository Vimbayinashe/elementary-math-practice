const { Router } = require('express');
const router = new Router();


// GET: 10 random questions of requested times table
router.get('/multiplication/:number', async (req, res) => {
    try {

        let questions = [];
        let multiplier = parseFloat(req.params.number);

        // "2 <= multiplier <= 12" DOES NOT WORK!!!

        if (2 <= multiplier && multiplier <= 12 && typeof(multiplier === "number")) {

            // array of numbers can represent a future question bank
            let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

            // select 10 random numbers without repetition
            for( let i=0; i < 10; i++) {
                let random = Math.floor(Math.random() * numbers.length);
                let question = numbers.splice(random, 1);

                questions.push(question[0]);
            }
            
            res.status(200).send({ multiplier, questions })

        } else {
            res.status(400).send({msg: "Please submit a multiplier value between the range of 2 to 12."})
        }
        
    } catch (err) {
        console.error(err);
        res.status(400).send({ msg: err });
    }
})

module.exports = router;

