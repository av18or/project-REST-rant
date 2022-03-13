// will describe our restaurants here


// create and export an express router:
const router = require('express').Router();
const places = require("../models/places.js");




// create the GET route that will show list of all places:
router.get('/', (req, res) => {
  res.render('places/index', { places });  
});



router.post('/', (req, res) => {
            // posting still not working?
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = '/images/lego.jpg'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {  
    req.body.state = 'USA'
  } 
  places.push(req.body)
  res.redirect('/places')
});





//route for new places page
router.get('/new', (req, res) => {
  res.render('places/new')
});





router.get("/:id", (req, res) => {
  res.send("Details about a particular place");
});

router.put("/:id", (req, res) => {
  res.send("Update a particular place");
});

router.get("/:id/edit", (req, res) => {
  res.send("Form page for editing an existing place");
});

router.delete("/:id", (req, res) => {
  res.send("Delete a particular place");
});

router.post("/:id/rant", (req, res) => {
  res.send("Create a rant (comment) about a particular place");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("Delete a rant (comment) about a particular place");
});

module.exports = router;


