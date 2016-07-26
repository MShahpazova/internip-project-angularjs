/// <reference path="../typings/tsd.d.ts"/>
//route config
var app = angular.module("hydra", ['ngRoute', 'hydra.services', 'hydra.controllers'])
    .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'app/components/home/home-view.html',
        controller: 'testController'
    })
        .when('/test', {
        templateUrl: 'app/components/test/test-view.html',
        controller: 'testController'
    })
        .otherwise({
        redirectTo: '/'
    });
})
    .run(function ($http) {
    $http.defaults.headers.get = { 'Access-Control-Allow-Origin': '*' };
    $http.defaults.headers.get = { 'Access-Control-Allow-Headers': '*' };
});
