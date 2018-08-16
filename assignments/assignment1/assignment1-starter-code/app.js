(function(){

'use strict';

  angular.module('LunchCheck',[])
  .controller("LunchCheckController",function($scope){
    //function to perform action on button click
    $scope.checkIfTooMuch = function(){
      var spiltRegExp = /\s*,[\,,\s ]*\s*/;
      var itemsString = $scope.items.replace(/^,*|,*$/g,'');
      var itemArr = itemsString.split(spiltRegExp);
      if (itemArr.length >3){
        $scope.message = "Too much!";
      }
      else{
        $scope.message = "Enjoy!";
      }
    }

  });

})();
