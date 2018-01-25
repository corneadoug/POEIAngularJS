(function() {
    'use strict';
  
    function searchConfigservice() {
      var service = {};
      
      service.ingredient = '';

      return service;
    }

    searchConfigservice.$inject = [];
    
    angular.module('daproject')
        .factory('searchConfigservice', searchConfigservice);
  
})();