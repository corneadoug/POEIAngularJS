(function() {
	'use strict';

	function meteoService($http,settingService) {
		var service = {};
		service.settingService=settingService;
		service.meteoListe = [];
		service.getMeteo = getMeteo;

		return service;
		
		function getMeteo(){
			return $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+settingService.city+'&APPID=abbd0f3c38740c20b747e27908862efd&units=metric')
            .then(function(response){
				service.meteoListe=response.data.list;
            })
            .catch(function(error){
                service.meteoListe = [];
            });
		}
	}

	meteoService.$inject = ['$http','settingService'];

	angular.module('daproject')
		.factory('meteoService', meteoService);

})();