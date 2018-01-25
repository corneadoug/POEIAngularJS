(function() {
    'use strict';
  
    function cocktailSearchservice(searchConfigservice, $http) {
      var service = {};
      
      service.cocktailList = [];
      service.getCocktails = getCocktails;
      service.searchConfigservice = searchConfigservice;
      service.cocktailDetail = {};
      service.getCocktailDetails = getCocktailDetails;
      service.cocktailDetail = {};
      
      function getCocktails(){
        return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + service.searchConfigservice.ingredient )
            .then(function(response){
                service.cocktailList = response.data.drinks;
            })
            .catch(function(error){
                service.cocktailList = [];
            });
      }
      
      function getCocktailDetails(cocktailId){
        return $http.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + cocktailId )
            .then(function(response){
                service.cocktailDetail = response.data.drinks[0];
            })
            .catch(function(error){
                service.cocktailDetail = {};
            });
      }

      return service;
    }

    cocktailSearchservice.$inject = ['searchConfigservice','$http'];
    
    angular.module('daproject')
        .factory('cocktailSearchservice', cocktailSearchservice);
  
})();