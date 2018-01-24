(function() {
  'use strict';

  function DetailCtrl() {
    var vm = this;
    vm.msg = 'Welcome All!';
    vm.subMsg = 'A seed Project';

  }

  DetailCtrl.$inject = [];

  angular.module('daproject')
    .controller('DetailCtrl', DetailCtrl);

})();
