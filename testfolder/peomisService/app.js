(function(){

'use strict';

  angular.module('promis',[])
  .controller('PromisCtrl',promisCtrl);
//  .service("OddNumber",oddNumber)
//  .Service("PopOfMessage",popOfMessage);

  promisCtrl.$inject = ['$q', '$timeout'];//,'PopOfMessage','$timeout'];
  function promisCtrl($q,$timeout){//, PopOfMessage, $timeout){
    var ctrl = this;
    ctrl.showMessage = false;
    ctrl.message = "";
    ctrl.showMessageFun = function(){
      ctrl.showMessage = true;
      if(Number(ctrl.number)%2 === 0){
        ctrl.message = "even Number.";
      }
      else {
        ctrl.message = "odd Number.";
      }
      $timeout(function () {
        ctrl.number = null;
        ctrl.showMessage = false;
      }, 4000);
    };
  };
})();
