/// <reference path='../../../typings/index.d.ts' />

class GitHubAPI {

	private $http: angular.IHttpService;
	private url: string = 'https://api.github.com/repos/Microsoft/TypeScript/pulls';

	constructor ($http: angular.IHttpService, url: string = null) {
		this.$http = $http;
		if (url) this.url = url;
	}

	get(length: number) {
		return this.$http.get(this.url + '?per_page=' + length);
	}

}

App.service('githubAPI', GitHubAPI);
