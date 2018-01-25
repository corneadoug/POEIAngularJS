(function() {
  'use strict';

  function CocktailCtrl($location, cocktailSearchservice) {
    var vm = this;
    vm.Detail = Detail;
    vm.cocktailSearchservice = cocktailSearchservice;
    
  function Detail(){
      $location.path('/cocktailDetail');
      cocktailSearchservice.getCocktailDetails(vm.cocktailElement.idDrink);
    }
  }

  CocktailCtrl.$inject = ['$location', 'cocktailSearchservice'];

  angular.module('daproject')
    .controller('CocktailCtrl', CocktailCtrl);

})();
