(function(){

'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',ctrl);

    ctrl.$inject = ['$scope'];
    function ctrl ($scope){

    console.log($scope);
    $scope.errorMessage = "";
    $scope.items = "";
    //function to perform action on button click
    $scope.checkIfTooMuch = function(){
      if($scope.items ===""){
        $scope.message = null;
        $scope.errorMessage = "enter food list first";
        return;
      }
      $scope.errorMessage = null;
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



  };

})();
