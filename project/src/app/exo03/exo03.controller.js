(function() {
  'use strict';

  function exo03Ctrl() {
    var vm = this;
    vm.msg = 'Welcome All!';
    vm.subMsg = 'A seed Project';
  }

  exo03Ctrl.$inject = [];

  angular.module('daproject')
    .controller('exo03Ctrl', exo03Ctrl);

})();
