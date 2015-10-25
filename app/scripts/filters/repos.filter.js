'use strict';

(function() {
	angular.module('rviolatocomApp')
		.filter('repos', reposFilter);

	function reposFilter() {
		return function(repos) {
			return filterRepos(repos);
		}
	}

	function filterRepos(repos){
		var aux = [];
		var isPagarme = new RegExp(/pagarme-ng-/);

		repos.forEach(function(repo){
		    if(repo.owner.login === 'rfviolato'){
		      if(!repo.fork){
		        aux.push(repo);
		      }else if(isPagarme.test(repo.name)){
		        aux.push(repo);
		      }
		    }
		});

		console.log(aux);

		return aux;
	}
})();