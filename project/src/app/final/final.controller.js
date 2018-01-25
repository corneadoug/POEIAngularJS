(function() {
  'use strict';

  function FinalCtrl(searchConfigService, cocktailSearchService) {
    var vm = this;
    vm.a = 'Votre boisson ?';
    vm.clic = clic;
    vm.searchConfig = searchConfigService;
    vm.cocktailSearch = cocktailSearchService;

    function clic() {
      searchConfigService.ingredient = vm.a;
      console.log(vm.a);
      cocktailSearchService.getCocktails();
    }
  }

  FinalCtrl.$inject = ['searchConfigService', 'cocktailSearchService'];

  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();