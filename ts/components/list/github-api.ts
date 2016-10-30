/// <reference path='../../../typings/index.d.ts' />

'use strict';

interface IRecord {
	id: number,
	title: string,
	state: string,
	number: number,
	created: string
}

class GitHubAPI {

	private $http: angular.IHttpService;
	private url: string = 'https://api.github.com/repos/Microsoft/TypeScript/pulls';

	constructor ($http: angular.IHttpService, url: string = null) {
		this.$http = $http;
		if (url) this.url = url;
	}

	// Type? Eigentlich promise.
	get(length: number): any {
		return this.$http.get(this.url + '?per_page=' + length);
	}

}

App.service('githubAPI', GitHubAPI);
