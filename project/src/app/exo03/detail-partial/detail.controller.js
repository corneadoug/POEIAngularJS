(function() {
  'use strict';

  function DetailCtrl() {
    var vm = this;
    vm.plat = "pasta";
}
   

  DetailCtrl.$inject = [];

  angular.module('daproject')
    .controller('DetailCtrl', DetailCtrl);

})();