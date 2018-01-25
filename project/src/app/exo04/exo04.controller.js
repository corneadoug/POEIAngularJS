(function() {
  'use strict';

function Exo04Ctrl(settingService, meteoService) {
  var vm = this;
  vm.a = 'valeur initiale';
  vm.clic = clic;
  vm.setting = settingService;
  vm.meteo = meteoService;

	function clic() {
		settingService.city = vm.a;
	}
}

Exo04Ctrl.$inject = ['settingService', 'meteoService'];

angular.module('daproject')
  .controller('Exo04Ctrl', Exo04Ctrl);

})();