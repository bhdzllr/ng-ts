/// <reference path='../../../typings/index.d.ts' />
'use strict';
var ListCtrl = (function () {
    function ListCtrl(api, filter) {
        var _this = this;
        this.api = api;
        this.filter = filter;
        this.data = [];
        // Type? Eigentlich promise.
        api.getData(100).then(function (response) {
            for (var i in response.data) {
                _this.data.push({
                    'id': response.data[i].id,
                    'title': response.data[i].title,
                    'state': response.data[i].state,
                    'number': response.data[i].number,
                    'created': response.data[i].created_at,
                    'url': response.data[i].html_url
                });
            }
        });
    }
    ListCtrl.$inject = ['githubAPI'];
    return ListCtrl;
}());
App.component('issueList', {
    templateUrl: 'js/components/list/list.html',
    controller: ListCtrl
});
