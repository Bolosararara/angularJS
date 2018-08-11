angular.module('calculaterApp',[])
.controller("calController",function($scope){
  findSum = function(a,b){
    return Number(a)+Number(b);
  }
  $scope.message = "shashi is back";
  $scope.sum = findSum($scope.a,$scope.b);

});
