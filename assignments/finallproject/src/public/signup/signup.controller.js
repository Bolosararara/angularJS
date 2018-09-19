(function() {
"use strict";

angular.module('public')
.controller('signUpController', signUpController);


/**
 * Handles login form credentials and redirects user to page.
 */
signUpController.$inject = ['signup','MenuService'];
function signUpController(signup,MenuService) {
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
    if($ctrl.menuNumber !== ""){
      MenuService.getALLMenuItems($ctrl.menuNumber).then(function(responce){
        $ctrl.showmessage= true;
        $ctrl. message ="valid menu number";
        },function(){
        $ctrl.showmessage= true;
          $ctrl. message ="invalid menu number";
      });
    }
    $ctrl.Submitedflag = true;
  };
};


})();
