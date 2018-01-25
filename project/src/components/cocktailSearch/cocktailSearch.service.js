(function() {
    'use strict';
  
    function cocktailSearch(searchConfig, $http) {
        var service = {};
    	service.cocktailList = [];
        service.searchConfig = searchConfig;
        service.getCocktail = getCocktail;
        
	   
            function getCocktail(){
            return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+ service.searchConfig.ingredient)
            .then(function(response){
                service.cocktailList = response.data.drinks;
            })
            .catch(function(error){
                service.cocktailList = [];
            });
            }

        return service;
    }

    cocktailSearch.$inject = ['searchConfig','$http'];
    
    angular.module('daproject')
        .factory('cocktailSearch', cocktailSearch);
  
})();