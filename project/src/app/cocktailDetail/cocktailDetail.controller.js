(function() {
  'use strict';

  function CocktailDetailCtrl($location, cocktailSearchservice) {
    var vm = this;
    vm.Retour = Retour;
    vm.cocktailSearchservice = cocktailSearchservice;
    
    function Retour(){
      $location.path('/final');
    }
    
  }

  CocktailDetailCtrl.$inject = ['$location', 'cocktailSearchservice'];

  angular.module('daproject')
    .controller('CocktailDetailCtrl', CocktailDetailCtrl);

})();