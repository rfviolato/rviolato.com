'use strict';

angular.module('rviolatocomApp')
    .service('helloSvc', helloService);

function helloService() {
	var self = this;

	self.state = {
		greetings: false,
		ellipses: false,
	};
}