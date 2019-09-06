(function() {
  'use strict';

  function DetailCtrl($location) {
    var vm = this;
    vm.affiche = true;
    vm.buttonAffiche = "Montrer";

    vm.change = change;

    function change()
    {
    	if(vm.affiche === true)
    	{
    		vm.affiche = false;
    		vm.buttonAffiche = "Cacher";
    	}else{
    		vm.affiche = true;
    		vm.buttonAffiche = "Montrer";
    	}
    }


  }

  DetailCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('DetailCtrl', DetailCtrl);

})();