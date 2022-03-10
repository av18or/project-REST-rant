
// import React and Def:
const React = require('react')
const Def = require('../default')


// create function named index, and include stub HTML:

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div>
        <h2>{place.name}</h2>
        <img src={place.pic} alt={place.name}/>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>PLACES INDEX PAGE</h1>
            {placesFormatted}
        </main>
    </Def>
)
}


// export the index function:

module.exports = index