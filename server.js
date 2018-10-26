var express = require('express');
var app = express();

// Port description

const port = process.env.PORT || 3000;

// Provide access to node_modules folder to access all your scripts
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// set "main" folder as root folder
app.use(express.static('main'));

// First welcome page is index.html
app.use((req, res) => {
console.log('Server received request');
res.sendFile(`${__dirname}/main/index.html`)
});

/*app.listen(port ,() => {
console.log(' Server Started on Port :', port);
});
*/


app.listen(port,err => {
if (err)
{
console.log(err);
}
else
{
console.log(' Server listening on port', port);
}
});


