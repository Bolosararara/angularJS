(function(){
'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];

  function RoutesConfig ($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
      url:'/',
      templateUrl : 'menu/home.html',
    })

   .state('category',{
      url:'/category',
      templateUrl : 'menu/categories/category.html',
      controller: 'cateroiesController as cateroiesctrl',
      resolve : {
        categores:['MenuDataService',function(MenuDataService){
          return MenuDataService.getAllCategories();
          }]
        }
      })

    .state('items',{
      url : '/items/{shortName}',
      templateUrl : 'menu/items/items.html',
      controller: 'itemsController as itemsctrl',
      resolve : {
        items:['MenuDataService','$stateParams',function(MenuDataService,$stateParams){
          return MenuDataService.getItemsForCategory($stateParams.shortName);
          }]
        }
    })
  }

})();
