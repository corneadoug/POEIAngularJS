(function() {
  'use strict';
	
	angular.module('daproject')
    .directive('weather', function() {
      return {
        templateUrl: 'src/components/weather/weather.html',
		restrict: 'E',
        bindToController: {
          meteoElement: '='
        },
		scope: {},
        controller: 'WeatherCtrl',
        controllerAs: 'weather'
      };
    });
})();