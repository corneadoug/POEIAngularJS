(function() {
  'use strict';

  function HomeCtrl($location) {
    var vm = this;
    vm.msg = 'Welcome All!';
    vm.subMsg = 'A seed Project';
    vm.goToExo = goToExo;

    function goToExo(exoNumber) {
      if (exoNumber === 3) {
        $location.path('/exo03');
      if (exoNumber === 4) 
        $location.path('/exo04');
      }
    }
  }

  HomeCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('HomeCtrl', HomeCtrl);

})();
