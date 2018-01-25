(function () {
  'use strict';

  function searchConfig() {
    var service = {};
    service.ingredient = '';
    return service;
  }

  searchConfig.$inject = [];

  angular.module('daproject')
    .factory('searchConfig', searchConfig);

})();
