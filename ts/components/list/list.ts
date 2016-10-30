/// <reference path='../../../typings/index.d.ts' />

'use strict';

class ListCtrl {

	static $inject = ['githubAPI'];

	public data: IRecord[] = [];

	constructor(
		private api: GitHubAPI,
		private filter: ListFilter
	) {
		// Type? Eigentlich promise.
		api.getData(100).then((response: any) => {
			for (var i in response.data) {
				this.data.push({
					'id':        response.data[i].id,
					'title':     response.data[i].title,
					'state':     response.data[i].state,
					'number':    response.data[i].number,
					'created':   response.data[i].created_at,
					'url':       response.data[i].html_url
				});
			}
		});
	}

}

App.component('issueList', {
	templateUrl: 'js/components/list/list.html',
	controller: ListCtrl
});
