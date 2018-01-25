(function() {
    'use strict';
  
    function searchConfigService() {
      var service = {};

      service.ingredient = 'Ingredient';

      return service;
    }

    searchConfigService.$inject = [];
    
    angular.module('daproject')
        .factory('searchConfigService', searchConfigService);
  
})();