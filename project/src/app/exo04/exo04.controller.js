(function () {
  'use strict';

  function Exo04Ctrl($location, settingService) {
    var vm = this;
    vm.input = 'input';
    vm.superService = settingService;
    vm.consol = consol;

    function consol(input) {
      vm.superService.city = input;
      console.log(vm.superService.city);
    }



  }
  Exo04Ctrl.$inject = ['$location', 'settingService'];


  angular.module('daproject')
    .controller('exo04Ctrl', Exo04Ctrl);



})();
