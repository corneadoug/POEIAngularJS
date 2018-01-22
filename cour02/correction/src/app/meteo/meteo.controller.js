(function() {
    'use strict';
   
    function MeteoCtrl($scope) {
      $scope.meteo = "moche";
    }
    
    angular.module('AngularExo02')
      .controller('MeteoCtrl', MeteoCtrl);
   
    MeteoCtrl.$inject = ['$scope'];
   
})();