(function() {
  'use strict';

  function HomeCtrl($location) {
    var vm = this;
    vm.msg = 'Welcome All!';
    vm.subMsg = 'A seed Project';
    vm.goToExo = goToExo;

    function goToExo(exoNumber) {
      if (exoNumber === 3) {
        $location.path('/Exo03');
      }
    }
  }

  HomeCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('HomeCtrl', HomeCtrl);

})();
