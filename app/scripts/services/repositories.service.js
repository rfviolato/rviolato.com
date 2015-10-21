'use strict';

angular.module('rviolatocomApp')
    .service('reposSvc', reposService);

    reposService.$inject = ['$http'];

	function reposService($http) {
		var self = this;

		self.getRepos = $http.get('https://api.github.com/users/rfviolato/repos');
	}