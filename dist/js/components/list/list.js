/// <reference path='../../../typings/index.d.ts' />
'use strict';
var ListCtrl = (function () {
    function ListCtrl(api) {
        var _this = this;
        this.api = api;
        this.data = [{
                'id': 0,
                'title': 'Loading pull requests...',
                'state': 'none',
                'number': 0,
                'created': 'loading...',
                'url': '#'
            }];
        // Type? Eigentlich promise.
        api.getData(100).then(function (response) {
            _this.data = [];
            for (var i in response.data) {
                _this.data.push({
                    'id': response.data[i].id,
                    'title': response.data[i].title,
                    'state': response.data[i].state,
                    'number': response.data[i].number,
                    'created': response.data[i].created_at.replace(/[TZ]/g, ' '),
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
