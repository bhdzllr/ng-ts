/// <reference path='../../../typings/index.d.ts' />

'use strict';

interface IRecord {
	id: number,
	title: string,
	state: string,
	number: number,
	created: string,
	url: string
}

class GitHubAPI {

	static $inject = ['$http'];

	private $http: angular.IHttpService;
	private url: string = 'https://api.github.com/repos/Microsoft/TypeScript/pulls';

	constructor($http: angular.IHttpService) {
		this.$http = $http;
	}

	setUrl(url: string): void {
		this.url = url;
	}

	// Type? Eigentlich promise.
	getData(length: number): any {
		return this.$http.get(this.url + '?per_page=' + length);
	}

}

App.service('githubAPI', GitHubAPI);
