(function() {
    'use strict';
  
    function meteoService($http, settingService ) {
        var service = {};
        service.meteoListe = [];
        service.setting  = settingService;

    function getMeteo(name) {
    return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + service.setting.city  + '&APPID=4cca01a4d94a3a7e5e23904856e8ad53&units=metric')
        .then(function(response){
            console.log('Success: %o', response);
            service.meteoListe = response.data.list;
        })
        .catch(function(error){
            console.log('Error: %o', error);
            service.meteoListe = [];
        });
    }

        return service;
    }
    meteoService.$inject = ['$http', 'settingService'];
    
    angular.module('daproject')
        .factory('meteoService', meteoService);
  
})();