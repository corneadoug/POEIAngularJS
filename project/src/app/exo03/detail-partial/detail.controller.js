(function () {
  'use strict';

  function DetailCtrl($location) {
    var vm = this;
    vm.msg = 'Welcome All!';
    vm.subMsg = 'A seed Project';
    vm.goToExo = goToExo;

    function goToExo(exoNumber) {
      if (exoNumber === 3) {
        $location.path('/exo03/detail-partial');
      }
    }
  }

  DetailCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('detailCtrl', DetailCtrl);

})();
