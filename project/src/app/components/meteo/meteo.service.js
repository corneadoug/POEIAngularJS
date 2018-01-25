(function() {
    'use strict';
  
    function meteoService($http, settingService) {
      var service = {};
      service.meteoList = [];
      service.setting = settingService;


    function getMeteo(){
      return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + setting.service.city +'&APPID=8b691ba261364ecfcccedf51c705f77d&units=metric')
            .then(function(response){
                service.meteoList = response.data.list;
                console.log('Success: %o', response);
            })
            .catch(function(error){
                service.meteoList = [];
                console.log('Error: %o', error);
            });
  }
      return service;
    }

    meteoService.$inject = ['$http', 'settingService'];
    
    angular.module('daproject')
        .factory('meteoService', meteoService);
  
})();