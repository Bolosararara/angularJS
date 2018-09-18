(function () {
"use strict";

angular.module('common')
.service('signup', signup);


signup.$inject = [];
function signup() {
  var service = this;
  service.info={}
  service.storeInfo = function (info) {
    service.info = info;
    console.log("in service");
    console.log(service.info);
  };


  service.getInfo = function () {
    return service.info;
  };

}



})();
