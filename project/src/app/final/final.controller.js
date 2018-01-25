(function() {
  'use strict';

  function FinalCtrl(searchConfigService, cocktailSearchService) {
    var vm = this;
    vm.a = 'beer';
    vm.select = select;
    vm.searchConfig = searchConfigService;
    vm.cocktailSearch = cocktailSearchService;

  function select(){
    searchConfigService.ingredient = vm.a;
    console.log(vm.a);
    cocktailSearchService.getCocktails();
    }
}
   

  FinalCtrl.$inject = ['searchConfigService', 'cocktailSearchService'];

  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();