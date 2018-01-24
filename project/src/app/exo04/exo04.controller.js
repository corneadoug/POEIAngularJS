(function() {
  'use strict';

  function Exo04Ctrl($location, settingService, meteoService) {
    var vm = this;
    vm.valeur = settingService.city;
    
    vm.SelectionChange = SelectionChange;
    vm.settingService = settingService;
    vm.meteoService = meteoService;
    
    function SelectionChange(){
      vm.settingService.city = vm.valeur;
      vm.meteoService.getMeteo();
    }
    
  }

  Exo04Ctrl.$inject = ['$location', 'settingService', 'meteoService'];

  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();
