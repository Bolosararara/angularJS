angular.module('MenuApp')
.component('categories',{
  templateUrl:'menu/categories/categoryes.component.html',
  bindings:{
    categorieslist : '<'
  }
});
