(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope' ];

function LunchCheckController($scope) {
 $scope.names = "";
 $scope.state ='warning';
 $scope.actualMessage = "Please enter data first";
 $scope.displayMessage = function () { 
  var message = sayMessage($scope.names);
  $scope.actualMessage = (!$scope.names) ? $scope.actualMessage : message;
  $scope.state = (!$scope.names) ? $scope.state : "ok";
    };
  
 function sayMessage (string) {
 var len = string.split(',').length; 
 var message = len > 3 ? "Too much!" : "Enjoy!" ;
 return  message ;
  }
  

  
  
}

})();
