(function() {
  'use strict';


  function FinalCtrl($location,searchConfigService,cocktailSearchService) {
  	var vm  =  this;

    vm.inputS ='';
    vm.affiche = affiche;
    vm.searchConfigService = searchConfigService;
    vm.cocktailSearchService = cocktailSearchService;

    function affiche(){
       vm.searchConfigService.ingredient = vm.inputS;
       vm.cocktailSearchService.getCocktails();
  }

}

  FinalCtrl.$inject = ['$location','searchConfigService','cocktailSearchService'];


  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();