(function() {
    'use strict';
   
    function HomeCtrl($scope) {
      $scope.plat = "pizza";
    }
    
    angular.module('AngularExo02')
      .controller('HomeCtrl', HomeCtrl);
   
    HomeCtrl.$inject = ['$scope'];
   
   })();