var chai = require('chai');
var mocha = require('mocha');
var sinon = require('sinon');
var path = require('path');
//require the file with himanshu's functions
var funcs = require...
var sequelizeMockingMocha = require('sequelize-mocking').sequelizeMockingMocha;

describe('using sequelizeMockingMocha', function() {
  //require our database so that we can make a mocked copy for testing
  var Database = require


  let sandbox = null;

  beforeEach(function(){
    sandbox = sinon.sandbox.create();
  })

  afterEach(function() {
    sandbox && sandbox.restore();
  })


  //bring in the data to be mocked
  sequelizeMockingMocha(
    Database.getInstance(),
    //create a route to our new mocked JSON database
    path.resolve(path.join(__dirname, '.mockedDatabase.json')),
    {'logging': false}
  );



  describe('/user-signup', function(){
    it('should add a new user to the database')


  })


////////////////////testing work order functions ////////////////////

//getting work orders from the db
  //for the time being let's call this function getOrder()
  describe('getOrder', function() {
    it('should be a function', function(){
      chai.expect(funcs.getOrder()).to.be.a('function');
    })

    it('should get a single work order from the database', function() {
      var query = Database.funcs.getOrder(someIdentfier);
      chai.expect(query).to.equal(that identifiers model))
    })
  })

//posting work orders to the db
  //for the time being let's call this function postOrder()
  describe('postOrder', function() {
    it('should be a function', function(){
      chai.expect(funcs.postOrder()).to.be.a('function');
    })

    it('should post a single work order to the database', function() {
      //post a work order to the database
      Database.funcs.postOrder(someOrder)
      //use getOrder(someOrder) to see if it returns the posted someOrder
      var query = Database.funcs.getOrder(someOrder);
      chai.expect(query).to.equal(someOrder);
    })
  })



///////////////////testing users //////////////////

  //get a user from the database
  describe('getUser', function() {
    it('should be a function', function(){
      chai.expect(funcs.getUser()).to.be.a('function');
    })

    it('should get a user from the database', function() {
      var query = Database.funcs.getUser(user);
      chai.expect(query).to.equal(the user);
    })
  })

  //adding a user to the database
  describe('addUser', function() {
    it('should be a function', function(){
      chai.expect(funcs.addUser()).to.be.a('function');
    })
    it('should add a user to the database', function() {
      //add a user to the database
      Database.funcs.addUser(user);
      chai.expect(funcs.getUser(user)).to.equal(user);
    })
  })

  //deleting a user from the database
  describe('deleteUser', function() {
    it('should be a function',function() {
      chai.expect(funcs.deleteUser()).to.be.a('function');
    })
    it('should delete a user from the database', function() {
      //first delete a user
      Database.funcs.deleteUser(user);
      chai.expect(funcs.getUser(user)).to.equal(null);
    })
  })


})