(function() {
  'use strict';


  function Exo04Ctrl(meteoService, settingService) {
  	var vm  =  this;

    vm.inputS = 'Nantes';
    vm.affiche = affiche;
    vm.settingService =settingService;
    vm.meteoService = meteoService;
    

    function affiche(){
      vm.settingService.city = vm.inputS;
      vm.meteoService.getMeteo();
  }

}


  Exo04Ctrl.$inject = ['meteoService', 'settingService'];


  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();