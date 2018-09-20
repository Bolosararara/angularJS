(function() {
"use strict";

angular.module('public')
.controller('myinfoController', myinfoController);


/**
 * Handles login form credentials and redirects user to page.
 */
myinfoController.$inject = ['signup'];
function myinfoController(signup) {
  var $ctrl = this;
  $ctrl.myInfoStatus=false;
  var info = signup.getInfo();
  if(angular.equals(info,{})){
    $ctrl.myInfoStatus=false;
    console.log("do login fist");
    return;
  }
  $ctrl.myInfoStatus=true;
  $ctrl.firstName=info.firstName;
  $ctrl.lastName=info.lastName;
  $ctrl.phoneNumber=info.phoneNumber;
  $ctrl.emailAddress=info.emailAddress;
  $ctrl.menuNumber=info.menuNumber;
  $ctrl.menuItem=info.menuItem;

    console.log("in controllerAs");
    console.log(info);
    signup.storeInfo(info);
  };
})();
