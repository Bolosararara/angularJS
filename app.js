angular.module('LunchCheck',[])
.controller("LunchCheckController",function($scope){
  //function to perform action on button click
  $scope.checkIfTooMuch = function(){
    var spiltRegExp = /\s*,\s*/;
    var itemArr = $scope.items.split(spiltRegExp);
    if (itemArr.length >3){
      $scope.message = "Too much!";
    }
    else{
      $scope.message = "Enjoy!";
    }
  }

});
