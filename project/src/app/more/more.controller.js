(function() {
  'use strict';

  function MoreCtrl($location, meteoService) {
    var vm = this;
	vm.meteoService = meteoService;
  }

  MoreCtrl.$inject = [ '$location','meteoService'];

  angular.module('daproject')
    .controller('MoreCtrl', MoreCtrl);

})();
