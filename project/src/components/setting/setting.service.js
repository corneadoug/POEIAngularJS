(function () {
  'use strict';

  function settingService() {
    var service = {};
    service.ingredient = '';


    console.log(service.ingredient);
    return service;
  }

  settingService.$inject = [];

  angular.module('daproject')
    .factory('settingService', settingService);

})();
