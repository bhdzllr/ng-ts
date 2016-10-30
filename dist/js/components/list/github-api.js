/// <reference path='../../../typings/index.d.ts' />
'use strict';
var GitHubAPI = (function () {
    function GitHubAPI($http) {
        this.url = 'https://api.github.com/repos/Microsoft/TypeScript/pulls';
        this.$http = $http;
    }
    GitHubAPI.prototype.setUrl = function (url) {
        this.url = url;
    };
    // Type? Eigentlich promise.
    GitHubAPI.prototype.getData = function (length) {
        return this.$http.get(this.url + '?per_page=' + length);
    };
    GitHubAPI.$inject = ['$http'];
    return GitHubAPI;
}());
App.service('githubAPI', GitHubAPI);
