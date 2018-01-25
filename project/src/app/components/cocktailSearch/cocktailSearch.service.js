(function() {
    'use strict';
  
    function cocktailSearchService($http, searchConfig) {
      var service = {};
      service.cocktailList = [];
      service.getCocktails = getCocktails;

      
    function getCocktails(){
      return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+ searchConfig.ingredient)
            .then(function(response){
                service.cocktailList = response.data.list;
                console.log('Success: %o', response);
            })
            .catch(function(error){
                service.cocktailList = [];
                console.log('Error: %o', error);
            });
  }

      return service;
    }

    cocktailSearchService.$inject = ['$http', 'searchConfigService'];
    
    angular.module('daproject')
        .factory('cocktailSearchService', cocktailSearchService);
  
})();