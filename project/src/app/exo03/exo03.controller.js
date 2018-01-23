(function() {
  'use strict';

  function Exo03Ctrl($location) {
    var vm = this;
    vm.msg = 'Welcome All!';
    vm.subMsg = 'A seed Project';
    vm.goToExo = goToExo;

    function goToExo(exoNumber) {
      if (exoNumber === 3) {
        $location.path('/exo03');
      }
    }
  }

  Exo03Ctrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('Exo03Ctrl', Exo03Ctrl);

})();