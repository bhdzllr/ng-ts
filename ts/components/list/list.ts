/// <reference path='../../../typings/index.d.ts' />

'use strict';

class ListCtrl {

	public data: IRecord[] = [];

	constructor ( $http: angular.IHttpService ) {
		let api = new GitHubAPI( $http );

		// Type? Eigentlich promise.
		api.get(100).then((response: any) => {
			for (var i in response.data) {
				this.data.push({
					'id':      response.data[i].id,
					'title':   response.data[i].title,
					'state':   response.data[i].state,
					'number':  response.data[i].number,
					'created': response.data[i].created_at
				});
			}
		});
	}

}

App.component('issueList', {
	templateUrl: 'js/components/list/list.html',
	controller: ListCtrl
});
