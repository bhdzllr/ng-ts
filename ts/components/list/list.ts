/// <reference path='../../../typings/index.d.ts' />

class ListCtrl {

	public data;

	constructor ( $http: angular.IHttpService ) {
		let api = new GitHubAPI( $http );

		api.get(100).then((response) => {
			this.data = response.data;
		});
	}

}

App.component('issueList', {
	templateUrl: 'js/components/list/list.html',
	controller: ListCtrl
});
