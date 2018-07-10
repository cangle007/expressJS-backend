'use strict';

//*~~importing express, setting up PORT, importing middleware~~*//
let express = require('express');
let app = express();

const bodyParser = require('body-parser'); //You need to use bodyParser() if you want the form data to be available in req.body.
const morgan = require('morgan'); //HTTP request logger middleware for node.js. You could see the logs in the terminal for each time an HTTP request was made
const cors = require('cors'); //It is a standard for allowing browsers to request resources from apis on other domains.
const path = require('path'); //To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

//why do we need this?
switch (process.env.NODE_ENV) {
  case 'development':
    app.use(morgan('dev'));
    break;
  case 'production':
    app.use(morgan('short'));
    break;
  default:
}

app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join('public')));

let port = process.env.PORT || 8000;

//*~~importing router~~*//
const peopleRouter = require('./instances/peopleRouter.js');
app.use(peopleRouter);

//you can also import a Class to Use, instead of writing a function directly here
// app.use(function(req, res) {
//   let guests = ['Cang', 'Leann'];
//   res.send(guests);
// });

//using Path
// app.get('/guests', function(req, res) {
//   let guests = ['Cang', 'Leann'];
//   res.send(guests);
// });

//reading an JSON file and send it back
// app.get('/guests', function(req, res) {
//   console.log('what are my req------', req);
//   fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
//     if (err) {
//       console.error(err.stack);
//       return res.sendStatus(500);
//     }
//
//     let guests = JSON.parse(guestsJSON);
//     res.send(guests);
//   });
// });

//using Path with params. In this case an id
// app.get('/guests/:id', function(req, res) {
//   //console.log('what are my req------', req.params);
//   fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
//     if (err) {
//       console.error(err.stack);
//       return res.sendStatus(500);
//     }
//
//     let id = Number.parseInt(req.params.id); //came from path, /guests/:id
//     let guests = JSON.parse(guestsJSON);
//
//     if (id < 0 || id >= guests.length || Number.isNaN(id)) {
//       return res.sendStatus(404);
//     }
//
//     res.set('Content-Type', 'text/plain');
//     res.send(guests[id]);
//   });
// });

//using URL parameters
// app.get('/hello/:myname', function(req, res) {
//   console.log('my req-------------', req.params);
//   res.send('hello, ' + req.params.myname);
// });

//using Query Parameters
// ? denotes the beginning of the query parameters
// = indicates an assignment; anything to the left is the key, while the right represents the value
// & allows for the input of multiple parameters, separating each
// app.get('/hi', function(req, res) {
//   console.log('my req.query-------------', req.query);
//   let name = req.query.name;
//   res.send('hello, ' + name);
// });

// app.use(function(req, res) {
//   res.sendStatus(404);
// });

//*~~telling app to listen to port~~*//
app.listen(port, function() {
  console.log('listening on port ', port);
});

module.exports = app;
