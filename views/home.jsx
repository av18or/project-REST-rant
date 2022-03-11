// import React and the Def function we created inside default.jsx:

const React = require('react')
const Def = require('./default')


//home stub function: 

function home ()  {

        return (
          <Def>
              <main>
                  <h1>HOME</h1>
                  <div>
                    <img src="/images/food.jpg" alt="picture of food" width="600px" height="400px" />
                  </div>
                  <div>
                  Photo by <a href="https://unsplash.com/@lvnatikk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lily Banse</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </div>
                  <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
              </main>
          </Def>
        )

}

module.exports = home