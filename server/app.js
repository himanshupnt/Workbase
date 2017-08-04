var express = require('express');
var bodyParser = require('body-parser');
//var handleErrors = require('error-handler'); // to do, implement error handling

var api = require('./routes/api');
var http = require('http');
var path = require('path');

var app = module.exports = express();

// Configuration

app.set('port', 8080);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('../client')); //serve static content from client

//API routes

app.get('/', function(req, res) {
  res.status(200).end();
});  // client root

app.post('/user-signup', api.userSignUp); // creates an admin user, mvp doesn't have other user roles yet
app.post('/user-signin', api.userSignIn); // user login end point
app.post('/create-order', api.createOrder); // when a create order request is made
app.put('/update-order', api.updateOrder); // when an order is updated
app.delete('/delete-order/:id', api.deleteOrder);// when an order is deleted
app.get('/get-orders', api.getOrders);
app.get('/get-orders-selective/:isDone', api.getOrdersSelective);
app.get('/get-orders-username/:username', api.getOrdersUsername);
app.put('/update-user', api.updateUser);//can update photo url or any other user data

app.get('/all-users', api.getAll); //testing purposes only

console.log(Date()); // log date when server restarts
// Start server
http.createServer(app).listen(app.get('port'), function (req, res) {
  console.log('Express server listening on port ' + app.get('port'));
//to do - error handling
});
