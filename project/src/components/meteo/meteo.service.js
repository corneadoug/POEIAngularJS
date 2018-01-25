(function() {
    'use strict';
  
    function meteoService($http, settingService) {
      var service = {};
      service.meteoliste = [];
      service.getMeteo = getMeteo;

    	function getMeteo() {
			return $http.get('http://api.openweathermap.org/data/2.5/forecast?q={{exo04.service.city}}&APPID=&APPID=1f7da13f24fda94160547b9e4403aee5&units=metric=' + toto + '&param2=' + tata)
            .then(function(response){
                console.log('Success: %o', response);
                service.meteoliste = response.data.list;
            })
            .catch(function(error){
                console.log('Error: %o', error);
            });
		}

      return service;
    }




    meteoService.$inject = ['$http', 'settingService'];
    
    angular.module('daproject')
        .factory('meteoService', meteoService);
  
})();