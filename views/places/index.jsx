
// import React and Def:
const React = require('react')
const Def = require('../default')


// create function named index, and include stub HTML:

function index (data) { //include data parameter
//format the data from places array to HTML using .map array method
let placesFormatted = data.places.map((place, index) => {
  return (
    <div className="col-sm-6">
      <h2>
        <a href={`/places/${index}`} >
          {place.name}
        </a>
      </h2>
      <p className="text-center">
        {place.cuisines}
      </p>
      <img src={place.pic} alt={place.name} />
      <p className="text-center">
        Located in {place.city}, {place.state}
      </p>
    </div>
  );
});
  return (
    <Def>
        <main>
            <h1>PLACES INDEX PAGE</h1>
            <div className="row">
            {placesFormatted}
            </div>
        </main>
    </Def>
)
}


// export the index function:

module.exports = index;