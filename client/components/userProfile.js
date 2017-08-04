angular.module('work-orders')

.controller('UserProfileCtrl', function($scope, loginService) {
  // get current user's photo, full name and username
  this.userPhoto = loginService.getCurrentUser().photo;
  this.userFullName = loginService.getCurrentUser().first_name + ' ' + loginService.getCurrentUser().last_name;
  this.userName = loginService.getCurrentUser().username;

  this.curUser;
  this.isHidden = true; // is upload photo option hidden

  this.toggleUploadPhoto = function () { // toglle upload photo button
    if ( this.isHidden ) {
      this.isHidden = false;
    } else {
      this.isHidden = true;
    }
  };

  //gets the current user from the loginService which holds all information related to that individual user. I.e work orders, email, photo...
  this.getCurUser = function () {
    this.curUser = loginService.getCurrentUser();
  };

  this.uploadUserPhoto = function (photo) { // upload user photo
    this.getCurUser();

    var userData = {
      id: this.curUser.id,
      photo: photo
    };

    loginService.uploadUserPhoto(userData, function(res) {
      this.userPhoto = (loginService.getCurrentUser()).photo;
    }.bind(this));

    this.toggleUploadPhoto();
  };
})

.component('userProfile', {
  controller: 'UserProfileCtrl',
  templateUrl: '../templates/userProfile.html'
});