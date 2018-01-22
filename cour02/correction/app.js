angular.module('AngularExo02', ['ui.bootstrap','ngRoute','ngAnimate']);

angular.module('AngularExo02').config(function($routeProvider) {
    
        $routeProvider.when('/', {
            templateUrl: 'src/app/home/home.html',
            controller: 'HomeCtrl'
        });

        $routeProvider.when('/meteo', {
            templateUrl: 'src/app/meteo/meteo.html',
            controller: 'MeteoCtrl'
        });
        /* Add New Routes Above */
        $routeProvider.otherwise({redirectTo:'/'});
        
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
