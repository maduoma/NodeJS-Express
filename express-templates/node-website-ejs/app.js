
// require our dependencies
var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser     = require('body-parser');
var app            = express();
var PORT           = process.env.PORT || 3000;

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// route our app
var router = require('./app/routes');
app.use('/', router);


// set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(PORT, function(err) {
  if(err) console.error(err);
  console.log(`App started at: http://localhost:${PORT}`);
});

