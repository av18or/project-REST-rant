// will describe our restaurants here


// create and export an express router:
const router = require('express').Router()

// create the GET rout that will show list of all places:
router.get('/', (req, res) => {
    res.send('GET /places')
})




module.exports = router


