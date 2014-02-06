angular.module('ngRouteApp', [
        'ngRoute'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/leodelay/:param1/:param2', {
                templateUrl: 'views/leo.html',
                controller: 'LeoCrtl',
                resolve: {
                    delay: function($q, $timeout) {
                        var retraso = $q.defer();
                        $timeout(retraso.resolve, 1000);
                        return retraso.promise;
                    }
                }
            })
            .when('/leo/:param1/:param2', {
                templateUrl: 'views/leo.html',
                controller: 'LeoCrtl'
            })
            .when('/redirect',  {
                templateUrl: 'views/redirect.html',
                controller: 'RedirectCrtl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.hashPrefix('!!');

    });
