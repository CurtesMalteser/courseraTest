(function () {
  'use strict';

  angular.module('DIApp', [])
  .controller('DIController', DIController);

  function DIController ($scope,
                        $filter, $injector) {
    $scope.name="Bastião";

    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

// console an array of the argument names of the function
//of the DIController
    console.log($injector.annotate(DIController));
  }

  function AnnotateMe(name, job, blah) {
    return "Blah!";
  }

// para só obter o valor do return
console.log(AnnotateMe());

// para obter toda função
console.log(AnnotateMe);

// para obter a função como string
console.log(AnnotateMe.toString());

console.log(DIController.toString());

})();
