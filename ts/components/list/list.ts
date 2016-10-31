/// <reference path='../../../typings/index.d.ts' />

'use strict';

class ListCtrl {

	static $inject = ['githubAPI'];

	public data: IRecord[] = [{
		'id':      0,
		'title':   'Loading pull requests...',
		'state':   'none',
		'number':  0,
		'created': 'loading...',
		'url':     '#'
	}];

	constructor(
		private api: GitHubAPI
	) {
		// Type? Eigentlich promise.
		api.getData(100).then((response: any) => {
			this.data = [];

			for (var i in response.data) {
				this.data.push({
					'id':      response.data[i].id,
					'title':   response.data[i].title,
					'state':   response.data[i].state,
					'number':  response.data[i].number,
					'created': response.data[i].created_at.replace(/[TZ]/g, ' '),
					'url':     response.data[i].html_url
				});
			}
		});
	}

}

App.component('issueList', {
	templateUrl: 'js/components/list/list.html',
	controller: ListCtrl
});
