var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './../public/dist')));
// app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./config/mongoose.js');

//Routing
var routes_setter = require('./config/routes.js');
routes_setter(app);  //invoke function and pass app variable

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
})

// var route = require("./../server/config/routes.js")(app, server)