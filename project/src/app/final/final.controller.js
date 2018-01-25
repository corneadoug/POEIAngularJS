(function() {
  'use strict';

  function FinalCtrl($location, searchConfigservice, cocktailSearchservice) {
    var vm = this;
    
    vm.valeur = searchConfigservice.ingredient;
    vm.searchConfigservice = searchConfigservice;
    vm.SelectionChange = SelectionChange;
    vm.cocktailSearchservice = cocktailSearchservice;
    
    function SelectionChange(){
      vm.searchConfigservice.ingredient = vm.valeur;
      vm.cocktailSearchservice.getCocktails();
    }
    
  }

  FinalCtrl.$inject = ['$location', 'searchConfigservice', 'cocktailSearchservice'];

  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();
