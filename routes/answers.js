const { Router } = require('express');
const router = new Router;

router.post('/multiplication', async (req, res) => {
    try {
        
        console.log(req.body)

        res.status(200).send({ msg: 'Answers received' })

    } catch (error) {
        console.log(error);
        res.status(400).send({ error })
    }
})


module.exports = router;