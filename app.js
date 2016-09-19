//(function () {
//'use strict';
//
//angular.module('NameCalculator', [])
//
//.controller('NameCaculatorController', function ($scope) {
//  $scope.name = "";
//  $scope.totalValue = 0;
//
//  $scope.displayNumeric = function () {
//    var totalNameValue = calculatNumericForString($scope.name);
//    $scope.totalValue = totalNameValue;
//  };
//
//
//  function calculatNumericForString(string) {
//    var totalStringValue = 0;
//    for (var i = 0; i < string.length; i++) {
////      totalStringValue += string.charCodeAt(i);
////    }
////
////    return totalStringValue;
////  }
////
////});
//
//(function () {
//'use strict';
//
//angular.module('MsgApp', [])
//.controller('MsgController', MsgController);
//
//MsgController.$inject = ['$scope'];
//function MsgController($scope) {
//  $scope.name = "Yaakov";
//  $scope.stateOfBeing = "hungry";
//
//  $scope.sayMessage = function () {
//    return "Yaakov likes to eat healthy snacks at night!";
//  };
//
//  $scope.feedYaakov = function () {
//    $scope.stateOfBeing = "fed";
//  };
//}
//
//})();
//app.filter('myFilter', function() {
//
//  return function(input) {
//    var newInput = [];
//    angular.forEach(input, function(item) {
//      console.log(item);
//      if (item != "") newInput.push(item);
//    });
//    return newInput;
//  };
//});

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