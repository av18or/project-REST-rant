
const React = require('react')
//stub function called Def w/ one paramater called HTML
function Def (html) {

    //inside Def function is our HTML skeleton for all pages:
        return (
            <html>
                <head>
                    <title>Title</title>
                </head>
                <body>
                    {html.children}
                </body>
            </html>
        )

}






//export the Def function: 
module.exports = Def