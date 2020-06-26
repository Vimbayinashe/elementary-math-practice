const { Router } = require('express');
const router = new Router;

router.post('/multiplication', async (req, res) => {
    try {
        
        console.log(req.body)

        res.status(200).send({ msg: 'Answers received' })

        // send back with id of submitted test (as added to database)?

    } catch (error) {
        console.log(error);
        res.status(400).send({ error })
    }
})


module.exports = router;