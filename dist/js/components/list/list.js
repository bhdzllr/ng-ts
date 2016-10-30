/// <reference path='../../../typings/index.d.ts' />
var ListCtrl = (function () {
    function ListCtrl($http) {
        var _this = this;
        var api = new GitHubAPI($http);
        api.get(100).then(function (response) {
            _this.data = response.data;
        });
    }
    return ListCtrl;
}());
App.component('issueList', {
    templateUrl: 'js/components/list/list.html',
    controller: ListCtrl
});
