
const React = require('react')
//stub function called Def w/ one paramater called HTML
function Def (html) {

    //inside Def function is our HTML skeleton for all pages:
        return (
            <html>
                <head>
                    <title>Title</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body>
                    {html.children}
                </body>
            </html>
        )

}






//export the Def function: 
module.exports = Def