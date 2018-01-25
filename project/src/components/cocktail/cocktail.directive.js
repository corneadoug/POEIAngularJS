(function() {
  'use strict';
	
	angular.module('daproject')
    .directive('maDirective', function() {
      return {
        templateUrl: 'src/components/madirective/madirective.html',
        restrict: 'E',
        bindToController: {
          cocktailElement : '='
        },
	scope: {},
        controller: 'MaDirectiveController',
        controllerAs: 'ma'
      };
    });

})();