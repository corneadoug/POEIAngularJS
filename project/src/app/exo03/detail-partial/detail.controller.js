(function() {
  'use strict';

  function DetailCtrl($location) {
    var vm = this;
    
    vm.Visible = true;
    vm.Texte = 'Masquer les détails';
    vm.SelectionChange=SelectionChange;
    
    function SelectionChange(){
      if (vm.Visible === true){
        vm.Visible = false;
        vm.Texte = 'Afficher les détails';
      }else{
        vm.Visible = true;
        vm.Texte = 'Masquer les détails';
      }
    }
  }

  DetailCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('DetailCtrl', DetailCtrl);

})();
