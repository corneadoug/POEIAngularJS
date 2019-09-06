(function() {
    'use strict';
  
    function cocktailSearchService($http,searchConfigService) {
      var service = {};
      service.cocktailList = [];
      service.getCocktails = getCocktails;
      service.searchConfigService = searchConfigService;
      service.cocktailDetail = {};
      service.getCocktailDetail = getCocktailDetail;
      service.cocktailId =cocktailId;

      function getCocktails(){
      	return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+searchConfigService.ingredient)
          .then(function(response){
            service.cocktailList = response.data.drinks;
          })
          .catch(function(error){
            service.cocktailList = [];
          });
      }

      function getCocktailDetail(){
        return $http.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+cocktailId)
          .then(function(response){
            service.cocktailDetail = response.data.drinks[0];
          })
          .catch(function(error){
            service.cocktailDetail = {};
          });
      }

      return service;
    }

    cocktailSearchService.$inject = ['$http','searchConfigService'];
    
    angular.module('daproject')
        .factory('cocktailSearchService', cocktailSearchService);
  
})();