(function(){

'use strict';
  angular.module('filterApp',[])
  .controller('filterAppController',ctrl)
  .filter('textChange',textChangerFactoryFilter);

    ctrl.$inject = ['$scope','textChangeFilter'];
    function textChangerFactoryFilter(){
      return function changrText(message,target,source){
        message = message||"";
        message = message.replace(target,source);
        return message;
      };
    };


    function ctrl ($scope,textChangeFilter){
      $scope.message = "shashi is back";
      $scope.updated = textChangeFilter($scope.message,'is','is came');
      $scope.array = [1,2,3,4,5,6,7,8,9];
      $scope.findEven = function (){
        $scope.array = $scope.array.filter(function(value){
          return value%2 === 0;
        });
      }
  };

})();
