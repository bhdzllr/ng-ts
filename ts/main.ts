/// <reference path='../typings/index.d.ts' />

var App = angular.module('App', [
	'ngRoute'
]);

App.config(['$routeProvider', function($routeProvider: angular.route.IRouteProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/home.html',
		})
		.otherwise({
			redirectTo: '/'
		});
}]);
