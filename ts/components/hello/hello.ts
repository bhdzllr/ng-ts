/// <reference path='../../../typings/index.d.ts' />

'use strict';

class HelloCtrl {

	public world: string;

	constructor () {
		this.world = 'my friend';
	}

}

App.component('hello', {
	templateUrl: 'js/components/hello/hello.html',
	controller: HelloCtrl
});
