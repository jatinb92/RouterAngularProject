const cors = require('cors');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var apiRoutes = require('./app/routes/apiRoutes.js');

const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


/* To Allow CORS policy */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  /* routes you to the api url */
apiRoutes(app);

app.listen(PORT, function () {
  console.log('Hello World'); 

});

