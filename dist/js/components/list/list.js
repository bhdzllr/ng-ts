/// <reference path='../../../typings/index.d.ts' />
'use strict';
var ListCtrl = (function () {
    function ListCtrl($http) {
        var _this = this;
        this.data = [];
        var api = new GitHubAPI($http);
        // Type? Eigentlich promise.
        api.get(100).then(function (response) {
            for (var i in response.data) {
                _this.data.push({
                    'id': response.data[i].id,
                    'title': response.data[i].title,
                    'state': response.data[i].state,
                    'number': response.data[i].number,
                    'created': response.data[i].created_at
                });
            }
        });
    }
    return ListCtrl;
}());
App.component('issueList', {
    templateUrl: 'js/components/list/list.html',
    controller: ListCtrl
});
