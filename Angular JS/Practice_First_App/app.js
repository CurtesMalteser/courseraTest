(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {
  $scope.name = "António";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
