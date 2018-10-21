var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/api');
var http = require('http');
var path = require('path');
const PORT = process.env.PORT || 8080;

var app = module.exports = express();
let sum = 5-3;
// Configuration

// app.set('port', 8080);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client'))); //serve static content from client

//API routes

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

// Start server

app.listen(PORT, () => {
  console.log(path.join(__dirname, '../client'))
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
