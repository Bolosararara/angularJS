(function(){
  'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService);
MenuDataService.$inject = ['$http'];

function MenuDataService($http){
  var thisService = this;

  thisService.getAllCategories = function(){
    return $http({
      methord : "GET",
      url : "https://davids-restaurant.herokuapp.com/categories.json"
    }).then(function(categoriesList){
       console.log(categoriesList.data);
       return categoriesList.data;
    },function(error){
      console.log("error occure while featching categoriesList");
    });
  };

  thisService.getItemsForCategory = function(categoryShortName){
    console.log("getItemsForCategory =" +categoryShortName);
    return $http({
      methord : "GET",
      url : " https://davids-restaurant.herokuapp.com/menu_items.json",
      params : {'category':categoryShortName}
    }).then(function(menuItems){
      console.log("data");
       console.log(menuItems.data);
       return menuItems.data;
    },function(error){
      console.log("error occure while featching menuItems");
    });
  };
}

})();
