(function () {
'use strict';

angular.module('MenuApp')
.controller('cateroiesController', cateroiesController);

cateroiesController.$inject = ['categores'];

function cateroiesController(categores) {

  var $ctrl = this;
  $ctrl.categores = categores;
}

})();
