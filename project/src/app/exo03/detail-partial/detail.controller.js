(function() {
  'use strict';

  function DetailCtrl($location) {
    var vm = this;
    

    function goToExo(exoNumber) {
      if (exoNumber === 3) {
        $location.path('/detail');
      }
    }
  }

  DetailCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('DetailCtrl', DetailCtrl);

})();