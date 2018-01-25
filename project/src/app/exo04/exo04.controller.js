(function() {
  'use strict';

  function Exo04Ctrl($location, settingService, meteoService, cocktaildirective) {
    var vm = this;
    vm.valeur = settingService.city;
    
    vm.SelectionChange = SelectionChange;
    vm.settingService = settingService;
    vm.meteoService = meteoService;
    vm.TexteSup = TexteSup;
    vm.cocktaildirective = cocktaildirective;
    
    function SelectionChange(){
      vm.settingService.city = vm.valeur;
      vm.meteoService.getMeteo();
    }
    
    function TexteSup(){
      $location.path('/more');
    }
  }

  Exo04Ctrl.$inject = ['$location', 'settingService', 'meteoService','cocktaildirective'];

  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();
