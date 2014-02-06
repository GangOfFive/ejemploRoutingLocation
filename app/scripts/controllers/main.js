angular.module('ngRouteApp')
    .controller('MainCtrl', function () {
        console.log('back home');
    })
    .controller('LeoCrtl', function ($scope, $routeParams, $location) {
        $scope.routeParams = $routeParams;
        $scope.location = JSON.stringify($location, null, 2);
    })
    .controller('RedirectCrtl', function($window, $timeout) {
        $timeout($window.location.href = 'http://google.com', 1000);
    });
