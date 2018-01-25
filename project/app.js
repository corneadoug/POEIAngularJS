(function() {
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
      });
          
    $routeProvider
      .when('/exo03', {
        templateUrl: 'src/app/exo03/exo03.html',
        controller: 'Exo03Ctrl',
        controllerAs: 'Exo03',
      }).otherwise({redirectTo:'/'});
    
      $routeProvider
      .when('/exo04', {
        templateUrl: 'src/app/exo04/exo04.html',
        controller: 'Exo04Ctrl',
        controllerAs: 'Exo04',
      }).otherwise({redirectTo:'/'});
    
      $routeProvider
        .when('/more', {
          templateUrl: 'src/app/more/more.html',
          controller: 'MoreCtrl',
          controllerAs: 'More',
        }).otherwise({redirectTo:'/'});
    
      $routeProvider
        .when('/weather', {
          templateUrl: 'src/components/weather/weather.html',
          controller: 'weatherCtrl',
          controllerAs: 'Weather',
        }).otherwise({redirectTo:'/'});
    
      $routeProvider
        .when('/final', {
          templateUrl: 'src/app/final/final.html',
          controller: 'FinalCtrl',
          controllerAs: 'Final',
        }).otherwise({redirectTo:'/'});
    
      $routeProvider
        .when('/cocktail', {
          templateUrl: 'src/components/cocktail/cocktail.html',
          controller: 'CocktailCtrl',
          controllerAs: 'Cocktail',
        }).otherwise({redirectTo:'/'});
    
      $routeProvider
        .when('/cocktailDetail', {
          templateUrl: 'src/app/cocktailDetail/cocktailDetail.html',
          controller: 'CocktailDetailCtrl',
          controllerAs: 'CocktailDetail',
        }).otherwise({redirectTo:'/'});
    
  }
    
  function RunUtils($rootScope) {
    $rootScope.safeApply = function(fn) {
      var phase = $rootScope.$$phase;
      if (phase === '$apply' || phase === '$digest') {
        if (fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };
  }

})();
