(function() {
  'use strict';

  function FinalCtrl(searchConfig) {
    var vm = this;
    vm.input = '';

    function click() {
     searchConfig.ingredient = vm.ingredient;
    }
  }


  FinalCtrl.$inject = ['searchConfig'];

  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();