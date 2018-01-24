(function() {
    'use strict';
  
    function settingService() {
      var service = {};

      service.city = 'Choix de la ville';
      service.isCelsius = true;

      return service;
    }

    settingService.$inject = [];
    
    angular.module('daproject')
        .factory('settingService', settingService);
  
})();