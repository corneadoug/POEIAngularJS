(function() {
    'use strict';
  
    function cocktailSearch(searchConfig, $http) {
      var vm = {};
      vm.cocktailist = [];
      vm.getCocktail = getCocktail;

       function getCocktail(){
			return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchConfig.ingredient)
            .then(function(response){
                console.log('Success: %o', response);
                vm.cocktailist = response.data.list;
            })
            .catch(function(error){
                console.log('Error: %o', error);
            });
		}


      return vm;
    }


    cocktailSearch.$inject = ['searchConfig', '$http'];
    
    angular.module('daproject')
        .factory('cocktailSearch', cocktailSearch);
  
})();