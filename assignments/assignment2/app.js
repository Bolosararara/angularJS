(function(){

'use strict';

  angular.module('checkOffApp',[])
  .controller('checkOffAppctrl1',ctrl1)
  .controller('checkOffAppctrl2',ctrl2)
  .service('shoppingService',shoppingService);

  ctrl1.$inject = ['$scope','shoppingService'];
  function ctrl1($scope,$shoppingService){

    $scope.bought = function(quantity,itemName,index){
      $shoppingService.bought(quantity,itemName);
      $shoppingService.removeItem(index);
    }
    $scope.getToBuyList = function(){
      var list = $shoppingService.getToBuyList();
      if(list.length === 0){
        $scope.ToBuyListEmpty = true;
      }
      return list;
    };
  };

  ctrl2.$inject = ['$scope','shoppingService'];

  function ctrl2($scope,$shoppingService){

    $scope.getAlradyBoughtList = function(){
      var list = $shoppingService.getAlradyBoughtList();
      if(list.length === 0){
      $scope.AlradyBoughtListEmpty = true;
      }
      return list;
      };
    };
  function shoppingService(){
    var thisService = this;
    var toBuy = [{
      quantity : 10,
      name : "samose"
    },{
      quantity : 5,
      name : "jalebee"
    },{
      quantity : 4,
      name : "kechori"
    },{
      quantity : 15,
      name : "rasagulaa"
    },{
      quantity : 30,
      name :" golbupaa"
    }];
    var alradyBought = [];

    thisService.getToBuyList = function (){
      return toBuy;
    };

    thisService.getAlradyBoughtList = function (){
      return alradyBought;
    };

    thisService.bought = function (quantity,itemName){
      var item = {
        quantity : quantity,
        name : itemName
      }
      alradyBought.push(item);
    };
    thisService.removeItem = function(index){
      toBuy.splice(index,1);
    }

  };

})();
