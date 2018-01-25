(function() {
  'use strict';

  function CocktailCtrl($location, cocktailSearchService) {
    var vm = this;
    vm.cocktailSearchService = cocktailSearchService;

  }

  CocktailCtrl.$inject = ['$location','cocktailSearchService'];

  angular.module('daproject')
    .controller('CocktailCtrl', CocktailCtrl);

})();
