/// <reference path='../typings/index.d.ts' />
var App = angular.module('App', [
    'ngRoute'
]);
App.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'pages/home.html',
        })
            .otherwise({
            redirectTo: '/'
        });
    }]);
