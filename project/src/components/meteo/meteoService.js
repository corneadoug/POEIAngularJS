(function() {
    'use strict';
  
    function meteoService($http, settingService) {
      var service = {};
      
      service.meteoListe = [];
      service.getMeteo=getMeteo;
      service.settingService = settingService;
      
      function getMeteo(){
        return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + service.settingService.city + '&APPID=a51e4407c26282da2160fa95ca83f67e&units=metric')
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