(function() {
  'use strict';


  function Exo04Ctrl($location, meteoService, settingService) {
  	var vm  =  this;

    vm.inputS = 'Nantes';
    vm.affiche = affiche;
    vm.settingService =settingService;
    vm.meteoService = meteoService;
    vm.goToMore = goToMore;

    function goToMore() {
      $location.path('/more');
      } 

    function affiche(){
      vm.settingService.city = vm.inputS;
      vm.meteoService.getMeteo();
  }

}


  Exo04Ctrl.$inject = ['$location', 'meteoService', 'settingService'];


  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();