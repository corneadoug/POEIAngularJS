(function () {
  'use strict';

  function settingService() {
    var service = {};
    service.city = '';
    service.isCelsius = true;

    console.log(service.city);
    return service;
  }

  settingService.$inject = [];

  angular.module('daproject')
    .factory('settingService', settingService);

})();
