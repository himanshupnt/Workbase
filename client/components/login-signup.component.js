// This component is the parent to login and sign up components.
// It has controller methods to hide/show login or signup templates.
// It has controller methods to hide/show main content page (logged in page
//  where work orders and profile section is displayed.)

angular.module('work-orders')

.controller('LoginSignupCtrl', function($scope) {
  this.isHidden = false;

  this.toggleLoginSignup = function () { // show/hide login or sign up template
    if (this.isHidden) {
      this.isHidden = false;
    } else {
      this.isHidden = true;
    }
  };

  this.showContent = function () { // show logged in content (work orders, profile etc)
    this.parent.isContentHidden();
  };

  this.showWorkOrders = function () { // show work orders for a user after user logs in
    this.parent.getWorkOrders();
  };
})

.component('loginSignup', {
  require: {
    parent: '^^app'
  },
  controller: 'LoginSignupCtrl',
  templateUrl: '../templates/login-signup.component.html',
});