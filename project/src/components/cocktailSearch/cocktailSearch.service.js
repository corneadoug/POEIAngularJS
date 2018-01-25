(function() {
	'use strict';

	function cocktailSearchService($http, searchConfig) {
		var service = {};
		service.cocktailList = [];
		service.getCocktails = getCocktails;

		function getCocktails() {
			return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchConfig.ingredient)
		.then(function(response){
			console.log('Success: %o', response);
			service.cocktailList = response.data.drinks;
		})
		.catch(function(error){
			console.log('Error: %o', error);
			service.cocktailList = [];
		});
	}

		return service;
    }

	cocktailSearchService.$inject = ['$http', 'searchConfigService'];
    
    angular.module('daproject')
        .factory('cocktailSearchService', cocktailSearchService);
  
})();