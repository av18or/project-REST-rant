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
        pic: '/images/diningroom2.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/diningroom1.jpg'
      }]
      //pass places array into render method
    res.render('places/index', { places })  
})




module.exports = router


