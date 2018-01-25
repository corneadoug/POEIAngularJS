(function() {
  'use strict';

  function Exo04Ctrl(settingService, meteoService) {
    var vm = this;
    vm.input = '';
    vm.click = click;
    vm.settingService = settingService;
    vm.meteoService = meteoService;

    function click() {
     settingService.city = vm.input;
    }
  }


 


  Exo04Ctrl.$inject = ['settingService', 'meteoService'];

  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();