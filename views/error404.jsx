//import React and Def function from default.jsx

const React = require('react')
const Def = require('./default')


// stub function: 

function error404 () {


  //default page for 404:
        return (
          <Def>
              <main>
                  <h1>404: PAGE NOT FOUND</h1>
                  <p>Oops, sorry, we can't find this page!</p>
                  <div>
                    <img src="/images/lego.jpg" alt="picture of a broken lego person" width="600px" height="700px" />
                  </div>
                  <div>
                  Photo by <a href="https://unsplash.com/@simmerdownjpg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jackson Simmer</a> on <a href="https://unsplash.com/s/photos/problem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                  </div>
              </main>
          </Def>
        )
    



}

module.exports = error404