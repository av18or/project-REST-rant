// will describe our restaurants here


// create and export an express router:
const router = require('express').Router()


// create the GET route that will show list of all places:
router.get('/', (req, res) => {
    let places = [{             //places local variable
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      //pass places array into render method
    res.render('places/index', { places })  
})




module.exports = router


