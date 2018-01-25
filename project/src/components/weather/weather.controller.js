(function() {
  'use strict';

  function WeatherCtrl($location,meteoService) {
    var vm = this;
    vm.meteoService = meteoService;


  }

  WeatherCtrl.$inject = ['$location','meteoService'];

  angular.module('daproject')
    .controller('WeatherCtrl', WeatherCtrl);

})();
