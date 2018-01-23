(function() {
    'use strict';
   
    function HomeCtrl($scope) {
        $scope.plat = "pizza";
        $scope.a = "Bye";
    }
    
    angular.module('AngularExo02')
      .controller('HomeCtrl', HomeCtrl);
   
    HomeCtrl.$inject = ['$scope'];
   
   })();