(function() {
    'use strict';
  
    function meteoService($http, settingService) {
      var service = {};

      service.meteoListe = [];
      service.settingService = settingService;
      service.getMeteo = getMeteo;

      function getMeteo(){
        return $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+service.settingService.city+'&APPID=7e9ea8dd319731b1cb24bb7e37012e91&units=metric')
          .then(function(response){
            service.meteoListe = response.data.list;
          })
          .catch(function(error){
            service.meteoListe = [];
          });
      }

      return service;
    }

    meteoService.$inject = ['$http', 'settingService'];
    
    angular.module('daproject')
        .factory('meteoService', meteoService);
  
})();