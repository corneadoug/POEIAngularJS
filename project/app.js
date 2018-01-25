(function () {
  'use strict';

  angular.module('daproject', [
    'ui.bootstrap',
    'ngRoute',
    'ngAnimate'
  ]);

  angular.module('daproject')
    .config(AppConfig);

  angular.module('daproject')
    .run(RunUtils);

  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/app/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
      })
      .when('/exo03', {
        templateUrl: 'src/app/exo03/exo03.html',
        controller: 'exo03Ctrl',
        controllerAs: 'exo03',
      })
      .when('/exo03/detail-partial', {
        templateUrl: 'src/app/exo03/detail-partial/detail.html',
        controller: 'detailCtrl',
        controllerAs: 'detail',
      })
      .when('/exo04', {
        templateUrl: 'src/app/exo04/exo04.html',
        controller: 'exo04Ctrl',
        controllerAs: 'exo04',
      })
      .when('/more', {
        templateUrl: 'src/app/more/more.html',
        controller: 'moreCtrl',
        controllerAs: 'more',
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  function RunUtils($rootScope) {
    $rootScope.safeApply = function (fn) {
      var phase = $rootScope.$$phase;
      if (phase === '$apply' || phase === '$digest') {
        if (fn && (typeof (fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };
  }

})();
