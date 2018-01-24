(function() {
	'use strict';

	function Exo04Ctrl($location, settingService, meteoService) {
		var vm = this;
		vm.service = settingService;
		vm.meteoService = meteoService;

		vm.clicBoutonExo04 = clicBoutonExo04;
		vm.goToMore = goToMore;
		vm.texteInput = '';

		function clicBoutonExo04(){
			vm.service.city=vm.texteInput;
			meteoService.getMeteo();
		}

		function goToMore(){
			$location.path('/more');
		}
	}

	Exo04Ctrl.$inject = [ '$location', 'settingService','meteoService'];

	angular.module('daproject')
		.controller('Exo04Ctrl', Exo04Ctrl);

})();
