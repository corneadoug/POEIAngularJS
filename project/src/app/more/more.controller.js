(function() {
  'use strict';

  function MoreCtrl($location, meteoService) {
    var vm = this;
    vm.Retour = Retour;
    vm.meteoService = meteoService;
    
    function Retour(){
      $location.path('/exo04');
    }
  }

  MoreCtrl.$inject = ['$location', 'meteoService'];

  angular.module('daproject')
    .controller('MoreCtrl', MoreCtrl);

})();
