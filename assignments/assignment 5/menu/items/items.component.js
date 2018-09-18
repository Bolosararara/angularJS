angular.module('MenuApp')
.component('items',{
  templateUrl:'menu/items/items.component.html',
  bindings:{
    itemslist : '<'
  }
});
