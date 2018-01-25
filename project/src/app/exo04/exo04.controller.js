(function() {
  'use strict';

  function Exo04Ctrl(settingService, meteoService) {
    var vm = this;
    vm.a = 'pizza';
  
    vm.select = select;
    vm.setting = settingService;
    vm.meteo = meteoService;

  function select(){
    settingService.city = vm.a;
    console.log(vm.a);
    }
}
   

  Exo04Ctrl.$inject = ['settingService', 'meteoService'];

  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();
