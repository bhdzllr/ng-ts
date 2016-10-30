/// <reference path='../../../typings/index.d.ts' />
var HelloCtrl = (function () {
    function HelloCtrl() {
        this.world = 'my friend';
    }
    return HelloCtrl;
}());
App.component('hello', {
    templateUrl: 'js/components/hello/hello.html',
    controller: HelloCtrl
});
