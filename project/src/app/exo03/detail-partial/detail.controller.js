(function() {
  'use strict';

  function DetailCtrl() {
    var vm = this;
    vm.msg = 'Détails !';
  }

	DetailCtrl.$inject = [];

	  angular.module('daproject')
    .controller('DetailCtrl', DetailCtrl);
})();
