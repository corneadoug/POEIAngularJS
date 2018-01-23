angular.module('AngularExo02', ['ui.bootstrap','ngRoute','ngAnimate']);

angular.module('AngularExo02').config(function($routeProvider, $locationProvider) {

    
    $routeProvider.when('/', {
        templateUrl: 'src/app/home/home.html',
        controller: 'HomeCtrl'
    });
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/'});
    
    $locationProvider.html5Mode(true);
});

angular.module('AngularExo02').run(function($rootScope) {

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

});
