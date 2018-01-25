(function() {
  'use strict';


  function DetailCtrl() {
    var vm = this;
    vm.plat = 'pizza';
    vm.boisson = 'coca';
    vm.liste = [
      {name: 'Jean'},
      {name: 'Luc'},
      {name: 'Regis'}
    ];
  }


  DetailCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('DetailCtrl', DetailCtrl);

})();
