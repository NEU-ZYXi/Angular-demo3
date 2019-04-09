// Build project using 'ng build --watch' and Run server using 'nodemon server.js' for immediately update of codes

// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
const secret = !!process.env.SESSION_SECRET ? process.env.SESSION_SECRET : 'local_secret'
app.use(session({secret: secret}));
app.use(passport.initialize());
app.use(passport.session());

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/my-project')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});



const port = process.env.PORT || '3200';
app.set('port', port);

require('./server/app')(app);

// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));

// mongodb://<dbuser>:<dbpassword>@ds121406.mlab.com:21406/webdev
// username: asd123, password: asd123
var connectionString = 'mongodb://asd123:asd123@ds121406.mlab.com:21406/webdev';
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const client = mongoose.connect(connectionString, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

