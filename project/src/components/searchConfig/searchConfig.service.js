(function() {
    'use strict';
  
    function searchConfig() {
      var vm = {};
      vm.ingredient = '';

      return vm;


    }



    searchConfig.$inject = [];
    
    angular.module('daproject')
        .factory('searchConfig', searchConfig);
  
})();