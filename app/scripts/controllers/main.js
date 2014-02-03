angular.module('ngRouteApp')
    .controller('MainCtrl', function ($scope) {
        console.log('back home');
    })
    .controller('LeoCrtl', function ($scope, $routeParams, $location) {
        $scope.routeParams = $routeParams;
        $scope.location = JSON.stringify($location, null, 2);
    });
