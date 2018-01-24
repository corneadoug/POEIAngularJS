(function() {
  'use strict';

  function MoreCtrl($location) {
    var vm = this;
  }

  MoreCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('MoreCtrl', MoreCtrl);

})();
