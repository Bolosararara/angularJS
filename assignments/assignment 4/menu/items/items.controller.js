(function () {
'use strict';

angular.module('MenuApp')
.controller('itemsController', itemsController);

itemsController.$inject = ['items'];

function itemsController(items) {
  var $ctrl = this;
  console.log("sararara");
  console.log("lenght ="+items.menu_items.length);
  $ctrl.itemslist = items;
    console.log("sararara1"+$ctrl.itemslist.menu_items.length);
  for(var i=0;i<$ctrl.itemslist.menu_items.length;i++){
    console.log("itemsController ="+$ctrl.itemslist.menu_items[i].name);
  }
    console.log("sararara2");
}

})();
