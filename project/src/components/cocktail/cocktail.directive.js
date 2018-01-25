(function() {
  'use strict';
	
	angular.module('daproject')
    .directive('cocktail', function() {
      return {
        templateUrl: 'src/components/cocktail/cocktail.html',
        restrict: 'E',
        bindToController: {
          cocktailElement: '=',
        },
        scope:{},
        controller: 'CocktailCtrl',
        controllerAs: 'Cocktail'
      };
    });

})();