(function() {
  'use strict';
	
	angular.module('daproject')
    .directive('madirective', function() {
      return {
        templateUrl: 'src/components/madirective/ma.html',
        restrict: 'E',
        bindToController: {
          pizza: '=',
          camelcase: '='
        },
        controller: 'maCtrl',
        controllerAs: 'madirective'
      };
    });

})();