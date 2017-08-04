/*
  service functions to be used by login and sign up components ( can be used elsewhere too)
*/
angular.module('work-orders').
  service('loginService', function($http, $window) {
    var self = this;
    // store current user in the current session
    this.getCurrentUser = function () {
      return JSON.parse($window.sessionStorage.getItem('currentUser') );
    };

    this.setCurrentUser = function (data) {
      $window.sessionStorage.setItem('currentUser', JSON.stringify(data))
    };

    this.destroyCurrentUser = function () {
      $window.sessionStorage.removeItem('currentUser');
    };

    // create a new user when signing up
    this.postUser = function (userData, callback) {
      var reqBody = angular.copy(userData);
      $http.post('/user-signup', reqBody)
        .then(function(res) {
          if (res.data.username !== undefined) {
            //if (res.data.userExists === false) { // to do: check if user already exists
              if (res.data.username === userData.username && res.data.password === userData.password) {
                self.setCurrentUser(res.data);
                callback(res.data);
            } else {
              callback(false); // to do : change to res.data.userExists, if true ask to login
            }
          //}
          }
        });
      };

    // when user inputs login details, verify user and log in
    this.validateUser = function (userData, callback) {
      var reqBody = angular.copy(userData);
      $http.post('/user-signin', reqBody)
        .then(function(res) {
          if (res.data.username !== undefined) {
            if (res.data.username === userData.username && res.data.password === userData.password) {
              self.setCurrentUser(res.data);
              callback(res.data);
            }
          } else {
            console.log('invalid username/password. Please try again');
            callback(false); // to do: change to res.data.someProperty- user password not valid etc
          }
      });
    };
    // when user logs out, send session data to server. upon successful logout response, redirect user to signup page (to do)
    this.userLogout = function (userData, callback) {
      self.destroyCurrentUser();
      callback(true);
    //   var reqBody = angular.copy(userData);
    //   $http.post('/user-logout', reqBody)
    //     .then(function(res) {
    //       if (res.data.isLoggedout = true) {
    //         // delete cookies/session info?
    //       } else {
    //         console.log('could not log out. Please try again');
    //         callback(false); // to do - callback(err)
    //       }
    //   });
    };

    this.uploadUserPhoto = function (userData, callback) {
      var reqBody = angular.copy(userData);
      $http.put('/update-user', reqBody)
        .then(function(res) {
          if (res.data.photo !== undefined) {
            var currentUser = self.getCurrentUser();
            currentUser.photo = res.data.photo;
            self.setCurrentUser(currentUser);
            callback(res.data);
          } else {
            console.log('error uploading photo');
            callback(false); // to do: change to res.data.someProperty- upload error etc
          }
      });
    };
});