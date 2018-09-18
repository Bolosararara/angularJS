(function() {
"use strict";

angular.module('public')
.controller('signUpController', signUpController);


/**
 * Handles login form credentials and redirects user to page.
 */
signUpController.$inject = ['signup'];
function signUpController(signup) {
  var $ctrl = this;
  $ctrl.Submitedflag = false;
  $ctrl.firstName="";
  $ctrl.lastName="";
  $ctrl.phoneNumber="";
  $ctrl.emailAddress="";
  $ctrl.menuNumber="";

  $ctrl.onSubmit = function(){
  var  info = {
      firstName:$ctrl.firstName,
      lastName:$ctrl.lastName,
      phoneNumber:$ctrl.phoneNumber,
      emailAddress:$ctrl.emailAddress,
      menuNumber:$ctrl.menuNumber,
    };
    console.log("in controllerAs");
    console.log(info);
    signup.storeInfo(info);
    $ctrl.Submitedflag = true;
  };
};


})();
