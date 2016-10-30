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
// 'use strict';
// var App = angular.module('App', [
// 	'ngRoute'
// ]);
// App.config(['$routeProvider', function($routeProvider) {
// 	// $routeProvider
// 	// 	.when('/', {
// 	// 		templateUrl: 'js/index/index.html',
// 	// 		controller: 'IndexCtrl'
// 	// 	})
// 	// 	.otherwise({
// 	// 		redirectTo: '/'
// 	// 	});
// }]);
// App.component('greetUser', {
// 	template: 'Hello, {{$ctrl.user}}!',
// 	controller: function () {
// 		this.user = 'world';
// 	}
// });
// App.component('issueList', {
// 	template: 
// 		'<ul>' +
// 			'<li ng-repeat="issue in $ctrl.issues">{{issue.name}}</li>' +
// 		'</ul>',
// 	controller: function IssueListController() {
// 		this.issues = [
// 			{
// 				name: 'Nexus S',
// 				snippet: 'Fast just got faster with Nexus S.'
// 			}, {
// 				name: 'Motorola XOOM™ with Wi-Fi',
// 				snippet: 'The Next, Next Generation tablet.'
// 			}, {
// 				name: 'MOTOROLA XOOM™',
// 				snippet: 'The Next, Next Generation tablet.'
// 			}
// 		];
// 	}
// });
