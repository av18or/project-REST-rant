require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');


//define view engine:
app.set("views", __dirname + "/views");
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));


//include body parser tool:
app.use(express.urlencoded({ extended: true }));
//import the router code from places.js
app.use('/places', require('./controllers/places'));
app.use(methodOverride('_method'));



//chaged res.send to res.render:
app.get('/', (req, res) => {
    res.render('home');
});




// create a wildcard route '*' (must stay at bottom of all routes)
//chaged res.send to res.render. passing the name of the view for 404 page
app.get('*', (req, res) => {
    res.render('error404');
    //.status(404) - returns an actual 404 response
});



// process.env.PORT connects our PORT variable from .env file. 
app.listen(process.env.PORT);



