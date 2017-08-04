angular.module('work-orders')

.controller('AppCtrl', function($http, loginService) {

  var app = this;
  app.completeWorkOrders = 0;
  app.inProgressWorkOrders = 0;


// hides main site content until a user is signed in.
  app.isContentHidden = function () {
    if (loginService.getCurrentUser() === null) {
      return true;
    } else {
      return false;
    }
  };

  //This method is passed down to all child components.
  //it is called any time the Work Orders list gets updated
  //in any way.
  this.getWorkOrders = function () {
    var curUser = loginService.getCurrentUser().username;
    $http.get('/get-orders-username/' + curUser)
    .then(function(res) {
      app.workOrders = res.data;
      //Create a count of complete and in progress orders
      var complete = 0;
      var inProgress = 0;
      app.workOrders.forEach( function (val,ind,arr) {
        if (val.is_done) {
          complete++;
        } else {
          inProgress++;
        }
      });
      app.completeWorkOrders = complete;
      app.inProgressWorkOrders = inProgress;
    });
  }.bind(this);

  if(loginService.getCurrentUser() !== null) {
    if ( loginService.getCurrentUser().username ) {
      this.getWorkOrders();
    }
  }

})

.component('app', {
  controller: 'AppCtrl',
  templateUrl: '../templates/app.html'
});
