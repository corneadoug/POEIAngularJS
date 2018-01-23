(function() {
  'use strict';

  function DetailCtrl($location) {
    var vm = this;
    vm.msg = 'new';
  }

  DetailCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('DetailCtrl', DetailCtrl);

})();