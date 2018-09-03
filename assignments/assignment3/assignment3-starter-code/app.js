(function(){
  'use strict';

angular.module('NarrowItDownApp',[])
.service("MenuSearchService",menuSearchService)
.directive("foundItems",foundItems)
.controller('NarrowItDownController',narrawItDownCtrl);

narrawItDownCtrl.inject = ['MenuSearchService'];
function narrawItDownCtrl(MenuSearchService){
  var ctrlThis = this;

  ctrlThis.found = [];
  ctrlThis.SearchText = "";
  ctrlThis.noItemsFlage = false;

  ctrlThis.narrowItDown = function(){
    ctrlThis.noItemsFlage = false;
    ctrlThis.found = [];
    if(ctrlThis.SearchText === ""){
      ctrlThis.noItemsFlage = true;
      return;
    }
    var promis = MenuSearchService.getMenuItems(ctrlThis.SearchText);

    promis.then(function(foundList){
      ctrlThis.found = foundList;
      if(ctrlThis.found.length === 0){
        ctrlThis.noItemsFlage = true;
      }
    });
  }
  ctrlThis.removeItem = function(index){
    ctrlThis.found.splice(index,1);
  }
}

function foundItems (){
  var ddo = {
    templateUrl : 'found-items-component.html',
    restrict:'E',
    scope : {
      foundItems : '<foundItems',
      removeItem : "&onRemove"
    }
  };
  return ddo;
}

menuSearchService.inject = ['$http','$q'];
function menuSearchService($http,$q){
  var thisService = this;

  thisService.getMenuItems = function (searchItem){
    var defered = $q.defer()

    return $http({
      methord : "GET",
      url : "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function(result){
      var foundList =[];
      var list = result.data.menu_items;
      var item;
      for(var i=0;i<list.length;i++){
        item = list[i].description;
        if(item.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1){
            foundList.push(list[i]);
        }
      }
      defered.resolve(foundList);
      return defered.promise;
    },function(error){
      console.log("erro while api call");
    });
  }
}
})();
